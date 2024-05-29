<script>
export default {
  props: {
    stand_id: {
      type: String,
      required: true
    },
    docs: {
      type: Array,
      required: true
    }
  },
  mounted() {
    console.log(this.images)
  }
}
</script>
<template>
  <div class="doc-container mb-3 pb-3">
    <div class="btn-group" role="group" aria-label="Category filter">
      <a v-for="(doc, doc_id) of docs" type="button" class="btn btn-light rounded-4 mx-2" :key="doc_id" :href="doc.file" target="_blank">
        <div><i class="fs-4 bi bi-file-earmark-arrow-down"></i></div>
        <span>{{ doc.name }}</span>
      </a>
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
.fixed-height-image {
  height: 400px;
  width: auto;
  object-fit: cover;
}
.carousel-control-next,
.carousel-control-prev {
  filter: invert(100%);
}
.doc-container {
  max-width: 100%;
  overflow-x: auto;
  white-space: nowrap;
}
.doc-container::-webkit-scrollbar {
  margin: 5%;
  width: 12px;
}
.doc-container::-webkit-scrollbar-track {
  background: #c6c7c88c;
  border-radius: 10px;
}
.doc-container::-webkit-scrollbar-thumb {
  background: #c6c7c8;
  border-radius: 10px;
}
</style>
