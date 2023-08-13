<template>
  <div class="d-flex justify-content-center align-content-center border">
    <circle-progress
      :show-percent="true"
      :percent="40"
      :is-gradient="true"
      :gradient="{
        angle: 90,
        startColor: '#ff0000',
        stopColor: '#ffff00'
      }"
    />
  </div>
</template>
<script>
import CircleProgress from 'vue3-circle-progress'
export default {
  components: { CircleProgress }
}
</script>
<style scoped></style>
