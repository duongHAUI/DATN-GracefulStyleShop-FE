import Thehome from "@/views/home/TheHome.vue";
import ProductDetail from "@/views/product/ProductDetail.vue";
import TheCart from "@/views/TheCart.vue";
import TheCheckout from "@/views/TheCheckout.vue";

/**
 * Các routes của page
 */
const routes = [
  {
    path: "",
    component:Thehome,
 },
 {
  path: "/products",
    component:ProductDetail,
 },
 {
  path: "/cart",
    component:TheCart,
 },
 {
  path: "/checkouts",
    component:TheCheckout,
 },
];

export default routes;
