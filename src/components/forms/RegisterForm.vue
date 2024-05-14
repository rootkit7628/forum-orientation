<script>
import { encrypt, decrypt } from '@/utils/crypto'
export default {
  name: 'RegisterForm',
  data() {
    return {
      name: '',
      email: null
    }
  },
  beforeCreatereated() {
    if (localStorage.getItem('session')) {
      this.$router.push({ name: 'expo' })
    }
  },

  methods: {
    register() {
      const data = {
        name: this.name,
        email: this.email
      }
      const encryptedData = encrypt(data)
      localStorage.setItem('session', encryptedData)
      this.$router.push({ name: 'expo' })
    }
  }
}
</script>

<template>
  <section>
    <div class="container mt-5">
      <div class="row mt-5">
        <div class="col-md-6 offset-md-3 mt-5">
          <div class="card py-5 px-3 shadow border-0">
            <div class="card-body">
              <h3 class="py-3 text-center">Bienvenu cher visiteur</h3>
              <form @submit.prevent="register">
                <div class="mb-4">
                  <label for="name" class="form-label">Nom</label>
                  <input v-model="name" type="text" class="form-control" id="name" autocomplete="username" required />
                </div>
                <div class="mb-4">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" autocomplete="email" />
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="check-me-out" />
                  <label class="form-check-label" for="check-me-out">Se souvenir de moi</label>
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
