import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Auth/Login"),
    meta: {
      plainLayout: true
    }
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("@/views/Errors/NotFound")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
