<script>
export default {
  props: {
    stand_id: {
      type: String,
      required: true
    },
    images: {
      type: Array,
      required: true
    }
  }
}
</script>
<template>
  <div :id="`image_stand_${stand_id}`" v-if="images != []" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div v-for="(image, key) of images" :key="key" :id="key" class="carousel-item" :class="key == 0 ? 'active' : ''">
        <img :src="image" class="d-block mx-auto fixed-height-image rounded" alt="..." />
      </div>
    </div>
    <button class="carousel-control-prev" type="button" :data-bs-target="`#image_stand_${stand_id}`" data-bs-slide="prev">
      <span class="carousel-control-prev-icon text-light" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" :data-bs-target="`#image_stand_${stand_id}`" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
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
.fixed-height-image {
  height: 400px;
  width: auto;
  object-fit: cover;
}
.carousel-control-next,
.carousel-control-prev {
  filter: invert(100%);
}
</style>
