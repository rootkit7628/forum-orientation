<script>
import FicheMetierModal from '../modals/FicheMetierModal.vue'

export default {
  data() {
    return {
      domains: null,
      jobs: null,
      pagination: {
        currentPage: 1,
        totalPages: 1
      },
      search: {
        domain: '',
        query: ''
      }
    }
  },
  async mounted() {
    this.getDomains()
    this.getJobs()
  },
  methods: {
    async getDomains() {
      await this.pb_service
        .collection('domains')
        .getList()
        .then((response) => {
          this.domains = response.items
        })
    },
    async getJobs(page = 1) {
      this.pagination.currentPage = page
      let filter = ''
      if (this.search.domain) {
        filter += `domain.id = "${this.search.domain}"`
      }
      if (this.search.query) {
        if (filter) filter += ' && '
        filter += `name ~ "${this.search.query}"`
      }
      await this.pb_service
        .collection('jobs')
        .getList(page, 10, { filter })
        .then((response) => {
          this.jobs = response.items
          if (response.totalItems) {
            this.pagination.totalPages = response.totalItems % 10 === 0 ? response.totalItems / 10 : Math.floor(response.totalItems / 10) + 1
          }
        })
    },
    getPocketbaseUrl(data) {
      return this.pb_service.files.getUrl(data, data.file, { thumb: '100x150' })
    },
    changePage(page) {
      this.getJobs(page)
    },
    searchDomain(domain) {
      this.pagination.currentPage = 1
      this.search.domain = domain
      this.getJobs()
    },
    searchQuery() {
      this.pagination.currentPage = 1
      this.getJobs()
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
              <button type="button" class="btn btn-light rounded-4 mx-2" :class="!search.domain ? 'active' : ''">All</button>
              <button
                v-for="domain of domains"
                type="button"
                class="btn btn-light rounded-4 mx-2"
                :class="search.domain == domain.id ? 'active' : ''"
                :key="domain.id"
                @click="searchDomain(domain.id)"
              >
                {{ domain.name }}
              </button>
            </div>
          </div>
          <input type="text" class="form-control rounded-4 py-2 px-4" placeholder="Search fiche metier" v-model="search.query" @input="searchQuery" />
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
        <FicheMetierModal :fiche_id="job.id" :fiche="job" title="Product Manager" />
      </div>
    </div>
    <div class="text-end mt-4" :set="(pg = pagination)">
      <button class="btn btn-primary mx-1" :disabled="pg.currentPage === 1" @click="changePage(pg.currentPage - 1)">Previous</button>
      <span>{{ pg.currentPage }} / {{ pg.totalPages }}</span>
      <button class="btn btn-primary mx-1" :disabled="pg.currentPage === pg.totalPages" @click="changePage(pg.currentPage + 1)">Next</button>
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
