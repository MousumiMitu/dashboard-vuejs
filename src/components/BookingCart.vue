<template>
  <div class="rounded p-md-4 p-lg-0">
    <div class="d-flex justify-content-between pb-4">
      <div>
        <h3 class="fs-5 text-black">Newest Booking</h3>
        <small>12 Bookings </small>
      </div>
      <div class="d-flex">
        <div class="arrow-btn rounded-circle d-flex justify-content-center align-items-center">
          <v-icon name="md-keyboardarrowleft" />
        </div>
        <div class="arrow-btn rounded-circle d-flex justify-content-center align-items-center">
          <v-icon name="md-keyboardarrowright" />
        </div>
      </div>
    </div>

    <div class="row g-3">
      <div v-for="item in card" class="col-lg-4 col-xl-3 col-md-6" :key="item.id">
        <div class="py-3 bg-body-secondary p-3 rounded">
          <div class="d-md-flex">
            <div class="user-img">
              <img :src="item.img2" alt="" class="w-100" />
            </div>
            <div class="d-flex flex-column my-auto ps-md-2 pt-2 pt-sm-0">
              <small class="text-dark">Jayway sfom</small>
              <small class="sml-desc">3aug 2030 2.35pm</small>
            </div>
          </div>

          <div class="d-flex justify-content-between align-items-center pt-3">
            <div class="d-flex align-items-center">
              <v-icon name="bi-calendar-check-fill" />
              <h6 class="sml-desc ps-1 my-auto">3 days 2 nights</h6>
            </div>
            <div class="d-flex align-items-center">
              <v-icon name="fa-user-friends" />
              <h6 class="sml-desc ps-1 my-auto">3 days 2 nights</h6>
            </div>
          </div>

          <div class="pt-3">
            <img :src="item.img" alt="" class="img-fluid book-img w-100 rounded" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bg1 from '../assets/bg1.jpg'
import bg2 from '../assets/bg2.jpg'
import man from '../assets/man.png'

const card = [
  { id: 1, img: bg1, img2: man, price: '52.12' },
  { id: 1, img: bg2, img2: man, price: '45' },
  { id: 1, img: bg1, img2: man, price: '14.5' },
  { id: 1, img: bg2, img2: man, price: '100' }
]
</script>

<style></style>
