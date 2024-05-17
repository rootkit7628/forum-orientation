<script>
import { decrypt } from '@/utils/crypto'

export default {
  name: 'NavBar',
  data() {
    return {
      user: null
    }
  },
  created() {
    const session = localStorage.getItem('session')
    if (session) {
      this.user = JSON.parse(decrypt(session))
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light rounded p-2">
    <div class="container-fluid">
      <a class="navbar-brand" to="#">
        <img src="@/assets/logo.jpg" alt="" width="30" height="24" class="d-inline-block align-text-top" />
        SESAME Promes
      </a>
      <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto">
          <RouterLink to="/" class="nav-item nav-link active">Acceuil</RouterLink>
          <a v-if="$route.name == 'home'" href="#speakers" class="nav-item nav-link">Intervenants</a>
          <a v-if="$route.name == 'home'" href="#sponsors" class="nav-item nav-link">Sponsors</a>
          <RouterLink v-if="$route.name != 'home'" to="/stand" class="nav-item nav-link">Stands</RouterLink>
          <RouterLink v-if="$route.name != 'home'" to="/conference" class="nav-item nav-link">Conference</RouterLink>
          <RouterLink v-if="$route.name != 'home'" to="/fiche-metier" class="nav-item nav-link">Fiche Metier</RouterLink>
          <RouterLink v-if="$route.name == 'home'" to="/register" type="button" class="btn btn-primary ms-2">Visiter</RouterLink>
          <div v-else-if="user" class="dropdown ms-2">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{{ user.name }}</button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
