<template>
	<div class="root">
		<span 
			class="fa fa-align-justify menu-btn"
			@click="menuClick"
		></span>
		
		<span class="title">
			<slot></slot>
		</span>
		<span class="fa fa-user-o user-btn"></span>
	</div>
</template>

<script>
	import bus from "../util/bus.js";
	
	export default {
		methods:{
			menuClick:function(){
				bus.$emit("openMenu");
			}
		}
	}
</script>

<style scoped>
	.root{
		height: 50px;
		background-color: #282828;
		display: flex;
	}
	
	.root span{
		line-height: 50px;
		font-size: 16px;
		display: inline-block;
	}
	
	.menu-btn{
		color: #999999;
		padding-left: 10px;
		width: 60px;
	}
	
	.title{
		color: white;
		width: 60%;
	}
	
	.user-btn{
		padding-right: 10px;
		text-align: right;
		width: calc(100% - 60px - 60%);
		color: #999999;
	}
	
	
</style>