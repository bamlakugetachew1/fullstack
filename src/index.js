import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue'
import About from './components/About.vue'
import compose from './components/compose.vue'
import service from './components/service.vue'
import priview from './components/priview.vue'
import edit from './components/edit.vue'
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: edit,
  },
  {
    path: "/about/:id",
    name: "About",
    component: About,
  },
   
  {
    path: "/compose",
    name: "compose",
    component: compose,
  },
  {
    path: "/service",
    name: "service",
    component:service,
  },
  {
    path: "/priview/:id",
    name: "priview",
    component: priview,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;