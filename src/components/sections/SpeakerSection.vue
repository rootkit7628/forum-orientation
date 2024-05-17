<script>
export default {
  name: 'SpeakerSection',
  data() {
    return {
      sponsors: Object
    }
  },

  mounted() {},

  methods: {}
}
</script>

<template>
  <section id="speakers" class="py-5 my-5 rounded">
    <div class="container mb-5">
      <div class="row justify-content-md-center">
        <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
          <p class="mb-4 display-5">Intervenants</p>
          <p class="text-secondary mb-3 mb-md-4">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque et neque id ligula mattis commodo.</p>
          <hr class="w-50 mx-auto mb-0 text-secondary" />
        </div>
      </div>
    </div>

    <div class="container overflow-hidden">
      <div class="row">
        <div class="col-6 col-md-3 align-self-center text-center p-1 bg-white rounded">
          <div class="card">
            <img class="card-img-top" src="@/assets/avatar.png" alt="Card image" style="width: 100%" />
            <div class="card-body">
              <h4 class="card-title">John Doe</h4>
              <p class="card-text">Fonction</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3 align-self-center text-center p-1 bg-white rounded">
          <div class="card">
            <img class="card-img-top" src="@/assets/avatar.png" alt="Card image" style="width: 100%" />
            <div class="card-body">
              <h4 class="card-title">John Doe</h4>
              <p class="card-text">Fonction</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3 align-self-center text-center p-1 bg-white rounded">
          <div class="card">
            <img class="card-img-top" src="@/assets/avatar.png" alt="Card image" style="width: 100%" />
            <div class="card-body">
              <h4 class="card-title">John Doe</h4>
              <p class="card-text">Fonction</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3 align-self-center text-center p-1 bg-white rounded">
          <div class="card">
            <img class="card-img-top" src="@/assets/avatar.png" alt="Card image" style="width: 100%" />
            <div class="card-body">
              <h4 class="card-title">John Doe</h4>
              <p class="card-text">Fonction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
