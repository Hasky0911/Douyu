import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from "../page/Home.vue";
import Category from "../page/Category.vue";
import CategoryList from "../page/CategoryList.vue";

export default new Router({
  routes: [
    {
    	path:"/",
    	component:Home
    },
    {
    	path:"/category",
    	component:Category
    },
    {
    	//url的hash路径中，可以通过:的形式添加路径参数，
    	//路径中的参数会传递给跳转页面。
    	path:"/category/:game/:id",
    	component:CategoryList
    },
  ]
})
