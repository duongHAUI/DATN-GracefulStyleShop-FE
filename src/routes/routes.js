import Thehome from "@/views/home/TheHome.vue";
import ProductDetail from "@/views/product/ProductDetail.vue";


/**
 * Các routes của page
 */
const routes = [
  {
    path: "",
    component:Thehome,
 },{
  path: "/products",
    component:ProductDetail,
 }
];

export default routes;
