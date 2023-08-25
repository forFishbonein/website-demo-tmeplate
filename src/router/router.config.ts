import { RouteRecordRaw } from "vue-router";
import Index from "@/Index.vue";
import Home from "@/views/Home.vue";

// import Note from "@/views/readTravel/note/Note.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index", //App中包裹Index
    meta: {
      title: "松鼠ai",
      keepAlive: false,
    },
    component: Index,
    redirect: "/home", //Index中包裹Home等组件
    children: [
      {
        path: "/home",
        name: "Index",
        component: Home,
        meta: { title: "首页", keepAlive: false, showTab: true },
      },
    ],
  },
];
