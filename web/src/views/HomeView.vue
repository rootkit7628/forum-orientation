<script setup>
import FloorPlan from '@/components/FloorPlan.vue'
import { EVENT } from '@/data/event'
import { pb } from '@/lib/pb'
import { useLoad } from '@/lib/use-load'

const { data: exhibitors, error } = useLoad(() =>
  pb.collection('exhibitors').getFullList({ expand: 'category', sort: 'booth' }),
)
</script>

<template>
  <section class="hero">
    <h1>{{ EVENT.name }}</h1>
    <p class="when">{{ EVENT.dates }}, {{ EVENT.place }}</p>
    <p class="intro">{{ EVENT.intro }}</p>
    <div class="actions">
      <RouterLink to="/plan" class="btn">Voir le plan des stands</RouterLink>
      <RouterLink to="/test" class="btn ghost">Faire le test d'orientation</RouterLink>
      <RouterLink to="/metiers" class="btn ghost">Découvrir les métiers</RouterLink>
    </div>
  </section>

  <section aria-labelledby="plan-title">
    <div class="section-head">
      <h2 id="plan-title">Le plan du forum</h2>
      <RouterLink to="/plan">Chercher un exposant</RouterLink>
    </div>
    <p v-if="error" class="error" role="alert">{{ error }}</p>
    <FloorPlan v-else-if="exhibitors" :exhibitors="exhibitors" />
  </section>
</template>
