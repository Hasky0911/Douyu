// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;


//配置axios
import axios from "axios";
Vue.prototype.$ajax = axios;


import NavBar from "./components/NavBar.vue";
Vue.component("NavBar",NavBar);

//导入并注册过滤器。
import {wan} from "./util/filters.js";
Vue.filter("wan",wan);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})



//为了让页面内容适应不同尺寸屏幕的手机，页面中元素的宽高
//不能写死，可以通过rem作为单位，当页面启动时，根据窗口的
//宽度计算出合适的rem大小，当窗口大小变化时，再次计算rem
//大小，那么页面中的内容就会根据窗口的大小而变化。

var w = document.documentElement.clientWidth;
document.documentElement.style.fontSize = w/32+"px";

window.onresize = function(){
	var w = document.documentElement.clientWidth;
	document.documentElement.style.fontSize = w/32+"px";
}
