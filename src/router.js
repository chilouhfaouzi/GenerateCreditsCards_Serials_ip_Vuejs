import { createRouter, createWebHistory } from "vue-router";
import Credit from "./components/credit.vue";
import Serial from "./components/serial";
import Ip from "./components/ip";

const routes = [
  {
    path: "/",
    name: "credit",
    component: Credit,
  },
  {
    path: "/serial",
    name: "serial",
    component: Serial,
  },
  {
    path: "/ip",
    name: "ip",
    component: Ip,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
