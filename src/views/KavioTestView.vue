<script>
import KavioTestForm from '@/components/forms/KavioTestForm.vue'
import series from '@/data/test_series.json'

export default {
  data() {
    return {
      user: {
        name: '',
        email: ''
      },
      steps: ['activity', 'quality', 'work'],
      series: series
    }
  },
  components: {
    KavioTestForm
  }
}
</script>

<template>
  <section class="section services-section" id="services">
    <div class="container">
      <div class="row position-relative">
        <div class="section-title">
          <h3 class="ps-3">Test d'orientation</h3>
          <p>
            Ce test d’orientation professionnelle est divisé en quatre parties : activités, qualités, professions et intérêts globaux selon tes choix de réponses et tes préférences. Réponds
            spontanément, le plus honnêtement possible pour que nous puissions connaître tes intérêts professionnels et ressortir les pistes de métiers qui correspondent à tes réponses.
          </p>
        </div>
      </div>
    </div>
    <KavioTestForm v-for="(step, idx) of steps" :step="step" :serie="series[step]" :key="idx" />

    <!-- <div class="text-center mt-5">
      <button class="btn btn-success">Resultat Final</button>
    </div> -->
  </section>
</template>

<style scoped>
.feature-box-1 {
  padding: 32px;
  box-shadow: 0 0 30px rgba(31, 45, 61, 0.125);
  margin: 15px 0;
  position: relative;
  z-index: 1;
  border-radius: 10px;
  overflow: hidden;
  top: 0;
}

.feature-box-1 .icon {
  width: 70px;
  height: 70px;
  line-height: 70px;
  color: var(--secondary);
  text-align: center;
  border-radius: 50%;
  margin-bottom: 22px;
  font-size: 27px;
}

.feature-box-1 .icon i {
  line-height: 70px;
}
.feature-box-1 h5 {
  font-weight: 600;
}
.feature-box-1 p {
  margin: 0;
}

.feature-box-1:hover {
  top: -5px;
  box-shadow: 0 0 10px var(--primary);
}
.section {
  padding: 100px 0;
  position: relative;
}
.section-title {
  padding-bottom: 2%;
}
.section-title h3 {
  font-weight: 700;
  margin: 0 0 2%;
  border-left: 5px solid var(--secondary);
}
</style>
