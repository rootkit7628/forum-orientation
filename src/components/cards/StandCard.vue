<script>
export default {
  name: 'StandCard',
  props: {
    stand: {
      type: Object,
      required: true
    }
  }
}
</script>
<template>
  <div class="col-sm-6 col-lg-4">
    <div class="feature-box-1">
      <div class="icon shadow">
        <i class="bi bi-shop-window"></i>
      </div>
      <div class="feature-content">
        <h5>{{ stand.name }}</h5>
        <p>{{ stand.description }}</p>
      </div>
      <button class="btn btn-primary my-3" data-bs-toggle="modal" :data-bs-target="`#stand_${stand.id}`">VISITER</button>
    </div>
  </div>
</template>
