<script>
import { ref } from 'vue'

export default {
  data() {
    return {
      scores: {}
    }
  },
  props: {
    step: {
      type: String,
      required: true
    },
    serie: {
      type: Object,
      required: true
    }
  },
  methods: {
    getKey(serie_id, bloc_id, item_id) {
      return serie_id + '-' + bloc_id + '-' + item_id
    },
    setValue(serie_id, bloc_id, item_id, val) {
      this.scores[this.getKey(serie_id, bloc_id, item_id)] = val
      console.log(this.scores)
    }
  },
  computed: {
    totals() {
      const totals = { A: 0, I: 0, R: 0, S: 0, C: 0, E: 0 }

      for (let key in this.scores) {
        if (this.scores[key] !== undefined) {
          const itemId = key.split('-')[2] % 6
          switch (itemId) {
            case 0:
              totals.A += this.scores[key]
              break
            case 1:
              totals.I += this.scores[key]
              break
            case 2:
              totals.R += this.scores[key]
              break
            case 3:
              totals.S += this.scores[key]
              break
            case 4:
              totals.C += this.scores[key]
              break
            case 5:
              totals.E += this.scores[key]
              break
          }
        }
      }

      this.test_results[this.serie.id] = totals
      return totals
    },
    result() {
      const allZero = Object.values(this.totals).every(score => score === 0);
      if (allZero) {
        return null;
      }

      const maxScore = Math.max(...Object.values(this.totals));
      const maxTypes = Object.keys(this.totals).filter(type => this.totals[type] === maxScore);

      return maxTypes.map(
        type => { return this.serie[type] }
      )
    }

  }
}
</script>
<template>
  <section id="kavio-test" class="container-fluid mt-5">
    <div>
      <h5>Partie {{ serie.id }}: les {{ serie.name }}</h5>
      <p>
        Quatre séries de {{ serie.name }} te sont proposées. Cliquer sur :
        <div class="mt-2" v-if="serie.hint_0 && serie.hint_1">
          <button class="btn btn-outline-success m-1" disabled><i class="bi bi-hand-thumbs-up"></i> {{ serie.hint_0 }}</button><br>
          <button class="btn btn-outline-danger m-1" disabled><i class="bi bi-hand-thumbs-down"></i> {{ serie.hint_1 }}</button>
        </div>
      </p>
    </div>

    <div class="row pb-4">
      <div class="col-6" v-for="(bloc, bloc_id) in serie.item_blocs" :key="bloc_id">
        <table class="table shadow-sm m-3">
          <tbody>
            <tr v-for="(item, item_id) in bloc" :key="item_id">
              <th scope="row">{{ item_id + 1 + (bloc_id) * 6 }}</th>
              <td>{{ item }}</td>
              <td>
                <button
                  :id="'u-' + getKey(serie.id, bloc_id, item_id)"
                  class="btn mx-2"
                  :class="scores[getKey(serie.id, bloc_id, item_id)] == 1 ? 'btn-success' : 'btn-outline-success'"
                  @click="setValue(serie.id, bloc_id, item_id, 1)"
                >
                  <i class="bi bi-hand-thumbs-up" @click="setValue(serie.id, bloc_id, item_id, 1)"></i>
                </button>
                <button
                  :id="'d-' + getKey(serie.id, bloc_id, item_id)"
                  class="btn mx-2"
                  :class="scores[getKey(serie.id, bloc_id, item_id)] == 0 ? 'btn-danger' : 'btn-outline-danger'"
                  @click="setValue(serie.id, bloc_id, item_id, 0)"
                >
                  <i class="bi bi-hand-thumbs-down" @click="setValue(serie.id, bloc_id, item_id, 0)"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="row pb-4">
      <table class="table table-bordered text-center shadow-sm w-75 ms-4">
        <thead>
          <tr>
            <th colspan="2">Type A</th>
            <th colspan="2">Type I</th>
            <th colspan="2">Type R</th>
            <th colspan="2">Type S</th>
            <th colspan="2">Type C</th>
            <th colspan="2">Type E</th>
          </tr>
          <tr>
            <th>Question n°</th>
            <th>Score</th>
            <th>Question n°</th>
            <th>Score</th>
            <th>Question n°</th>
            <th>Score</th>
            <th>Question n°</th>
            <th>Score</th>
            <th>Question n°</th>
            <th>Score</th>
            <th>Question n°</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(bloc, bloc_id) in serie.item_blocs" :key="bloc_id">
            <template v-for="(item, item_id) in bloc" :key="item_id">
              <td>{{ item_id + 1 + (bloc_id) * 6 }}</td>
              <td>{{ scores[getKey(serie.id, bloc_id, item_id)] }}</td>
            </template>
          </tr>
          <tr>
            <td class="bg-light" colspan="12"></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th class="bg-light">Totaux</th>
            <th>{{ totals.A }}</th>
            <th class="bg-light"></th>
            <th>{{ totals.I }}</th>
            <th class="bg-light"></th>
            <th>{{ totals.R }}</th>
            <th class="bg-light"></th>
            <th>{{ totals.S }}</th>
            <th class="bg-light"></th>
            <th>{{ totals.C }}</th>
            <th class="bg-light"></th>
            <th>{{ totals.E }}</th>
          </tr>
        </tfoot>
      </table>
    </div>

    <div v-if="result" :id="`result_${serie.id}`" class="my-2 p-2 bg-light">
      <h5>Resultat Partie {{ serie.id }}</h5>
      <p v-for="(res, res_id) in result" :key="res_id" v-html="res"></p>
    </div>
  </section>
</template>
