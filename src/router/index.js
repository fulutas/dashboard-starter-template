import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../views/Dashboard.vue";
import Forms from "../views/Forms.vue";
import Tables from "../views/Tables.vue";
import UIElements from "../views/UIElements.vue";
import Login from "../views/Auth/Login.vue";
import LoginSecond from "../views/Auth/LoginSecond.vue";
import LoginThird from "../views/Auth/LoginThird.vue";
import Modal from "../views/Modal.vue";
import Card from "../views/Card.vue";
import Blank from "../views/Blank.vue";
import NotFound from "../views/public-pages/NotFound.vue";
import Error from "../views/public-pages/Error.vue";
import AccessDenied from "../views/public-pages/AccessDenied.vue";


const routes = [
  {
    path: "/",
    name: "LoginSecond",
    component: LoginSecond,
    meta: { layout: "empty" },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },
  {
    path: "/loginthird",
    name: "LoginThird",
    component: LoginThird,
    meta: { layout: "empty" },
  },
  {
    path: "/not-found",
    name: "NotFound",
    component: NotFound,
    meta: { layout: "empty" },
  },
  {
    path: "/error",
    name: "Error",
    component: Error,
    meta: { layout: "empty" },
  },
  {
    path: "/access-denied",
    name: "AccessDenied",
    component: AccessDenied,
    meta: { layout: "empty" },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/forms",
    name: "Forms",
    component: Forms,
  },
  {
    path: "/cards",
    name: "Cards",
    component: Card,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/ui-elements",
    name: "UIElements",
    component: UIElements,
  },
  {
    path: "/modal",
    name: "Modal",
    component: Modal,
  },
  {
    path: "/blank",
    name: "Blank",
    component: Blank,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
