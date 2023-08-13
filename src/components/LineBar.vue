<template>
  <div class="shadow-sm rounded w-100 p-2 p-md-4 line-chart">
    <div className="d-flex justify-content-between pb-3">
      <div>
        <h6>Total Incomes</h6>
        <span className="fs-2 fw-bold"> $18,765</span>
      </div>
      <div className="text-end">
        <h6>+2.6%</h6>
        <span>than last month</span>
      </div>
    </div>
    <div class="line-height">
      <Line :data="data" :options="options" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip)

export default {
  name: 'LineBar',
  components: {
    Line
  },
  data() {
    return {
      data: {
        labels: ['2017', '2018', '2019', '2020', '2021', '2020', '2023'],
        datasets: [
          {
            label: '$',
            backgroundColor: 'transparent',
            borderColor: '#379788',
            data: [195, 291, 315, 120, 90, 280, 300],
            cubicInterpolationMode: 'monotone'
            // pointStyle: "line",
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: false
          },
          y: {
            display: false
          }
        },
        plugins: {
          legend: {
            display: false
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
.line-chart {
  background-color: #d3f2e5;
  color: #004b50;
}

.line-height {
  height: 150px;
}
</style>
