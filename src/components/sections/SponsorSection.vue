<script>
import pocketbaseService from '@/services/pocketbase'

export default {
  name: 'SponsorSection',
  data() {
    return {
      sponsors: Object
    }
  },

  async created() {
    await pocketbaseService
      .collection('entities')
      .getList()
      .then((response) => {
        this.sponsors = response.items
      })
  },

  methods: {
    getPocketbaseUrl(data) {
      return pocketbaseService.baseUrl + `/api/files/${data.collectionId}/${data.id}/${data.logo}`
    }
  }
}
</script>

<template>
  <section class="py-5 my-5 rounded">
    <div class="container mb-5">
      <div class="row justify-content-md-center">
        <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
          <p class="mb-4 display-5">Sponsors</p>
          <p class="text-secondary mb-3 mb-md-4">
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Pellentesque et neque id ligula mattis commodo.
          </p>
          <hr class="w-50 mx-auto mb-0 text-secondary" />
        </div>
      </div>
    </div>

    <div class="container overflow-hidden">
      <div class="row">
        <div
          v-for="sponsor of sponsors"
          class="col-6 col-md-3 align-self-center text-center p-1 bg-white rounded"
          :key="sponsor.id"
        >
          <img class="img-fluid" :src="getPocketbaseUrl(sponsor)" alt="" srcset="" />
        </div>
      </div>
    </div>
  </section>
</template>
