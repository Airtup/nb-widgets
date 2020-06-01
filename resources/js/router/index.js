import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
  routes: [
    // Dashboards

    {
      path: "/",
      name: "analytics",
      component: () => import("../PageComponents/Analytics.vue"),
    },
    // Pages

    {
      path: "/login",
      name: "login",
      meta: { layout: "userpages" },
      component: () => import("../PageComponents/Login.vue"),
    },
    {
      path: "/nations",
      name: "nations",
      component: () => import("../PageComponents/Nations/Index.vue")
    },
    {
      path: "/nations/create",
      name: "create-nation",
      component: () => import("../PageComponents/Nations/Create.vue")
    },
    {
      path: "/nations/edit/:id",
      props: true,
      name: "edit-nation",
      component: () => import("../PageComponents/Nations/Edit.vue")
    }
  ],
});

export default router;