<script setup>
import { ref } from 'vue'
import FloorPlan from '@/components/FloorPlan.vue'
import { pb } from '@/lib/pb'
import { useLoad } from '@/lib/use-load'

const query = ref('')
const {
  data: exhibitors,
  error,
  loading,
} = useLoad(() => pb.collection('exhibitors').getFullList({ expand: 'category', sort: 'booth' }))
</script>

<template>
  <div class="page-head">
    <h1>Les stands</h1>
    <p>Chaque exposant a un numéro de stand : la lettre du hall, puis sa place dans l'allée.</p>
  </div>

  <label class="field" style="max-width: 26rem">
    <span>Chercher un exposant, un domaine, un numéro de stand</span>
    <input v-model="query" type="search" placeholder="Informatique, B2, bourse…" />
  </label>

  <p v-if="error" class="error" role="alert">{{ error }}</p>
  <p v-else-if="loading && !exhibitors" class="muted">Chargement du plan…</p>
  <div v-else-if="exhibitors && !exhibitors.length" class="empty">
    <h2>Pas encore d'exposant</h2>
    <p>Les stands seront annoncés ici dès que les inscriptions des exposants seront closes.</p>
  </div>
  <FloorPlan v-else-if="exhibitors" :exhibitors="exhibitors" :query="query" />
</template>
