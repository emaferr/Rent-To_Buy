import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Lessee from "@/views/Lessee.vue";
import Lessor from "@/views/Lessor.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/lessor",
    name: "Lessor",
    props: true,
    component: Lessor,
  },
  {
    path: "/lessee",
    name: "Lessee",
    component: Lessee,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
