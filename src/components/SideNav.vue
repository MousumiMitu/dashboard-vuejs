<template>
  <div
    :style="collapse ? { width: '20vw' } : { width: '7vw' }"
    class="position-sticky top-0 start-0 vh-100 border-style"
  >
    <div
      class="collapsible-btn position-absolute d-flex justify-content-center align-items-center rounded-circle"
      @click="toggleCollapse"
    >
      <div v-if="collapse" class="d-flex justify-content-center align-items-center">
        <v-icon name="md-keyboardarrowleft" />
      </div>
      <div v-else class="d-flex justify-content-center align-items-center">
        <v-icon name="md-keyboardarrowright" />
      </div>
    </div>
    <div
      :class="
        collapse ? 'sidebar-container w-100 p-4 h-100' : 'sidebar-container w-100 px-1 py-4 h-100'
      "
    >
      <div :class="collapse ? 'logo-btn mb-4' : 'logo-btn mx-auto mb-2'">
        <img src="letter-m.png" alt="" class="w-100" />
      </div>
      <div>
        <h6 v-if="collapse" class="fs-6 pb-2">Overview</h6>
        <div
          v-for="item in data"
          :class="[getNavItemClasses(item), active === item.id && 'active-color']"
          @click="setActive(item.id)"
          :key="item.id"
        >
          <div :class="[collapse && 'pe-3']">
            <v-icon :name="item.icon" />
          </div>
          <h6 class="my-auto" :style="collapse ? { fontSize: '15px' } : { fontSize: '10px' }">
            {{ item.name }}
          </h6>
        </div>
      </div>

      <div>
        <h6 v-if="collapse" class="fs-6 pb-2">Overview</h6>
        <div
          v-for="item in data"
          :class="[getNavItemClasses(item), active === item.id && 'active-color']"
          @click="setActive(item.id)"
          :key="item.id"
        >
          <div :class="[collapse && 'pe-3']">
            <v-icon :name="item.icon" />
          </div>
          <h6 class="my-auto" :style="collapse ? { fontSize: '15px' } : { fontSize: '10px' }">
            {{ item.name }}
          </h6>
        </div>
      </div>

      <div>
        <h6 v-if="collapse" class="fs-6 pb-2">Overview</h6>
        <div
          v-for="item in data"
          :class="[getNavItemClasses(item), active === item.id && 'active-color']"
          @click="setActive(item.id)"
          :key="item.id"
        >
          <div :class="[collapse && 'pe-3']">
            <v-icon :name="item.icon" />
          </div>
          <h6 class="my-auto" :style="collapse ? { fontSize: '15px' } : { fontSize: '10px' }">
            {{ item.name }}
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const collapse = ref(true)
const active = ref(3)

const data = [
  { id: 1, icon: 'bi-speedometer2', name: 'app' },
  { id: 2, icon: 'bi-speedometer2', name: 'e-commerce' },
  { id: 3, icon: 'bi-speedometer2', name: 'analytics' },
  { id: 4, icon: 'co-bank', name: 'banking' },
  { id: 5, icon: 'bi-app-indicator', name: 'file' }
]

const toggleCollapse = () => {
  collapse.value = !collapse.value
}

const setActive = (id) => {
  active.value = id
}

const getNavItemClasses = () => {
  const baseClasses = collapse.value
    ? 'd-flex m-1 p-2 rounded sidebar-navItem'
    : 'd-flex flex-column justify-content-center align-items-center text-center m-1 p-1 rounded'
  return [baseClasses]
}
</script>

<style>
.sidebar-container {
  overflow: auto;
}
.border-style {
  border-right: 1px dashed #d7dadd;
}
.sidebar-container::-webkit-scrollbar {
  width: 5px;
}
.sidebar-container::-webkit-scrollbar-thumb {
  background: transparent;
}
.sidebar-container:hover {
  overflow-y: auto;
}
.sidebar-container:hover::-webkit-scrollbar-thumb {
  background: #b4bcc3;
  border-radius: 10px;
}
.collapsible-btn {
  width: 25px;
  height: 25px;
  border: 1px dashed #d7dadd;
  right: -12.5px;
  top: 15px;
  background: #ffffff;
  z-index: 1101 !important;
}

.sidebar-navItem:hover {
  background: #f6f7f8;
}
.sidebar-container .active-color {
  background: #dcf1ea;
  color: #0aba80;
}
.sidebar-container .active-color:hover {
  background: #cdf0e4;
}
.logo-btn {
  width: 40px;
}
</style>
