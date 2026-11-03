<script setup>
import DOMPurify from 'dompurify'
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { fileUrl, pb, standCode } from '@/lib/pb'
import { HALL_COLORS, useLoad } from '@/lib/use-load'
import { trackVisit } from '@/lib/visits'

const route = useRoute()

const { data, error, loading } = useLoad(async () => {
  const id = route.params.id
  const [exhibitor, assets] = await Promise.all([
    pb.collection('exhibitors').getOne(id, { expand: 'category' }),
    pb
      .collection('assets')
      .getFullList({ filter: pb.filter('exhibitor = {:id}', { id }), sort: 'kind,title' }),
  ])
  return { exhibitor, assets }
})

watch(
  () => data.value?.exhibitor?.id,
  (id) => id && trackVisit('stand', id),
)

// Written by organisers in the dashboard: sanitized anyway, in case an account is compromised.
const description = computed(() => DOMPurify.sanitize(data.value?.exhibitor?.description ?? ''))

const images = computed(() => data.value?.assets.filter((a) => a.kind === 'image' && a.file) ?? [])
const documents = computed(() => data.value?.assets.filter((a) => a.kind === 'document' && a.file) ?? [])
const videos = computed(() => data.value?.assets.filter((a) => a.kind === 'video' && a.url) ?? [])
</script>

<template>
  <p v-if="error" class="error" role="alert">
    {{ error }} <RouterLink to="/plan">Revenir au plan</RouterLink>
  </p>
  <p v-else-if="loading && !data" class="muted">Chargement du stand…</p>
  <article v-else-if="data" :style="{ '--hall-color': HALL_COLORS[data.exhibitor.expand.category.hall] }">
    <p><RouterLink to="/plan">Plan des stands</RouterLink></p>
    <div class="page-head">
      <span class="plate big" :aria-label="`Stand ${standCode(data.exhibitor)}`">{{
        standCode(data.exhibitor)
      }}</span>
      <h1 style="margin-top: 1rem">{{ data.exhibitor.name }}</h1>
      <p>{{ data.exhibitor.summary }}</p>
    </div>

    <div class="split">
      <div>
        <div v-if="description" v-html="description"></div>

        <section v-if="images.length" style="margin-top: 2rem">
          <h2 style="margin-bottom: 0.75rem">En images</h2>
          <div class="gallery">
            <a
              v-for="img of images"
              :key="img.id"
              :href="fileUrl(img, img.file)"
              target="_blank"
              rel="noopener"
            >
              <img :src="fileUrl(img, img.file, '640x400f')" :alt="img.title" loading="lazy" />
            </a>
          </div>
        </section>

        <section v-if="documents.length || videos.length" style="margin-top: 2rem">
          <h2 style="margin-bottom: 0.75rem">Documents et vidéos</h2>
          <ul class="rows">
            <li v-for="doc of documents" :key="doc.id">
              <a
                class="row-link"
                :href="fileUrl(doc, doc.file)"
                target="_blank"
                rel="noopener"
                @click="trackVisit('asset', doc.id)"
              >
                <strong>{{ doc.title }}</strong
                ><span class="muted">Document</span>
              </a>
            </li>
            <li v-for="vid of videos" :key="vid.id">
              <a
                class="row-link"
                :href="vid.url"
                target="_blank"
                rel="noopener"
                @click="trackVisit('asset', vid.id)"
              >
                <strong>{{ vid.title }}</strong
                ><span class="muted">Vidéo</span>
              </a>
            </li>
          </ul>
        </section>

        <p v-if="!description && !data.assets.length" class="muted">
          Cet exposant n'a pas encore ajouté de présentation. Passe le voir au stand
          {{ standCode(data.exhibitor) }} !
        </p>
      </div>

      <dl class="facts">
        <dt>Stand</dt>
        <dd>{{ standCode(data.exhibitor) }}, hall {{ data.exhibitor.expand.category.hall }}</dd>
        <dt>Catégorie</dt>
        <dd>{{ data.exhibitor.expand.category.name }}</dd>
        <template v-if="data.exhibitor.website">
          <dt>Site web</dt>
          <dd>
            <a :href="data.exhibitor.website" target="_blank" rel="noopener">{{
              data.exhibitor.website.replace(/^https?:\/\//, '')
            }}</a>
          </dd>
        </template>
        <template v-if="data.exhibitor.logo">
          <dt class="visually-hidden">Logo</dt>
          <dd>
            <img
              :src="fileUrl(data.exhibitor, data.exhibitor.logo, '160x160f')"
              :alt="`Logo de ${data.exhibitor.name}`"
              width="120"
            />
          </dd>
        </template>
      </dl>
    </div>
  </article>
</template>
