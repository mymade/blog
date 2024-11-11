import { createWebHistory, createRouter } from "vue-router";
import List from './MyList.vue'
import Detail from './DetailPage.vue'

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/detail/:id",
    component: Detail,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 