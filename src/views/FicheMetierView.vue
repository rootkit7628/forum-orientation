<script>
import FicheMetierSection from '@/components/sections/FicheMetierSection.vue'
export default {
  name: 'FicheMetierView',
  components: {
    FicheMetierSection
  },
  data() {
    return {
      fiche_metier: null,
    }
  }
}
</script>
<template>
  <FicheMetierSection ></FicheMetierSection>
</template>
