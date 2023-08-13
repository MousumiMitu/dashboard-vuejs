<template>
  <div className="shadow-sm  rounded p-2 p-md-4">
    <div className="d-md-flex justify-content-between">
      <div>
        <h3 className="fs-5 text-black">Statistics</h3>
        <p className="fs-6 fw-semibold">(+43% Sold | +12% Canceled) than last year</p>
      </div>
      <div class="position-relative overflow-hidden">
        <button
          class="btn bg-secondary-subtle btn-sm dropdown-toggle relative"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Year
        </button>
        <ul class="dropdown-menu">
          he
        </ul>
      </div>
    </div>
    <div class="" style="height: 350px"><Bar :data="data" :options="options" /></div>
  </div>
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Bar
  },
  data() {
    return {
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'cancelled',
            backgroundColor: '#F1CDA5',
            data: [20, 20, 12, 39, 30, 40, 39],
            barThickness: 7,
            borderRadius: 10,
            barPercentage: 0.4,
            categoryPercentage: 1.0
          },
          {
            label: 'sold',
            backgroundColor: '#3ACC91',
            data: [40, 10, 42, 39, 10, 50, 51],
            borderRadius: 10,
            barThickness: 7,
            barPercentage: 0.4,
            categoryPercentage: 1.0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            barPercentage: 0.4,
            categoryPercentage: 1.0,
            grid: {
              color: '#f2f3f3',
              offset: true
            }
          },
          y: {
            grid: {
              color: '#f2f3f3'
            }
          }
        },
        plugins: {
          legend: {
            position: 'top',
            align: 'end',
            usePointStyle: true,
            boxWidth: 10,
            boxHeight: 10
          },
          tooltip: {
            backgroundColor: '#878686',
            color: 'black'
          }
        }
      }
    }
  }
}
</script>

<style scoped>
h2 {
  color: #878686;
}
</style>
