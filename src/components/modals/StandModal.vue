<script>
import pocketbaseService from '@/services/pocketbase'
import ImageStandCarousel from '@/components/carousels/ImageStandCarousel.vue'
import DocumentStandCarousel from '../carousels/DocumentStandCarousel.vue'

export default {
  data() {
    return {
      images: [],
      documents: []
    }
  },
  components: {
    ImageStandCarousel,
    DocumentStandCarousel
  },
  props: {
    stand: {
      type: Object,
      required: true
    }
  },
  async mounted() {
    this.getStandFiles()
  },
  methods: {
    async getStandFiles() {
      await this.pb_service
        .collection('assets')
        .getList(1, 20, { filter: `entity.id = "${this.stand.id}"`, requestKey: this.stand.id })
        .then((assets) => {
          this.images = assets.items.filter((asset) => asset.type === 'image')
          this.documents = assets.items.filter((asset) => asset.type === 'document')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<template>
  <div class="modal fade" :id="`stand_${stand.id}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content border-0 shadow">
        <div class="modal-header border-0">
          <h5 class="modal-title" id="exampleModalLabel">Bienvenu sur le stand {{ stand.name }}!</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="bg-light bg-light rounded p-3 mb-4">
            <h4>{{ stand.name }}</h4>
            <span>{{ stand.mail }}</span
            ><br />
            <span>{{ stand.contact }}</span>
          </div>
          <div>
            {{ stand.description }}
          </div>
          <div v-if="images.length > 0" class="mt-5 border-0">
            <h5 class="my-3">Galerie</h5>
            <ImageStandCarousel :stand_id="stand.id" :images="images" />
          </div>
          <div v-if="documents.length > 0" class="mt-5 border-0">
            <h5 class="my-3">Documents</h5>
            <DocumentStandCarousel :stand_id="stand.id" :docs="documents" />
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
              <div v-if="stand.linkedin" class="col">
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
