import { createRouter, createWebHashHistory } from "vue-router";

const routes: Array<any> = [
  {
    path: "/",
    name: "Person",
    component: () => import("../vieiws/Person.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
