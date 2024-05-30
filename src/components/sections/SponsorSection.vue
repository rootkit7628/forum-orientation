<script>
import pocketbaseService from '@/services/pocketbase'

export default {
  name: 'SponsorSection',
  data() {
    return {
      sponsors: Array
    }
  },

  async mounted() {
    if (this.pb_service) {
      await this.pb_service
        .collection('entities')
        .getList(1, 30, { expand: 'category' })
        .then((response) => {
          this.sponsors = response.items
          if (this.sponsors) {
            this.sponsors.sort((s1, s2) => s1.expand.category.level - s2.expand.category.level)
          }
        })
    }
  },

  methods: {
    getPocketbaseUrl(data) {
      return this.pb_service.files.getUrl(data, data.logo, { thumb: '200x200' })
    }
  }
}
</script>

<template>
  <section id="sponsors" class="py-5 my-5 rounded">
    <div class="container mb-5">
      <div class="row justify-content-md-center">
        <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
          <p class="mb-4 display-5">Sponsors</p>
          <p class="text-secondary mb-3 mb-md-4">Nos précieux partenaires qui rendent cet événement possible.</p>
          <hr class="w-50 mx-auto mb-0 text-secondary" />
        </div>
      </div>
    </div>

    <div class="container overflow-hidden">
      <div class="row justify-content-md-center">
        <div v-for="sponsor of sponsors" class="cell text-center p-1 bg-light" :key="sponsor.id">
          <img class="img-fluid w-75" :src="getPocketbaseUrl(sponsor)" alt="" srcset="" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.cell {
  flex: 1 1 22%; /* Adjust the basis percentage to control the width */
  max-width: 22%;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
}
.cell img {
  max-width: 75%;
  max-height: 100%;
  object-fit: contain;
}
</style>
