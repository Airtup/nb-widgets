import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
  routes: [
    // Dashboards

    {
      path: "/",
      name: "analytics",
      component: () => import("../DemoPages/Dashboards/Analytics.vue"),
    },
    // Pages

    {
      path: "/login",
      name: "login",
      meta: { layout: "userpages" },
      component: () => import("../DemoPages/UserPages/Login.vue"),
    },
  ],
});
