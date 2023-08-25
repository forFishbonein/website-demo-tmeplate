/*
 * @FilePath: env.d.ts
 * @Author: Aron
 * @Date: 2023-05-29 14:20:47
 * @LastEditors:
 * @LastEditTime: 2023-05-29 14:20:47
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion:
 */
//注意这个文件放的位置，和App.vue在一个级别下
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
