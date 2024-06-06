<script>
import { decrypt } from '@/utils/crypto'
import StandModal from '@/components/modals/StandModal.vue'
import pocketbaseService from '@/services/pocketbase'

export default {
  data() {
    return {
      user: {
        name: '',
        email: ''
      },
      stands: Array,
      service: null
    }
  },
  components: {
    StandModal
  },
  created() {
    if (!localStorage.getItem('session')) {
      this.$router.push({ name: 'register' })
    } else {
      const session = localStorage.getItem('session')
      this.user = JSON.parse(decrypt(session))
    }
  },
  async mounted() {
    if (this.pb_service) {
      await this.pb_service
        .collection('entities')
        .getList(1, 30, { expand: 'category' })
        .then((response) => {
          this.stands = response.items
          if (this.stands) {
            this.stands.sort((s1, s2) => s1.expand.category.level - s2.expand.category.level)
          }
        })
    }
  },
  methods: {
    getPocketbaseUrl(data) {
      return this.pb_service.files.getUrl(data, data.logo)
    },
    truncateDescription(description) {
      const maxLength = 90
      if (description.length > maxLength) {
        return description.substring(0, maxLength) + '...'
      }
      return description
    },
    viewStand(id) {
      this.pb_service.collection('stats').create({
        entity: id,
        user_id: this.user.id,
        plateform: 'web'
      })
    }
  }
}
</script>

<template>
  <section class="section services-section" id="services">
    <div class="container">
      <div class="row position-relative">
        <div class="col-lg-6">
          <div class="section-title">
            <h3 class="ps-3">
              Bienvenu sur nos stands, <span class="text-success fw-bold">{{ user.name }}</span>
            </h3>
            <p>Rencontrez des entreprises, des universités et des experts métiers prêts à répondre à vos questions et à vous guider dans votre avenir professionnel.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-lg-4" v-for="stand in stands" :key="stand.id">
          <div class="feature-box-1">
            <div class="icon shadow"><img class="img-fluid w-75" :src="getPocketbaseUrl(stand)" alt="" srcset="" /></div>
            <div class="feature-content">
              <h5>{{ stand.name }}</h5>
              <p class="description">{{ truncateDescription(stand.description) }}</p>
            </div>
            <button class="btn btn-primary my-3" data-bs-toggle="modal" :data-bs-target="`#stand_${stand.id}`" @click="viewStand(stand.id)">VISITER</button>
          </div>
          <StandModal :stand="stand" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.feature-box-1 {
  padding: 32px;
  box-shadow: 0 0 30px rgba(31, 45, 61, 0.125);
  margin: 15px 0;
  position: relative;
  z-index: 1;
  border-radius: 10px;
  overflow: hidden;
  top: 0;
}

.feature-box-1 .icon {
  width: 70px;
  height: 70px;
  line-height: 70px;
  color: var(--secondary);
  text-align: center;
  border-radius: 50%;
  margin-bottom: 22px;
  font-size: 27px;
}

.feature-box-1 .icon i {
  line-height: 70px;
}
.feature-box-1 h5 {
  font-weight: 600;
}
.feature-box-1 p {
  margin: 0;
}

.feature-box-1:hover {
  top: -5px;
  box-shadow: 0 0 10px var(--primary);
}
.section {
  padding: 100px 0;
  position: relative;
}
.section-title {
  padding-bottom: 45px;
}
.section-title h3 {
  font-weight: 700;
  margin: 0 0 15px;
  border-left: 5px solid var(--secondary);
}

.description {
  word-break: break-word;
  overflow-wrap: break-word;
}
</style>
