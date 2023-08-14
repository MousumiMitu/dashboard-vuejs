<template>
  <div class="shadow-sm rounded p-md-4">
    <div class="d-flex justify-content-between">
      <div>
        <h3 class="fs-5 text-black">Customer Reviews</h3>
        <p>5 reviews</p>
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

    <div class="d-md-flex py-3">
      <div class="user-img">
        <img src="../assets/man.png" alt="" class="w-100" />
      </div>
      <div class="my-auto ps-md-4 pt-2 pt-sm-0">
        <h5 class="fs-6">Jayway sfom</h5>
        <small>Posted 3aug 2030 2.35pm</small>
      </div>
    </div>
    <div>
      <v-icon name="bi-star-fill" class="text-warning fs-5 me-1" />
      <v-icon name="bi-star-fill" class="text-warning fs-5 me-1" />
      <v-icon name="bi-star-fill" class="text-warning fs-5 me-1" />
      <v-icon name="bi-star-fill" class="text-warning fs-5 me-1" />
      <v-icon name="bi-star-half" class="fs-5 me-1" />
    </div>
    <p :style="{ fontSize: '13px' }" class="py-2 text-justify text-dark">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi ab velit doloribus
      quasi voluptas. Aliquam, eveniet culpa beatae consequuntur amet est ullam necessitatibus
      perspiciatis, eius sint
    </p>

    <div class="d-flex">
      <small class="bg-body-secondary px-2 py-1 my-auto rounded me-2" :style="{ fontSize: '10px' }">
        Great service
      </small>
      <small class="bg-body-secondary px-2 py-1 my-auto rounded me-2" :style="{ fontSize: '10px' }">
        recommended
      </small>
      <small class="bg-body-secondary px-2 py-1 my-auto rounded me-2" :style="{ fontSize: '10px' }">
        Best price
      </small>
    </div>

    <hr />
    <div class="row py-2 gx-2">
      <div class="col-md-6 pb-2 pb-md-0">
        <button class="bg-danger-subtle w-100 border-0 text-danger py-1 rounded">Reject</button>
      </div>
      <div class="col-md-6">
        <button class="bg-dark w-100 border-0 text-white py-1 rounded">Accept</button>
      </div>
    </div>
  </div>
</template>
<script></script>
<style></style>
