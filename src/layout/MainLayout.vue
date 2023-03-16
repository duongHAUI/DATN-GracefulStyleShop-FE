<template>
    <div>
        <the-header />
        <product-cart :item="item"  />
        <the-footer />
    </div>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import ProductCard from '@/components/ProductCard.vue';
export default {
    name: 'MainLayout',
    component:{
        TheHeader,
        TheFooter,
        ProductCard
    },
    data() {
        return {
            item : {
                title:"Đồ chơi nhồi bông máy bay P2TOYadsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsds212J",
                price:175000,
                price_del :250000,
                colorEnum : [1,2,3],
                link : "../assets/img/avt.png",
                number_mass : 30
            }
        }
    },
}
</script>
<style>

</style>