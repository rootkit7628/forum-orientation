<script setup>
import HeaderBar from '@/components/navbars/HeaderBar.vue'
import FooterBar from '@/components/navbars/FooterBar.vue'
</script>

<template>
  <HeaderBar />
  <main class="container-fluid">
    <RouterView />
  </main>
  <FooterBar />
</template>

<style scoped>
main {
  flex: 1 0 auto;
}

footer {
  flex-shrink: 0;
}
</style>
