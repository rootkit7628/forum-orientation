<script>
export default {
  data() {
    return {}
  },
  props: {
    stand_id: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  methods: {}
}
</script>

<template>
  <div class="modal fade" :id="`stand_${stand_id}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content border-0 shadow">
        <div class="modal-header border-0">
          <h5 class="modal-title" id="exampleModalLabel">Bienvenu sur le stand {{ stand_id }}!</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div>
            {{ description }}
          </div>
          <div class="mt-3 card bg-dark border-0">
            <video src="https://codingyaar.com/wp-content/uploads/video-in-bootstrap-card.mp4" class="card-img-top" muted autoplay loop></video>
          </div>
          <div class="mt-5">
            <h5>Documents Téléchargeables</h5>
            <div class="row text-center p-3">
              <div class="col">
                <div class="shadow rounded p-3">
                  <a class="text-decoration-none text-success" href="#">
                    <i class="bi bi-briefcase fs-3"></i>
                    <div>Offre d'emploi</div>
                  </a>
                </div>
              </div>
              <div class="col">
                <div class="shadow rounded p-3">
                  <a class="text-decoration-none text-success" href="#">
                    <i class="bi bi-file-text fs-3"></i>
                    <div>Documents</div>
                  </a>
                </div>
              </div>
              <div class="col">
                <div class="shadow rounded p-3">
                  <a class="text-decoration-none text-success" href="#">
                    <i class="bi bi-files fs-3"></i>
                    <div>Flyers</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
