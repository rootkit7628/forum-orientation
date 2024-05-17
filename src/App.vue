<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>
  <RouterView />

  <Footer />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
