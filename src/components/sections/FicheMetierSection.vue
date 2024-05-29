<script>
import pocketbaseService from '@/services/pocketbase'

import FicheMetierModal from '../modals/FicheMetierModal.vue'
export default {
  data() {
    return {
      domains: null,
      jobs: null,
      service: null
    }
  },
  async mounted() {
    this.service = await pocketbaseService()
    this.getDomains()
    this.getJobs()
  },
  methods: {
    async getDomains() {
      await this.service
        .collection('domains')
        .getList()
        .then((response) => {
          this.domains = response.items
        })
    },
    async getJobs() {
      await this.service
        .collection('jobs')
        .getList(1, 20)
        .then((response) => {
          this.jobs = response.items
        })
    },
    getPocketbaseUrl(data) {
      return this.service.baseUrl + `/api/files/${data.collectionId}/${data.id}/${data.file}`
    }
  },
  components: {
    FicheMetierModal
  }
}
</script>
<template>
  <section id="fiche-metier" class="container-fluid">
    <div class="p-2 mt-5 container">
      <div class="row">
        <div class="col">
          <div class="category-container mb-3 pb-3">
            <div class="btn-group" role="group" aria-label="Category filter">
              <button type="button" class="btn btn-light rounded-4 mx-2">All</button>
              <button v-for="domain of domains" type="button" class="btn btn-light rounded-4 mx-2" :key="domain.id">{{ domain.name }}</button>
            </div>
          </div>
          <input type="text" class="form-control rounded-4 py-2 px-4" placeholder="Search fiche metier" />
        </div>
      </div>
    </div>
    <div class="p-2 container">
      <div class="d-flex job-item p-1 bg-light rounded mb-2" v-for="job of jobs" :key="job.id" :id="job.id">
        <div class="job-title">
          <img class="img-thumbnail rounded ms-1 me-2" width="30px" :src="getPocketbaseUrl(job)" alt="Product Manager" />
          <div>
            <p class="mb-0">{{ job.name }}</p>
          </div>
        </div>
        <button class="btn btn-secondary bg-opacity-10" data-bs-toggle="modal" :data-bs-target="`#fiche_${job.id}`">Afficher</button>
        <FicheMetierModal :fiche_id="job.id" :image="getPocketbaseUrl(job)" title="Product Manager" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.job-item {
  align-items: center;
  justify-content: space-between;
}
.job-item .job-title {
  display: flex;
  align-items: center;
}
.category-container {
  max-width: 100%;
  overflow-x: auto;
  white-space: nowrap;
}
.category-container::-webkit-scrollbar {
  margin: 5%;
  width: 12px;
}
.category-container::-webkit-scrollbar-track {
  background: #c6c7c88c;
  border-radius: 10px;
}
.category-container::-webkit-scrollbar-thumb {
  background: #c6c7c8;
  border-radius: 10px;
}
.btn-group {
  display: inline-flex;
}
.btn {
  flex-shrink: 0;
}
</style>
