<script>
import FicheMetierModal from '../modals/FicheMetierModal.vue'
export default {
  components: {
    FicheMetierModal
  }
}
</script>
<template>
  <section id="fiche-metier" class="container-fluid">
    <div class="search-bar container">
      <div class="row">
        <div class="col">
          <div class="btn-group mb-3" role="group" aria-label="Category filter">
            <button type="button" class="btn btn-light rounded-4 mx-2">All</button>
            <button type="button" class="btn btn-light rounded-4 mx-2">Informatique</button>
            <button type="button" class="btn btn-light rounded-4 mx-2">Santé</button>
            <button type="button" class="btn btn-light rounded-4 mx-2">Social</button>
            <button type="button" class="btn btn-light rounded-4 mx-2">Tourisme</button>
            <button type="button" class="btn btn-light rounded-4 mx-2">Marketing</button>
            <button type="button" class="btn btn-light rounded-4 mx-2">Finance</button>
            <button type="button" class="btn btn-light rounded-4 mx-2">Formation</button>
            <button type="button" class="btn btn-light rounded-4 mx-2">Envirinnement</button>
          </div>
          <input type="text" class="form-control rounded-4 py-2 px-4" placeholder="Search fiche metier" />
        </div>
      </div>
    </div>

    <div class="job-list container">
      <div class="job-item p-2 bg-light rounded">
        <div class="job-title">
          <img class="rounded" src="https://via.placeholder.com/40" alt="Product Manager" />
          <div>
            <p class="mb-0">Product Manager</p>
          </div>
        </div>
        <button class="btn btn-secondary bg-opacity-10" data-bs-toggle="modal" data-bs-target="#fiche_1">Afficher</button>
      </div>
      <FicheMetierModal fiche_id="1" title="Product Manager" />

      <div class="job-item p-2 bg-light rounded">
        <div class="job-title">
          <img class="rounded" src="https://via.placeholder.com/40" alt="Product Designer" />
          <div>
            <p class="mb-0">Responsables Achats</p>
          </div>
        </div>
        <button class="btn btn-secondary bg-opacity-10" data-bs-toggle="modal" data-bs-target="#fiche_2">Afficher</button>
      </div>
      <FicheMetierModal fiche_id="2" title="Responsables Achats" />

      <div class="job-item p-2 bg-light rounded">
        <div class="job-title">
          <img class="rounded" src="https://via.placeholder.com/40" alt="Software Engineer" />
          <div>
            <p class="mb-0">Responsable Vignes et Chais</p>
          </div>
        </div>
        <button class="btn btn-secondary bg-opacity-10" data-bs-toggle="modal" data-bs-target="#fiche_3">Afficher</button>
      </div>
      <FicheMetierModal fiche_id="3" title="Responsables Achats" />

      <div class="job-item p-2 bg-light rounded">
        <div class="job-title">
          <img class="rounded" src="https://via.placeholder.com/40" alt="Data Analyst" />
          <div>
            <p class="mb-0">Bachelor Finance</p>
          </div>
        </div>
        <button class="btn btn-secondary bg-opacity-10" data-bs-toggle="modal" data-bs-target="#fiche_4">Afficher</button>
      </div>
      <FicheMetierModal fiche_id="4" title="Bachelor Finance" />

      <div class="job-item p-2 bg-light rounded">
        <div class="job-title">
          <img class="rounded" src="https://via.placeholder.com/40" alt="Data Scientist" />
          <div>
            <p class="mb-0">BTS Tourisme</p>
          </div>
        </div>
        <button class="btn btn-secondary bg-opacity-10" data-bs-toggle="modal" data-bs-target="#fiche_5">Afficher</button>
      </div>
      <FicheMetierModal fiche_id="5" title="BTS Tourisme" />

      <div class="job-item p-2 bg-light rounded">
        <div class="job-title">
          <img class="rounded" src="https://via.placeholder.com/40" alt="UX Designer" />
          <div>
            <p class="mb-0">Conseiller en voyages</p>
          </div>
        </div>
        <button class="btn btn-secondary bg-opacity-10" data-bs-toggle="modal" data-bs-target="#fiche_6">Afficher</button>
      </div>
      <FicheMetierModal fiche_id="6" title="Conseiller en voyages" />
    </div>
  </section>
</template>

<style scoped>
body {
  background-color: #f9f9f9;
}
.navbar {
  background-color: #fff;
  padding: 10px 0;
}
.navbar-nav .nav-link {
  color: #333;
  margin-right: 20px;
}
.navbar-nav .nav-link:hover {
  color: #000;
}
.navbar-nav .btn {
  margin-left: 10px;
}
.search-bar {
  padding: 20px;
}
.job-list {
  padding: 20px;
}
.job-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.job-item img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.job-item .job-title {
  display: flex;
  align-items: center;
}
</style>
