<script setup>
import { pb } from '@/lib/pb'
import { useLoad } from '@/lib/use-load'
import { trackVisit } from '@/lib/visits'

const {
  data: talks,
  error,
  loading,
} = useLoad(() => pb.collection('talks').getFullList({ sort: 'starts_at' }))

const when = (iso) =>
  iso
    ? new Date(iso).toLocaleString('fr-FR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
      })
    : ''
</script>

<template>
  <div class="page-head">
    <h1>Conférences et ateliers</h1>
    <p>Témoignages, conseils pour le CV et l'entretien, présentations de filières.</p>
  </div>

  <p v-if="error" class="error" role="alert">{{ error }}</p>
  <p v-else-if="loading && !talks" class="muted">Chargement du programme…</p>
  <div v-else-if="talks && !talks.length" class="empty">
    <h2>Le programme arrive bientôt</h2>
    <p>Les conférences seront annoncées ici, puis leurs vidéos ajoutées après le forum.</p>
    <RouterLink to="/plan" class="btn ghost">En attendant, visiter les stands</RouterLink>
  </div>
  <ul v-else-if="talks" class="rows">
    <li v-for="talk of talks" :key="talk.id">
      <component
        :is="talk.video_url ? 'a' : 'div'"
        class="row-link"
        :href="talk.video_url || undefined"
        :target="talk.video_url ? '_blank' : undefined"
        rel="noopener"
        @click="talk.video_url && trackVisit('talk', talk.id)"
      >
        <strong>{{ talk.title }}</strong>
        <span class="muted">{{ talk.video_url ? 'Voir la vidéo' : when(talk.starts_at) }}</span>
        <p>{{ [talk.speaker, talk.summary].filter(Boolean).join('. ') }}</p>
      </component>
    </li>
  </ul>
</template>
