<script>
export default {
  data() {
    return {}
  },
  props: {
    stand: {
      type: Object,
      required: true
    }
  },
  methods: {}
}
</script>

<template>
  <div class="modal fade" :id="`stand_${stand.id}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content border-0 shadow">
        <div class="modal-header border-0">
          <h5 class="modal-title" id="exampleModalLabel">Bienvenu sur le stand {{  stand.name }}!</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="bg-light bg-light rounded p-3 mb-4">
            <h4>{{ stand.name }}</h4>
            <span>{{ stand.mail }}</span><br>
            <span>{{ stand.contact }}</span>
          </div>
          <div>
            {{ stand.description }}
          </div>
          <div class="mt-3 card bg-dark border-0">
          </div>
          <div class="mt-5">
            <h5>Contacts</h5>
            <div class="row text-center p-3">
              <div v-if="stand.url" class="col">
                <a :href="stand.url" class="text-decoration-none text-success" target="_blank">
                  <i class="bi bi-globe fs-3"></i>
                </a>
              </div>
              <div v-if="stand.facebook" class="col">
                <a :href="stand.facebook" class="text-decoration-none text-success" target="_blank">
                  <i class="bi bi-facebook fs-3"></i>
                </a>
              </div>
              <div  v-if="stand.linkedin" class="col">
                <a class="text-decoration-none text-success" href="#" target="_blank">
                  <i class="bi bi-linkedin fs-3"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
