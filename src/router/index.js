import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Products",
    component: () => import("../views/Products.vue"),
  },
  {
    path: "/shoping",
    name: "Shoping",
    component: () => import("../views/Shoping.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
