<script>
import text_results from '@/data/test_result.json'

export default {
  data() {
    return {
      text_results: text_results
    }
  },
  methods: {},
  computed: {
    final_results() {
      const totals = { A: 0, I: 0, R: 0, S: 0, C: 0, E: 0 }
      for (let part in this.kavio_results) {
        for (let type in totals) {
          totals[type] += this.kavio_results[part][type]
        }
      }

      return totals
    },
    final_res() {
      const totals = this.final_results

      const allZero = Object.values(totals).every((value) => value === 0)
      if (allZero) {
        return ''
      }

      let maxType = null
      let maxScore = -1
      for (let type in totals) {
        if (totals[type] > maxScore) {
          maxScore = totals[type]
          maxType = type
        }
      }
      return this.text_results[maxType]
    }
  }
}
</script>
<template>
  <section id="kavio-result" class="container-fluid">
    <div>
      <h5>Partie 4: Intérêts globaux</h5>
      <p>Maintenant, grâce aux trois parties précédentes, tu peux calculer ton score général.</p>
    </div>
    <div class="row pb-4">
      <table class="table table-bordered text-center shadow-sm w-75 ms-4">
        <thead>
          <tr>
            <th></th>
            <th>Type A</th>
            <th>Type I</th>
            <th>Type R</th>
            <th>Type S</th>
            <th>Type C</th>
            <th>Type E</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-danger">
            <td>Partie 1</td>
            <td>{{ kavio_results['1'].A }}</td>
            <td>{{ kavio_results['1'].I }}</td>
            <td>{{ kavio_results['1'].R }}</td>
            <td>{{ kavio_results['1'].S }}</td>
            <td>{{ kavio_results['1'].C }}</td>
            <td>{{ kavio_results['1'].E }}</td>
          </tr>
          <tr class="table-success">
            <td>Partie 2</td>
            <td>{{ kavio_results['2'].A }}</td>
            <td>{{ kavio_results['2'].I }}</td>
            <td>{{ kavio_results['2'].R }}</td>
            <td>{{ kavio_results['2'].S }}</td>
            <td>{{ kavio_results['2'].C }}</td>
            <td>{{ kavio_results['2'].E }}</td>
          </tr>
          <tr class="table-primary">
            <td>Partie 3</td>
            <td>{{ kavio_results['3'].A }}</td>
            <td>{{ kavio_results['3'].I }}</td>
            <td>{{ kavio_results['3'].R }}</td>
            <td>{{ kavio_results['3'].S }}</td>
            <td>{{ kavio_results['3'].C }}</td>
            <td>{{ kavio_results['3'].E }}</td>
          </tr>
          <tr class="table-warning">
            <td>Totaux</td>
            <td>{{ final_results.A }}</td>
            <td>{{ final_results.I }}</td>
            <td>{{ final_results.R }}</td>
            <td>{{ final_results.S }}</td>
            <td>{{ final_results.C }}</td>
            <td>{{ final_results.E }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="my-2 p-2 bg-light">
      <h5>Resultat Final :</h5>
      <p>{{ final_res }}</p>
    </div>
  </section>
</template>
