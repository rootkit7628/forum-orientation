<script setup>
import HeaderBar from '@/components/navbar/HeaderBar.vue'
import FooterBar from './components/navbar/FooterBar.vue'
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
