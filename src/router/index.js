import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CamisetaView from "../views/CamisetaView.vue";
import CalcaView from "../views/CalcaView.vue";
import TenisView from "../views/TenisView.vue";
import ChapeuView from "../views/ChapeuView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/camisetas",
      name: "camisetas",
      component: CamisetaView,
    },
    {
      path: "/calcas",
      name: "calcas",
      component: CalcaView,
    },
    {
      path: "/chapeus",
      name: "chapeus",
      component: ChapeuView,
    },
    {
      path: "/tenis",
      name: "tenis",
      component: TenisView,
    },
  ],
});

export default router;
