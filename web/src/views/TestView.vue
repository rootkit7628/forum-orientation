<script setup>
import { computed, ref, watch } from 'vue'
import ProfileLetters from '@/components/ProfileLetters.vue'
import { PROFILES, SERIES } from '@/data/orientation-test'
import { pb } from '@/lib/pb'
import { matchScore, profileCode, scoreAnswers, TYPES } from '@/lib/riasec'
import { trackVisit, visitorId } from '@/lib/visits'

const STORAGE = 'forum.test'

// One page per block of six statements, across the three series.
const pages = SERIES.flatMap((serie) =>
  serie.blocks.map((statements, b) => ({
    serie,
    blockIndex: b,
    items: statements.map((text, i) => ({ key: `${serie.id}-${b}-${i}`, text, type: TYPES[i] })),
  })),
)

function restore() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE)) ?? { answers: {}, step: 0 }
  } catch {
    return { answers: {}, step: 0 }
  }
}

const saved = restore()
const answers = ref(saved.answers)
const step = ref(Math.min(saved.step, pages.length))
const sent = ref(false)

watch(
  [answers, step],
  () => {
    try {
      localStorage.setItem(STORAGE, JSON.stringify({ answers: answers.value, step: step.value }))
    } catch {
      // private browsing: the test still works, it just won't resume after a reload
    }
  },
  { deep: true },
)

const current = computed(() => pages[step.value])
const finished = computed(() => step.value >= pages.length)
const pageComplete = computed(() => current.value?.items.every((it) => answers.value[it.key]))

function answer(item, liked) {
  answers.value[item.key] = { type: item.type, liked }
}

const scores = computed(() => scoreAnswers(answers.value))
const code = computed(() => profileCode(scores.value))
const maxScore = computed(() => pages.length)

const suggestions = ref([])
watch(
  finished,
  async (done) => {
    if (!done || !code.value) return
    if (!sent.value) {
      sent.value = true
      trackVisit('test', code.value)
      pb.collection('test_results')
        .create({ code: code.value, scores: scores.value, visitor: visitorId() })
        .catch(() => {})
    }
    try {
      const jobs = await pb.collection('jobs').getFullList({
        filter: pb.filter(
          [...code.value].map((_, i) => `profiles ~ {:p${i}}`).join(' || '),
          Object.fromEntries([...code.value].map((t, i) => [`p${i}`, t])),
        ),
        expand: 'domain',
      })
      suggestions.value = jobs
        .map((job) => ({ job, score: matchScore(code.value, job.profiles) }))
        .sort((a, b) => b.score - a.score || a.job.name.localeCompare(b.job.name))
        .slice(0, 6)
        .map((s) => s.job)
    } catch {
      suggestions.value = []
    }
  },
  { immediate: true },
)

function restart() {
  answers.value = {}
  step.value = 0
  sent.value = false
  suggestions.value = []
}
</script>

<template>
  <div class="page-head">
    <h1>Test d'orientation</h1>
    <p>
      Pour chaque phrase, dis simplement si elle te plaît. Il n'y a pas de bonne réponse : ça prend cinq
      minutes.
    </p>
  </div>

  <template v-if="!finished">
    <p>
      <strong>{{ current.serie.title }}</strong>
      <span class="muted"> (étape {{ step + 1 }} sur {{ pages.length }})</span>
    </p>
    <div
      class="progress"
      role="progressbar"
      :aria-valuenow="step"
      aria-valuemin="0"
      :aria-valuemax="pages.length"
    >
      <span :style="{ width: `${(step / pages.length) * 100}%` }"></span>
    </div>

    <ul class="statements">
      <li v-for="item of current.items" :key="item.key">
        <span :id="`st-${item.key}`">{{ item.text }}</span>
        <span class="choice" role="group" :aria-labelledby="`st-${item.key}`">
          <button type="button" :aria-pressed="answers[item.key]?.liked === true" @click="answer(item, true)">
            Ça me plaît
          </button>
          <button
            type="button"
            :aria-pressed="answers[item.key]?.liked === false"
            @click="answer(item, false)"
          >
            Pas pour moi
          </button>
        </span>
      </li>
    </ul>

    <div class="steps-nav">
      <button class="btn ghost" type="button" :disabled="step === 0" @click="step--">Étape précédente</button>
      <button class="btn" type="button" :disabled="!pageComplete" @click="step++">
        {{ step === pages.length - 1 ? 'Voir mon profil' : 'Étape suivante' }}
      </button>
    </div>
    <p v-if="!pageComplete" class="muted" style="text-align: right">
      Réponds aux six phrases pour continuer.
    </p>
  </template>

  <section v-else-if="!code" class="empty">
    <h2>Aucune phrase ne t'a plu</h2>
    <p>Impossible de dégager un profil. Recommence en choisissant ce qui t'attire, même un peu.</p>
    <button class="btn" type="button" @click="restart">Recommencer le test</button>
  </section>

  <section v-else aria-labelledby="result-title">
    <h2 id="result-title">Ton profil</h2>
    <div class="result-code">
      <span v-for="t of code" :key="t" class="plate">{{ t }}</span>
    </div>

    <div class="split">
      <div>
        <div v-for="t of code" :key="t" style="margin-bottom: 1.5rem">
          <h3>{{ PROFILES[t].name }}</h3>
          <p>{{ PROFILES[t].text }}</p>
        </div>

        <h3 style="margin: 2rem 0 0.75rem">Des métiers qui pourraient te plaire</h3>
        <ul v-if="suggestions.length" class="rows">
          <li v-for="job of suggestions" :key="job.id">
            <RouterLink class="row-link" :to="{ name: 'job', params: { id: job.id } }">
              <strong>{{ job.name }}</strong>
              <ProfileLetters :profiles="job.profiles" />
              <p>{{ job.summary }}</p>
            </RouterLink>
          </li>
        </ul>
        <p v-else class="muted">Les fiches métiers ne sont pas disponibles pour le moment.</p>
      </div>

      <div>
        <h3 style="margin-bottom: 0.75rem">Tes six scores</h3>
        <div class="bars">
          <template v-for="t of TYPES" :key="t">
            <span>{{ PROFILES[t].name }}</span>
            <span class="track"
              ><span class="fill" :style="{ width: `${(scores[t] / maxScore) * 100}%` }"></span
            ></span>
            <span>{{ scores[t] }}</span>
          </template>
        </div>
        <p class="muted">
          Ce test donne des pistes, pas un verdict. Parles-en aux conseillers présents sur les stands.
        </p>
        <button class="btn ghost" type="button" @click="restart">Recommencer le test</button>
      </div>
    </div>
  </section>
</template>
