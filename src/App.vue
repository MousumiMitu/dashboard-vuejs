<script setup>
import SideNav from './components/SideNav.vue'
import HomePage from './pages/HomePage.vue'
</script>

<template>
  <div className="d-flex ">
    <div className="d-lg-block d-none">
      <SideNav />
    </div>

    <HomePage />
  </div>
</template>

<style scoped></style>
