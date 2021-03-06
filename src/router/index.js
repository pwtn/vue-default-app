import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes/index";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes
});

export default router;
