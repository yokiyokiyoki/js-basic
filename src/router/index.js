import Vue from "vue";
import Router from "vue-router";

import Home from "@/pages";
import ArrayModule from "@/pages/array";
import ObjectModule from "@/pages/object";
import AsyncModule from "@/pages/async";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      children: [
        {
          path: "array",
          name: "Array",
          component: ArrayModule
        },
        {
          path: "object",
          name: "Object",
          component: ObjectModule
        },
        {
          path: "async",
          name: "Async",
          component: AsyncModule
        }
      ]
    }
  ]
});
