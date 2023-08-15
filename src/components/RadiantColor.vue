<template>
  <div class="skill position-relative">
    <div class="outer w-100 h-100 rounded-circle">
      <div class="inner rounded-circle d-flex justify-content-center align-items-center">
        <div id="number2">{{ progressValue }} %</div>
      </div>
    </div>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="100px"
      height="100px"
      class="position-absolute top-0 start-0"
    >
      <defs>
        <linearGradient id="GradientColor2">
          <stop offset="0%" :stop-color="gradientStartColor" />
          <stop offset="100%" :stop-color="gradientEndColor" />
        </linearGradient>
      </defs>
      <circle
        id="circle2"
        cx="49"
        cy="49"
        r="43"
        stroke-linecap="round"
        :style="{ '--stroke-dashoffset': calculatedStrokeDashoffset }"
      />
    </svg>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const { progressValue, gradientStartColor, gradientEndColor } = props

const props = defineProps({
  progressValue: Number,
  gradientStartColor: String,
  gradientEndColor: String
})
const calculatedStrokeDashoffset = ref(262 - progressValue * 2.62)
</script>

<style scoped>
.skill {
  width: 100px;
  height: 100px;
  transform: rotate(-90deg);
}
.outer {
  padding: 12px;
  background: #e5e6e8;
}
.inner {
  width: 98.5%;
  height: 98.5%;
  background: #ffffff;
}
#number2 {
  font-weight: 600px;
  color: #212b36;
  transform: rotate(90deg);
}
#circle2 {
  fill: none;
  stroke: url(#GradientColor2);
  stroke-width: 12px;
  stroke-dasharray: 262;
  stroke-dashoffset: var(--stroke-dashoffset, 0);
}
</style>
