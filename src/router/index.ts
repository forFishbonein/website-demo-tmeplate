import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

// 2. 定义路由配置
import { routes } from "./router.config";

// 3. 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: true,
});

// 4. 配置路由守卫
router.beforeEach((to, from, next) => {
  next();
});

router.afterEach((to, from, next) => {});

// 5. 导出router
export default router;
