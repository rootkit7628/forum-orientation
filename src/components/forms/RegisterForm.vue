<script>
import { encrypt } from '@/utils/crypto'
export default {
  name: 'RegisterForm',
  data() {
    return {
      name: '',
      email: null
    }
  },
  beforeCreate() {
    if (localStorage.getItem('session')) {
      this.$router.push({ name: 'stand' })
    }
  },

  methods: {
    register() {
      const user = JSON.stringify({
        name: this.name,
        email: this.email
      })
      const encryptedData = encrypt(user)
      localStorage.setItem('session', encryptedData)
      this.$router.push({ name: 'stand' })
    }
  }
}
</script>

<template>
  <section>
    <div class="container my-5">
      <div class="row my-5">
        <div class="col-md-6 offset-md-3 mt-5">
          <div class="card py-5 px-3 shadow border-0">
            <div class="card-body">
              <h3 class="py-3 text-center">Bienvenu cher visiteur</h3>
              <form @submit.prevent="register">
                <div class="mb-4">
                  <label for="name" class="form-label">Nom</label>
                  <input v-model="name" type="text" class="form-control" id="name" autocomplete="name" required />
                </div>
                <div class="mb-4">
                  <label for="email" class="form-label">Email ou Tel</label>
                  <input v-model="email" type="email" class="form-control" id="email" autocomplete="email" />
                </div>
                <div class="mb-4">
                  <label for="age" class="form-label">Age</label>
                  <input type="number" class="form-control" id="age" autocomplete="age" />
                </div>
                <div class="mb-4">
                  <label for="occupation" class="form-label">Occupation</label>
                  <select class="form-control form-control-lg" name="occupation">
                    <option>Selectionnez votre occupation...</option>
                    <option>Etudiant universitaire</option>
                    <option>Enseignant</option>
                    <option>Professionnel</option>
                    <option>En recherche d'emploi</option>
                    <option>Frêchement diplomé</option>
                  </select>
                </div>
                <button type="submit" class="btn btn-success mt-2">Commencer la visite <i class="bi bi-box-arrow-in-right"></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
