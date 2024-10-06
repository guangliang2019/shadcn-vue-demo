import { createRouter, createWebHashHistory } from "vue-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Abort from "./pages/Abort/Abort.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/login", component: Login },
  { path: "/abort", component: Abort },
  { path: "/register", component: Register },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
