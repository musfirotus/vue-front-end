import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.view";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.view"),
  },
  {
    /*
    super_admin = all access,
    admin : only add product & product in/out
    */
    path: "/dashboard",
    name: "Dashboard",
    meta: {
      requiresAuth: true,
      is_admin: false,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard.view"),
  },
  {
    path: "/product",
    name: "Product",
    meta: {
      requiresAuth: true,
      is_admin: false,
    },
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/Product.view"),
  },
  {
    path: "/user",
    name: "User",
    meta: {
      requiresAuth: true,
      is_admin: false,
    },
    component: () =>
      import(/* webpackChunkName: "user" */ "../views/User.view"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // if route if requiresAuth
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // if don't have token
    if (localStorage.getItem("token") == null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath },
      });
    } else {
      // check by role
      let user = JSON.parse(localStorage.getItem("user"));
      if (to.matched.some((record) => record.meta.is_admin)) {
        if (user.role == "super_admin") {
          next();
        } else {
          alert("anda bukan super admin");
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          next("/login");
        }
      } else {
        next();
      }
      next();
    }
  } else {
    next();
  }
});

export default router;
