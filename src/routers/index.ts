import { createRouter, createMemoryHistory } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import LoginLayout from "../layouts/LoginLayout.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        name: "main",
        path: "",
        component: () => import("../pages/main.vue"),
      },
      {
        name: "users",
        path: "users",
        component: () => import("../pages/users/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: LoginLayout,
    children: [
      {
        name: "login",
        path: "",
        component: () => import("../pages/login.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
