import Vue from "vue";
import VueRouter from "vue-router";
import Buscador from "../views/Buscador.vue";
import Peleador from "../views/Peleador.vue";
import Peleadores from "../views/Peleadores.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/buscador",
    name: "Buscador",
    component: Buscador,
    children: [
      {
        path: "/buscador/:id",
        name: "Peleador",
        component: Peleador,
      },
    ],
  },
  {
    path: "/peleadores",
    name: "Peleadores",
    component: Peleadores,
  },
  {
    path:"*",
    name:"NotFound",
    component:NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
