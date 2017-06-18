<template>
  <div id="app">
    
    <transition name="out-left">
    	<SideMenu 
	    	v-show="showMenu"
	    	@close="showMenu=false"
	    ></SideMenu>
    </transition>
    
    <transition :name="aniType">
    	<router-view></router-view>
    </transition>
    
    
  </div>
</template>

<script>
	
import SideMenu from "./components/SideMenu.vue";
import bus from "./util/bus.js";

export default {
  name: 'app',
  components:{
  	SideMenu
  },
  data:function(){
  	return {
  		showMenu:false,
  		aniType:""
  	}
  },
  mounted:function(){
  	bus.$on("openMenu",function(){
  		this.showMenu = true;
  	}.bind(this));
  },
  
  //通过watch监听$route值，可以监听到页面跳转，
  //在页面跳转之前，根据原地址和跳转地址，判断出需要执行
  //哪种切换动画。
  watch:{
  	$route:function(to,from){
  		var toNum = to.path.split("/").length-1;
  		var fromNum = from.path.split("/").length-1;
  		
  		if(toNum>fromNum){
//			console.log("进入动画");
				this.aniType = "pagein";
  		}else if(toNum<fromNum){
//			console.log("退出动画");
				this.aniType = "pageout";
  		}else{
//			console.log("平级切换");
  			this.aniType = "";
  		}
  		
  	}
  }
}
</script>

<style scoped>
	.out-left-enter{
		transform: translate(-100%,0);
	}
	.out-left-enter-active{
		transition: all 0.7s; 
	}
	
	.out-left-leave-active{
		transform: translate(-100%,0);
		transition: all 0.7s; 
	}
	
	/*进入动画*/
	.pagein-enter{
		transform: translate(100%,0);
	}
	
	.pagein-enter-active{
		transition: all 0.7s;
		position: absolute;
		width: 100%;
	}
	
	.pagein-leave-active{
		transform: translate(-50%,0);
		transition: all 0.7s;
		position: absolute;
		width: 100%;
	}
	
	/*退出动画*/
	.pageout-enter{
		transform: translate(-50%,0);
	}
	
	.pageout-enter-active{
		transition: all 0.7s;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	
	.pageout-leave-active{
		z-index: 2;
		transform: translate(100%,0);
		transition: all 0.7s;
		position: absolute;
		width: 100%;
	}
	
</style>
