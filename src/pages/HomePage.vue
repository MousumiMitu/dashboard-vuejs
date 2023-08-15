<template>
  <div class="w-100 min-h-screen">
    <NavBar />
    <div class="m-4">
      <ViewCard />
      <div class="row py-3">
        <div class="col-xl-8">
          <div class="row">
            <div class="col-md-6">
              <div>
                <LineBar />
              </div>
            </div>
            <div class="col-md-6">
              <div class="shadow-sm p-2 p-md-4 rounded">
                <h3 className="fs-5 text-black">Booked</h3>

                <div v-for="bar in progressBar" :key="bar.id" class="py-2">
                  <div class="d-flex justify-content-between">
                    <small class="">{{ bar.title }}</small>
                    <small class="fs-6 text-black">10.10</small>
                  </div>
                  <ProgressBar :color="bar.color" :bar="bar.bar" />
                </div>
              </div>
            </div>
          </div>

          <div class="row py-3 mx-1">
            <div class="col-md-6 shadow-sm">
              <div class="row py-5 px-1 px-md-3">
                <div class="col-5">
                  <RadiantColor
                    :progressValue="85"
                    :gradientStartColor="'#FFFC76'"
                    :gradientEndColor="'#FFD73B'"
                  />
                </div>
                <div class="my-auto col-7">
                  <h3>38,566</h3>
                  <small>Pending for payment</small>
                </div>
              </div>
            </div>
            <div class="col-md-6 shadow-sm">
              <div class="row py-5 px-1 px-md-3">
                <div class="col-5">
                  <RadiantColor
                    :progressValue="45"
                    :gradientStartColor="'#FFFC76'"
                    :gradientEndColor="'#FFD73B'"
                  />
                </div>
                <div class="my-auto col-7">
                  <h3 class="">38,566</h3>
                  <small>Pending for payment</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4">
          <div class="shadow-sm rounded p-4">
            <h3 class="fs-5 text-black">Tours Available</h3>
            <div class="d-flex justify-content-center overflow-x-hidden my-5">
              <CircularProgressBar :progressValue="65" />
            </div>
            <div class="d-flex justify-content-between align-items-center pb-2 pt-4">
              <div class="d-flex">
                <div class="small-box rounded my-auto me-2"></div>
                <h4 class="fs-6 my-auto">Sold</h4>
              </div>
              <h6 class="text-black my-auto">120 Tours</h6>
            </div>

            <div class="d-flex justify-content-between align-items-center pb-3">
              <div class="d-flex">
                <div class="small-box rounded my-auto me-2"></div>
                <h4 class="fs-6 my-auto">Available</h4>
              </div>
              <h6 class="text-black my-auto">12 Tours</h6>
            </div>
          </div>
        </div>
      </div>

      <div class="row py-3">
        <div class="col-lg-8">
          <BarChartData />
        </div>

        <div class="col-lg-4">
          <ReviewCart />
        </div>
      </div>

      <div>
        <BookingCart />
      </div>
    </div>
  </div>
</template>

<script setup>
import ViewCard from '../components/ViewCard.vue'
import NavBar from '../components/NavBar.vue'
import ReviewCart from '../components/ReviewCart.vue'
import BookingCart from '../components/BookingCart.vue'
import ProgressBar from '../components/ProgressBar.vue'
import BarChartData from '../components/BarChartData.vue'
import LineBar from '../components/LineBar.vue'
import CircularProgressBar from '../components/CircularProgressBar.vue'
import RadiantColor from '../components/RadiantColor.vue'

const progressBar = [
  { id: 1, color: '#ffab00', bar: '15%', title: 'Booking' },
  { id: 2, color: '#FF5630', bar: '25%', title: 'Cancelled' },
  { id: 3, color: '#22C55E', bar: '45%', title: 'Sold' }
]
</script>
<style></style>
