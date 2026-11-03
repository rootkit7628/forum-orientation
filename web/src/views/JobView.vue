<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import ProfileLetters from '@/components/ProfileLetters.vue'
import { PROFILES } from '@/data/orientation-test'
import { fileUrl, pb } from '@/lib/pb'
import { useLoad } from '@/lib/use-load'
import { trackVisit } from '@/lib/visits'

const route = useRoute()
const {
  data: job,
  error,
  loading,
} = useLoad(() => pb.collection('jobs').getOne(route.params.id, { expand: 'domain' }))

watch(
  () => job.value?.id,
  (id) => id && trackVisit('job', id),
)
</script>

<template>
  <p v-if="error" class="error" role="alert">
    {{ error }} <RouterLink to="/metiers">Revenir aux métiers</RouterLink>
  </p>
  <p v-else-if="loading && !job" class="muted">Chargement de la fiche…</p>
  <article v-else-if="job">
    <p>
      <RouterLink :to="{ name: 'jobs', query: { domaine: job.domain } }">{{
        job.expand?.domain?.name
      }}</RouterLink>
    </p>
    <div class="page-head">
      <h1>{{ job.name }}</h1>
      <p>{{ job.summary }}</p>
    </div>

    <div class="split">
      <div>
        <section v-if="job.missions?.length">
          <h2>Au quotidien</h2>
          <ul>
            <li v-for="m of job.missions" :key="m">{{ m }}</li>
          </ul>
        </section>
        <section v-if="job.qualities?.length" style="margin-top: 1.5rem">
          <h2>Qualités utiles</h2>
          <ul>
            <li v-for="q of job.qualities" :key="q">{{ q }}</li>
          </ul>
        </section>
      </div>

      <dl class="facts">
        <template v-if="job.studies">
          <dt>Études</dt>
          <dd>{{ job.studies }}</dd>
        </template>
        <template v-if="job.profiles?.length">
          <dt>Profils du test d'orientation</dt>
          <dd>
            <ProfileLetters :profiles="job.profiles" />
            <span class="muted"> {{ job.profiles.map((p) => PROFILES[p].name).join(', ') }}</span>
          </dd>
        </template>
        <template v-if="job.sheet">
          <dt>Fiche à imprimer</dt>
          <dd><a :href="fileUrl(job, job.sheet)" target="_blank" rel="noopener">Télécharger la fiche</a></dd>
        </template>
      </dl>
    </div>
  </article>
</template>
