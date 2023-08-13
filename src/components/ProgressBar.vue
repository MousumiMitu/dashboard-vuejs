<template>
  <div class="progress-bar rounded overflow-hidden p-0">
    <div
      class="bar position-relative float-start h-100 rounded"
      :style="{ width: props.bar, background: props.color }"
    ></div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  color: String,
  bar: String
})
</script>
<style></style>
