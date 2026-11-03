<script setup>
import { PROFILES } from '@/data/orientation-test'

defineProps({ profiles: { type: Array, default: () => [] } })
</script>

<template>
  <span v-if="profiles.length" class="letters">
    <abbr v-for="p of profiles" :key="p" :title="PROFILES[p]?.name">{{ p }}</abbr>
  </span>
</template>
