<template>
	<div class="root" @scroll="listScroll">
		
		<p v-show="dataState =='loading'" style="text-align: center;">
			<span class="fa fa-refresh fa-spin"></span>
		</p>
		<p v-show="dataState =='fail'">网络出问题了</p>
		
		<div class="list">
			<RoomItem v-for="(r,i) in rooms" :room="r" :key="i"></RoomItem>
		</div>
		<p v-show="rooms.length>0">
			<span class="fa fa-refresh fa-spin"></span>
		</p>
	</div>
	
</template>

<script>
	
	import RoomItem from "./RoomItem";
	
	export default {
		props:["rooms","dataState"],
		components:{
			RoomItem
		},
		methods:{
			listScroll(e){
				
				//元素自身高度509
//				console.log(e.target.clientHeight);
				//元素的内容高度2208
//				console.log(e.target.scrollHeight);
				//元素当前的纵向滚动偏移量
//				console.log(e.target.scrollTop);
				
				if(e.target.scrollHeight-e.target.clientHeight-100<=e.target.scrollTop){
					console.log("发起请求更多");
					this.$emit("requestMore");
				}
				
			}
		}
	}
</script>

<style scoped>
	.root{
		height: calc(100vh - 50px);
		overflow: scroll;
	}
	.list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	
	p{
		font-size: 1.6rem;
		margin-top: 0;
		text-align: center;
	}
	
</style>