<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProfileLetters from '@/components/ProfileLetters.vue'
import { pb } from '@/lib/pb'
import { useLoad } from '@/lib/use-load'

const PER_PAGE = 10
const route = useRoute()
const router = useRouter()

// The filters live in the URL, so a filtered list can be shared and survives "back".
const domain = computed(() => route.query.domaine || '')
const page = computed(() => Number(route.query.page) || 1)
const search = ref(route.query.q || '')
const q = computed(() => route.query.q || '')

function setQuery(changes) {
  router.replace({ query: { ...route.query, page: undefined, ...changes } })
}

let timer
watch(search, (value) => {
  clearTimeout(timer)
  timer = setTimeout(() => setQuery({ q: value.trim() || undefined }), 300)
})

function showAll() {
  search.value = ''
  setQuery({ q: undefined, domaine: undefined })
}

const { data: domains } = useLoad(() => pb.collection('domains').getFullList({ sort: 'name' }))

const {
  data: jobs,
  error,
  loading,
} = useLoad(() => {
  const parts = []
  const params = {}
  if (domain.value) {
    parts.push('domain = {:domain}')
    params.domain = domain.value
  }
  if (q.value) {
    parts.push('(name ~ {:q} || summary ~ {:q})')
    params.q = q.value
  }
  // pb.filter escapes the values: typing quotes in the search box cannot alter the query.
  return pb.collection('jobs').getList(page.value, PER_PAGE, {
    filter: parts.length ? pb.filter(parts.join(' && '), params) : '',
    expand: 'domain',
    sort: 'name',
  })
})
</script>

<template>
  <div class="page-head">
    <h1>Les métiers</h1>
    <p>Ce qu'on y fait, les études pour y arriver et les qualités utiles.</p>
  </div>

  <label class="field" style="max-width: 26rem">
    <span>Chercher un métier</span>
    <input v-model="search" type="search" placeholder="Infirmier, réseau, cuisine…" />
  </label>

  <ul v-if="domains" class="chips" aria-label="Domaines" style="margin-bottom: 1.5rem">
    <li>
      <button type="button" :aria-pressed="!domain" @click="setQuery({ domaine: undefined })">Tous</button>
    </li>
    <li v-for="d of domains" :key="d.id">
      <button type="button" :aria-pressed="domain === d.id" @click="setQuery({ domaine: d.id })">
        {{ d.name }}
      </button>
    </li>
  </ul>

  <p v-if="error" class="error" role="alert">{{ error }}</p>
  <p v-else-if="loading && !jobs" class="muted">Chargement des métiers…</p>
  <template v-else-if="jobs">
    <div v-if="!jobs.items.length" class="empty">
      <h2>Aucun métier trouvé</h2>
      <p>Essaie un autre mot, ou affiche tous les domaines.</p>
      <button class="btn ghost" type="button" @click="showAll">Tout afficher</button>
    </div>
    <ul v-else class="rows">
      <li v-for="job of jobs.items" :key="job.id">
        <RouterLink class="row-link" :to="{ name: 'job', params: { id: job.id } }">
          <strong>{{ job.name }}</strong>
          <ProfileLetters :profiles="job.profiles" />
          <p>
            {{ job.summary }} <span class="muted">{{ job.expand?.domain?.name }}</span>
          </p>
        </RouterLink>
      </li>
    </ul>
    <nav v-if="jobs.totalPages > 1" class="pager" aria-label="Pages">
      <button
        class="btn ghost"
        type="button"
        :disabled="page <= 1"
        @click="router.replace({ query: { ...route.query, page: page - 1 } })"
      >
        Précédents
      </button>
      <span>Page {{ page }} sur {{ jobs.totalPages }}</span>
      <button
        class="btn ghost"
        type="button"
        :disabled="page >= jobs.totalPages"
        @click="router.replace({ query: { ...route.query, page: page + 1 } })"
      >
        Suivants
      </button>
    </nav>
  </template>
</template>
