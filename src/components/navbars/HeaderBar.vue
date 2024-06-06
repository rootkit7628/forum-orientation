<script>
import { decrypt } from '@/utils/crypto'

export default {
  name: 'HeadBar',
  data() {
    return {
      user: null,
      initial: null
    }
  },
  mounted() {
    this.setUser()
    if (this.user) {
      this.setInitial()
    }
  },
  methods: {
    setUser() {
      const session = localStorage.getItem('session')
      if (session) {
        this.user = JSON.parse(decrypt(session))
      }
    },
    logout() {
      localStorage.removeItem('session')
      this.user = null
      this.$router.push('/')
    },
    setInitial() {
      const name = this.user.name.split(' ')
      if (name.length === 1) {
        this.initial = name[0].substring(0, 2).toUpperCase()
      } else {
        this.initial = (name[0][0] + name[1][0]).toUpperCase()
      }
    },
    makeKavioTest() {
      const session = localStorage.getItem('session').substring(0, 15)
      this.pb_service.collection('kavio').create({
        sender_id: 'web_' + session,
        finish: false
      })
    }
  }
}
</script>

<template>
  <header class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light rounded py-2">
      <div class="container-fluid">
        <a class="navbar-brand fs-3 fw-bold p-2 shadow rounded" href="https://programme-sesame.mg">
          <img src="@/assets/logo.jpg" alt="" width="40" class="d-inline-block align-text-top" />
        </a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto">
            <RouterLink to="/" class="nav-item nav-link active">Acceuil</RouterLink>
            <a v-if="$route.name == 'home'" href="#sponsors" class="nav-item nav-link">Sponsors</a>
            <!-- <a v-if="$route.name == 'home'" href="#speakers" class="nav-item nav-link">Intervenants</a> -->
            <RouterLink v-if="!['home', 'register'].includes($route.name)" to="/stand" class="nav-item nav-link">Stands</RouterLink>
            <RouterLink v-if="!['home', 'register'].includes($route.name)" to="/conference" class="nav-item nav-link">Conference</RouterLink>
            <RouterLink v-if="!['home', 'register'].includes($route.name)" to="/fiche-metier" class="nav-item nav-link">Fiche Metier</RouterLink>
            <RouterLink v-if="$route.name == 'home'" to="/register" type="button" class="nav-item btn btn-primary ms-2">Visiter</RouterLink>
            <RouterLink v-if="!['home', 'register'].includes($route.name)" to="/kavio-test" type="button" class="btn btn-danger ms-2 text-white h-75" @click="makeKavioTest()"
              >Test d'orientation</RouterLink
            >
            <div v-if="$route.name != 'home' && $route.name != 'register'" class="dropdown ms-2">
              <button class="btn btn-secondary dropdown-toggle rounded-pill" type="button" data-bs-toggle="dropdown" aria-expanded="false">{{ initial }}</button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#" @click="logout()">Se Déconnecter</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
