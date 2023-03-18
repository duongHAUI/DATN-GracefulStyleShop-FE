<template>
  <div>
    <the-header />
      <div class="m-main-content">
          <router-view />
      </div>
    <the-footer />
  </div>
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  name: "MainLayout",
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      data: [
        {
          title:
            "Đồ chơi nhồi bông máy bay1",
          price: 175000,
          price_del: 250000,
          colorEnum: [1, 2, 3],
          link: "../assets/img/avt.png",
          number_mass: 30,
        },
        {
          title:
            "Đồ chơi nhồi bông máy bay 2",
          price: 175000,
          price_del: 250000,
          colorEnum: [1, 2, 3],
          link: "../assets/img/avt.png",
          number_mass: 30,
        },
        {
          title:
            "Đồ chơi nhồi bông máy bay 3",
          price: 175000,
          price_del: 250000,
          colorEnum: [1, 2, 3],
          link: "../assets/img/avt.png",
          number_mass: 30,
        },{
          title:
            "Đồ chơi nhồi bông máy bay1",
          price: 175000,
          price_del: 250000,
          colorEnum: [1, 2, 3],
          link: "../assets/img/avt.png",
          number_mass: 30,
        },
        {
          title:
            "Đồ chơi nhồi bông máy bay 2",
          price: 175000,
          price_del: 250000,
          colorEnum: [1, 2, 3],
          link: "../assets/img/avt.png",
          number_mass: 30,
        },
        {
          title:
            "Đồ chơi nhồi bông máy bay 3",
          price: 175000,
          price_del: 250000,
          colorEnum: [1, 2, 3],
          link: "../assets/img/avt.png",
          number_mass: 30,
        },{
          title:
            "Đồ chơi nhồi bông máy bay1",
          price: 175000,
          price_del: 250000,
          colorEnum: [1, 2, 3],
          link: "../assets/img/avt.png",
          number_mass: 30,
        },
        {
          title:
            "Đồ chơi nhồi bông máy bay 2",
          price: 175000,
          price_del: 250000,
          colorEnum: [1, 2, 3],
          link: "../assets/img/avt.png",
          number_mass: 30,
        },
        {
          title:
            "Đồ chơi nhồi bông máy bay 3",
          price: 175000,
          price_del: 250000,
          colorEnum: [1, 2, 3],
          link: "../assets/img/avt.png",
          number_mass: 30,
        },
      ],
    };
  },
};
</script>
<style></style>
