<script setup>
import { computed } from 'vue'
import { standCode } from '@/lib/pb'
import { HALL_COLORS } from '@/lib/use-load'

const props = defineProps({
  exhibitors: { type: Array, required: true },
  /** Text to highlight matching stands; the others are dimmed. */
  query: { type: String, default: '' },
})

const halls = computed(() => {
  const byHall = new Map()
  for (const ex of props.exhibitors) {
    const cat = ex.expand.category
    if (!byHall.has(cat.hall)) byHall.set(cat.hall, { ...cat, exhibitors: [] })
    byHall.get(cat.hall).exhibitors.push(ex)
  }
  return [...byHall.values()]
    .sort((a, b) => a.hall.localeCompare(b.hall))
    .map((h) => ({ ...h, exhibitors: h.exhibitors.sort((a, b) => a.booth - b.booth) }))
})

const normalized = (text) =>
  text
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()

function matches(ex) {
  const q = normalized(props.query.trim())
  if (!q) return true
  return [ex.name, ex.summary, ex.expand.category.name, standCode(ex)].some((t) => normalized(t).includes(q))
}
</script>

<template>
  <ul class="legend" aria-label="Halls">
    <li v-for="hall of halls" :key="hall.hall">
      <i :style="{ background: HALL_COLORS[hall.hall] }"></i>Hall {{ hall.hall }} : {{ hall.name }}
    </li>
  </ul>
  <div class="halls">
    <section
      v-for="hall of halls"
      :key="hall.hall"
      class="hall"
      :style="{ '--hall-color': HALL_COLORS[hall.hall] }"
      :aria-labelledby="`hall-${hall.hall}`"
    >
      <div class="hall-head">
        <span class="hall-letter" aria-hidden="true">{{ hall.hall }}</span>
        <h2 :id="`hall-${hall.hall}`">{{ hall.name }}</h2>
      </div>
      <ul class="booths">
        <li v-for="ex of hall.exhibitors" :key="ex.id">
          <RouterLink
            :to="{ name: 'stand', params: { id: ex.id } }"
            class="booth"
            :class="{ dimmed: !matches(ex) }"
            :aria-label="`Stand ${standCode(ex)}, ${ex.name}`"
          >
            <span class="plate">{{ standCode(ex) }}</span>
            <strong>{{ ex.name }}</strong>
            <small>{{ ex.summary }}</small>
          </RouterLink>
        </li>
      </ul>
    </section>
  </div>
</template>
