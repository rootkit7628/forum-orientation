<script setup></script>

<template>
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
</template>

<style scoped>
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
