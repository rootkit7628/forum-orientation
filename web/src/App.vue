<script setup>
import { EVENT } from './data/event'
</script>

<template>
  <header class="site-header">
    <div class="wrap">
      <RouterLink to="/" class="site-name">{{ EVENT.name }}</RouterLink>
      <nav class="site-nav" aria-label="Menu principal">
        <RouterLink to="/plan">Stands</RouterLink>
        <RouterLink to="/metiers">Métiers</RouterLink>
        <RouterLink to="/test">Test d'orientation</RouterLink>
        <RouterLink to="/conferences">Conférences</RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <div class="wrap">
      <RouterView />
    </div>
  </main>
  <footer class="site-footer">
    <div class="wrap">{{ EVENT.name }}, {{ EVENT.edition.toLowerCase() }}. {{ EVENT.place }}.</div>
  </footer>
</template>
