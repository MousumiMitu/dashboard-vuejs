<template>
  <div class="skill position-relative">
    <div class="outer w-100 h-100 rounded-circle">
      <div class="inner rounded-circle d-flex justify-content-center align-items-center">
        <div id="number" class="text-center">
          186 <br />
          tours
        </div>
      </div>
    </div>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="160px"
      height="160px"
      class="position-absolute top-0 start-0"
    >
      <defs>
        <linearGradient id="GradientColor">
          <stop offset="0%" stop-color="#6EFFBA" />
          <stop offset="100%" stop-color="#38D090" />
        </linearGradient>
      </defs>
      <circle
        cx="80"
        cy="80"
        r="70"
        stroke-linecap="round"
        :style="{ '--stroke-dashoffset': calculatedStrokeDashoffset }"
      />
    </svg>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'

const { progressValue } = props

const props = defineProps({
  progressValue: Number,
  strokeDashoffset: String
})
const calculatedStrokeDashoffset = ref(472 - progressValue * 4.72)
</script>

<style scoped>
.skill {
  width: 160px;
  height: 160px;
  transform: rotate(-90deg);
}
.outer {
  padding: 20px;
  background: #edeff1;
}
.inner {
  width: 120px;
  height: 120px;
  background: #ffffff;
}
#number {
  font-weight: 600px;
  color: #212b36;
  transform: rotate(90deg);
}
circle {
  fill: none;
  stroke: url(#GradientColor);
  stroke-width: 20px;
  stroke-dasharray: 472;
  stroke-dashoffset: var(--stroke-dashoffset, 0);
}
</style>
