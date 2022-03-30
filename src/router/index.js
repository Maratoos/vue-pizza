import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Cart from "../views/Cart.vue";
import ProductSettings from "../views/ProductSettings.vue";
import ProductType from "../views/ProductType.vue";
import ProductParams from "../views/ProductParams.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/type",
    name: "ProductType",
    component: ProductType,
  },
  {
    path: "/settings",
    name: "ProductSettings",
    component: ProductSettings,
  },
  {
    path: "/params",
    name: "ProductParams",
    component: ProductParams,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
