<template>
  <div class="home">
    <div class="homepage-slider">
      <Carousel :itemsToShow="1" :breakpoints="breakpoints">
        <Slide v-for="(item, index) in dataSliders" :key="index">
          <img :src="item" alt="index" />
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
    <div class="promotion-over">
      <div class="promotion">
        <div class="promotion-title">TOKYOLIFE - LỄ HỘI HOA ANH ĐÀO</div>
        <div class="promotion-content">
          <div class="promotion-content-item">
            <div class="promotion-content-title">Sale Up to 80%</div>
            <span
              >Thời trang TokyoLife ưu đãi tới 80%. Số lượng có hạn - Shopping
              ngay!</span
            >
          </div>
          <div class="promotion-content-item">
            <div class="promotion-content-title">Sale Up to 80%</div>
            <span
              >Thời trang TokyoLife ưu đãi tới 80%. Số lượng có hạn - Shopping
              ngay!</span
            >
          </div>
          <div class="promotion-content-item">
            <div class="promotion-content-title">Sale Up to 80%</div>
            <span
              >Thời trang TokyoLife ưu đãi tới 80%. Số lượng có hạn - Shopping
              ngay!</span
            >
          </div>
          <div class="promotion-content-item">
            <div class="promotion-content-title">Sale Up to 80%</div>
            <span
              >Thời trang TokyoLife ưu đãi tới 80%. Số lượng có hạn - Shopping
              ngay!</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="banber">
      <img src="../assets/img/banner/banner-1.webp" alt="" />
    </div>
    
  </div>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
export default {
  name: "TheHome",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      dataSliders: [
        "../assets/img/sliders/slider-1.webp",
        "@/assets/img/sliders/slider-1.webp",
        "@/assets/img/sliders/slider-1.webp",
        "@/assets/img/sliders/slider-1.webp",
      ],
    };
  },
};
</script>
