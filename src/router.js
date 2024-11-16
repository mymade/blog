import { createWebHistory, createRouter } from "vue-router";
import List from './MyList.vue'
import Detail from './DetailPage.vue'
import Info from './InfoPage.vue'

// 메뉴 컴포넌트
import Hotel from './menu/HotelPage.vue'
import Flight from './menu/FlightPage.vue'
import Promotion from './menu/ProPage.vue'
import Tour from './menu/TourPage.vue'

// 멤버 컴포넌트
import Login from './members/LoginPage.vue'
import Cart from './members/CartPage.vue'
import Mypage from './members/MyPage.vue'

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/detail/:id",
    component: Detail,
    children:[
      {path:'Info', component:Info}
    ]
  },
  {
    path: "/hotel",
    component: Hotel,
  },
  {
    path: "/flight",
    component: Flight,
  },
  {
    path: "/promotion",
    component: Promotion,
  },
  {
    path: "/tour",
    component: Tour,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/mypage",
    component: Mypage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 