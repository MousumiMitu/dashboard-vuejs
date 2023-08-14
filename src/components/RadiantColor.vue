<template>
  <div class="skill">
    <div class="outer">
      <div class="inner">
        <div id="number2">{{ progressValue }} %</div>
      </div>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100px" height="100px">
      <defs>
        <linearGradient id="GradientColor2">
          <stop offset="0%" stop-color="#FFFC76" />
          <stop offset="100%" stop-color="#FFD73B" />
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
import { defineProps, ref } from 'vue'

const { progressValue } = props

const props = defineProps({
  progressValue: Number,
  strokeDashoffset: String
})
const calculatedStrokeDashoffset = ref(262 - progressValue * 2.62)
</script>

<style scoped>
.skill {
  width: 100px;
  height: 100px;

  position: relative;
  transform: rotate(-90deg);
}
.outer {
  width: 100%;
  height: 100%;
  border-radius: 50%;

  padding: 12px;
  background: #e5e6e8;
}
.inner {
  width: 98.5%;
  height: 98.5%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
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
svg {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
