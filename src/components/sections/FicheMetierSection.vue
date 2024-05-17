<script setup>
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
                <input type="text" class="form-control rounded-4 py-2 px-4" placeholder="Search fiche metier">
                </div>
            </div>
        </div>

        <div class="job-list container">
            <div class="job-item">
                <div class="job-title">
                <img src="https://via.placeholder.com/40" alt="Product Manager">
                <div>
                    <h5 class="mb-0">Product Manager</h5>
                    <small>1.5k members</small>
                </div>
                </div>
                <button class="btn btn-secondary bg-opacity-10">Afficher</button>
            </div>
            <div class="job-item">
                <div class="job-title">
                <img src="https://via.placeholder.com/40" alt="Product Designer">
                <div>
                    <h5 class="mb-0">Product Designer</h5>
                    <small>1.5k members</small>
                </div>
                </div>
                <button class="btn btn-secondary bg-opacity-10">Afficher</button>
            </div>
            <div class="job-item">
                <div class="job-title">
                <img src="https://via.placeholder.com/40" alt="Software Engineer">
                <div>
                    <h5 class="mb-0">Software Engineer</h5>
                    <small>1.5k members</small>
                </div>
                </div>
                <button class="btn btn-secondary bg-opacity-10">Afficher</button>
            </div>
            <div class="job-item">
                <div class="job-title">
                <img src="https://via.placeholder.com/40" alt="Data Analyst">
                <div>
                    <h5 class="mb-0">Data Analyst</h5>
                    <small>1.5k members</small>
                </div>
                </div>
                <button class="btn btn-secondary bg-opacity-10">Afficher</button>
            </div>
            <div class="job-item">
                <div class="job-title">
                <img src="https://via.placeholder.com/40" alt="Data Scientist">
                <div>
                    <h5 class="mb-0">Data Scientist</h5>
                    <small>1.5k members</small>
                </div>
                </div>
                <button class="btn btn-secondary bg-opacity-10">Afficher</button>
            </div>
            <div class="job-item">
                <div class="job-title">
                <img src="https://via.placeholder.com/40" alt="UX Designer">
                <div>
                    <h5 class="mb-0">UX Designer</h5>
                    <small>1.5k members</small>
                </div>
                </div>
                <button class="btn btn-secondary bg-opacity-10">Afficher</button>
            </div>
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
  background-color: #fff;
  padding: 15px;
  border-radius: 5px;
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