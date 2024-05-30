<script>
export default {
  props: {
    fiche: {
      type: Object,
      required: true
    }
  },
  methods: {
    getFileUrl(fiche) {
      return this.pb_service.files.getUrl(fiche, fiche.file)
    }
  }
}
</script>

<template>
  <div class="modal fade" :id="`fiche_${fiche.id}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
      <div class="modal-content border-0 shadow">
        <div class="modal-header border-0">
          <h5 class="modal-title" id="exampleModalLabel">{{ fiche.name }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img class="img-fluid" :src="getFileUrl(fiche)" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
