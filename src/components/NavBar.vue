<template>
  <nav :class="`d-flex justify-content-between align-items-center ms-1 px-4 py-2 ${stickyClass}`">
    <div class="">
      <v-icon name="bi-search" />
    </div>

    <div class="d-flex align-items-center">
      <a href="/" class="navItems d-flex align-items-center justify-content-center rounded-circle">
        <img src="united-kingdom.png" alt="" class="w-50" />
      </a>
      <a href="/" class="navItems d-flex align-items-center justify-content-center rounded-circle">
        <img src="notification.png" alt="" class="w-50" />
      </a>
      <a href="/" class="navItems d-flex align-items-center justify-content-center rounded-circle">
        <img src="group.png" alt="" class="w-50" />
      </a>
      <a
        href="/"
        class="navItems d-flex align-items-center justify-content-center ms-1 rounded-circle"
      >
        <img src="gear.png" alt="" class="w-50" />
      </a>
      <a
        href="/"
        class="navItems d-flex align-items-center justify-content-center ms-1 rounded-circle"
      >
        <img src="man.png" alt="" class="w-75" />
      </a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
// import { BsSearch } from 'vue-icons/bs';

const stickyClass = ref('')

const stickNavbar = () => {
  if (typeof window !== 'undefined') {
    const windowHeight = window.scrollY
    // Adjust the threshold as needed
    stickyClass.value = windowHeight > 120 ? 'sticky-nav' : ''
  }
}

onMounted(() => {
  window.addEventListener('scroll', stickNavbar)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', stickNavbar)
})
</script>
<style>
.sticky-nav {
  position: sticky;
  top: 0;
  left: 0;
  background-color: #faf9f9f4;
  z-index: 999 !important;
  transition: all 0.4s ease;
}
.navItems {
  width: 40px;
  height: 40px;
}
.navItems:hover {
  background: #ffffff43;
}
</style>
