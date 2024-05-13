<script>
import pocketbaseService from '@/services/pocketbase'

export default {
  name: 'SponsorSection',
  data() {
    return {
      sponsors: Object
    }
  },

  created() {
    let entities = pocketbaseService.collection('entities').getList()
    console.log(entities)
  },

  methods: {}
}
</script>

<template>
  <div class="container px-0 py-5">
    <h2 class="text-center">Sponsors</h2>
    <div class="row">
      <div class="col-md-3">
        <img src="" class="img-fluid" alt="sponsor1" />
      </div>
      <div class="col-md-3">
        <img src="" class="img-fluid" alt="sponsor2" />
      </div>
      <div class="col-md-3">
        <img src="" class="img-fluid" alt="sponsor3" />
      </div>
      <div class="col-md-3">
        <img src="" class="img-fluid" alt="sponsor4" />
      </div>
    </div>
  </div>
</template>
