<script>
export default {
  name: 'HomeView',
  components: {
    SponsorSection: () => import('@/components/sections/SponsorSection.vue')
  },
  data() {
    return {}
  }
}
</script>

<template>
  <main>
    <div class="container py-5">
      <div id="carousel-hero" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button data-bs-target="#carousel-hero" data-bs-slide-to="0" class="active"></button>
          <button data-bs-target="#carousel-hero" data-bs-slide-to="1"></button>
          <button data-bs-target="#carousel-hero" data-bs-slide-to="2"></button>
        </div>
        <div class="carousel-inner rounded">
          <div class="carousel-item active">
            <img src="@/assets/image/forum2023-1.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="@/assets/image/forum2023-2.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="@/assets/image/forum2023-3.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>

    <div class="container px-0 py-1">
      <div class="card border-0 w-100">
        <div class="card-body">
          <h2 class="card-title">Forum de l'orientation et de l'employabilité 2024</h2>
          <h6 class="card-subtitle mb-2 text-muted">
            le 30 Mai et 01 Juin, 2024 | Campus SESAME, Enceinte UCM Ambatoraka
          </h6>
          <p class="card-text py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et arcu eleifend, dapibus
            quam eget, pellentesque ante. Curabitur cursus nisi mauris, ac fringilla lacus posuere
            eget. Nulla id massa nec nunc egestas condimentum ut at metus. Donec a ligula volutpat,
            fringilla purus dignissim, accumsan est. Nullam bibendum faucibus neque, a consequat
            felis aliquet vel. Praesent vitae varius metus. Etiam posuere nunc ac neque tincidunt
            ultrices.
          </p>
        </div>
      </div>
    </div>

    <SponsorSection> </SponsorSection>
  </main>
</template>

<style>
.carousel-inner {
  max-height: 500px !important;
}
.carousel .carousel-indicators button {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  margin-left: 1rem;
}
</style>
