<template>
  <div class="home">
    <div class="homepage-slider">
      <Carousel
        :settings="config.settingSliderBar"
      >
        <Slide v-for="(item, index) in config.dataSliders" :key="index">
          <img :src="item" :alt="index" />
        </Slide>
        <!-- <template #addons>
          <Navigation />
          <Pagination />
        </template> -->
      </Carousel>
    </div>
    <div class="promotion-over">
      <div class="promotion">
        <div class="promotion-title">TOKYOLIFE - LỄ HỘI HOA ANH ĐÀO</div>
        <Carousel :settings="config.settingsPromotion" :breakpoints="config.breakpointsPromotion">
          <Slide v-for="item in 10" :key="item" >
            <div class="promotion-content-item">
              <div class="promotion-content-title">Sale Up to 80%</div>
              <span
                >Thời trang TokyoLife ưu đãi tới 80%. Số lượng có hạn - Shopping
                ngay!</span
              >
            </div>
          </Slide>
          <template #addons>
          <Navigation />
          <Pagination />
        </template>
        </Carousel>
      </div>
    </div>
    <div class="banber">
      <img src="../../assets/img/banner/banner-1.webp" alt="" />
    </div>
    <div class="list-product">
      <div class="list-product-title">
        Sản phẩm bán chạy
      </div>
      <Carousel :settings="config.settingsProduct" :breakpoints="breakpointsPromotion">
          <Slide v-for="item in config.products" :key="item" >
            <product-card :item="item" />
          </Slide>
        </Carousel>
    </div>
    <div class="banber">
      <img src="../../assets/img/banner/banner-1.webp" alt="" />
    </div>
    <div class="list-product">
      <div class="list-product-title">
        Sản phẩm bán chạy
      </div>
      <Carousel :settings="config.settingsProduct" :breakpoints="breakpointsPromotion">
          <Slide v-for="item in config.products" :key="item" >
            <product-card :item="item" />
          </Slide>
        </Carousel>
    </div>
    <v-select
    label="Select"
    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
  ></v-select>
    <div class="list-product">
      <Carousel :settings="config.settingsProduct" :breakpoints="breakpointsPromotion">
          <Slide v-for="item in config.products" :key="item" >
            <product-card :item="item" />
          </Slide>
        </Carousel>
    </div>
  </div>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import homeConfig from "./homeConfig";
import ProductCard from '@/components/ProductCard.vue';
import { VSelect } from 'vuetify/lib/components'
export default {
  name: "TheHome",
  components: {
    Carousel,
    Slide,
    ProductCard,
    VSelect
  },
  data() {
    return {
      config : new homeConfig()
    };
  },
};
</script>
