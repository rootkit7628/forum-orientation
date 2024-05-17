<script>
import { decrypt } from '@/utils/crypto'
export default {
  name: 'StandView',
  data() {
    return {
      user: {
        name: '',
        email: ''
      }
    }
  },
  created() {
    if (!localStorage.getItem('session')) {
      this.$router.push({ name: 'register' })
    } else {
      const session = localStorage.getItem('session')
      this.user = JSON.parse(decrypt(session))
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at nulla consequat, dictum nisi ut, mattis nibh.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- feaure box -->
        <div class="col-sm-6 col-lg-4">
          <div class="feature-box-1">
            <div class="icon shadow"><i class="bi bi-shop-window"></i></div>
            <div class="feature-content">
              <h5>Stand 1</h5>
              <p>Integer mauris neque, gravida at euismod rutrum, venenatis in lorem...</p>
            </div>
            <button class="btn btn-primary my-3">VISITER</button>
          </div>
        </div>

        <div class="col-sm-6 col-lg-4">
          <div class="feature-box-1">
            <div class="icon shadow">
              <i class="bi bi-shop-window"></i>
            </div>
            <div class="feature-content">
              <h5>Stand 2</h5>
              <p>Quisque risus dolor, bibendum nec eros a, rutrum varius tellus. Maecenas ...</p>
            </div>
            <button class="btn btn-primary my-3">VISITER</button>
          </div>
        </div>

        <div class="col-sm-6 col-lg-4">
          <div class="feature-box-1">
            <div class="icon shadow">
              <i class="bi bi-shop-window"></i>
            </div>
            <div class="feature-content">
              <h5>Stand 3</h5>
              <p>Quisque risus dolor, bibendum nec eros a, rutrum varius tellus. Maecenas ...</p>
            </div>
            <button class="btn btn-primary my-3">VISITER</button>
          </div>
        </div>

        <div class="col-sm-6 col-lg-4">
          <div class="feature-box-1">
            <div class="icon shadow">
              <i class="bi bi-shop-window"></i>
            </div>
            <div class="feature-content">
              <h5>Stand 4</h5>
              <p>Quisque risus dolor, bibendum nec eros a, rutrum varius tellus. Maecenas ...</p>
            </div>
            <button class="btn btn-primary my-3">VISITER</button>
          </div>
        </div>

        <div class="col-sm-6 col-lg-4">
          <div class="feature-box-1">
            <div class="icon shadow">
              <i class="bi bi-shop-window"></i>
            </div>
            <div class="feature-content">
              <h5>Stand 5</h5>
              <p>Quisque risus dolor, bibendum nec eros a, rutrum varius tellus. Maecenas ...</p>
            </div>
            <button class="btn btn-primary my-3">VISITER</button>
          </div>
        </div>
        <!-- / -->
        <!-- feaure box -->
        <div class="col-sm-6 col-lg-4">
          <div class="feature-box-1">
            <div class="icon shadow">
              <i class="bi bi-shop-window"></i>
            </div>
            <div class="feature-content">
              <h5>Stand 6</h5>
              <p>Quisque risus dolor, bibendum nec eros a, rutrum varius tellus. Maecenas ...</p>
            </div>
            <button class="btn btn-primary my-3">VISITER</button>
          </div>
        </div>
        <!-- / -->
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
</style>
