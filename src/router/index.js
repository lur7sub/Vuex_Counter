import { createRouter, createWebHashHistory } from "vue-router";
import CounterView from "../views/CounterView.vue";

const routes = [
  {
    path: "/",
    name: "CounterView",
    component: CounterView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
