import Vue from "vue";
import App from "./App";

// 去除console警告
Vue.config.productionTip = false;

new Vue({
  el: "#root",
  // 渲染 1.把导入的App组件配置对象，在vue模板中注册解析为一个标签名<App/>并使用
  //      2.把标签在模板中渲染
  render: (h) => h(App),
});
