<template>
	<div>
		<NavBar>首页</NavBar>
		
		<RoomList 
			:dataState="dataState"
			:rooms="list"
			@requestMore="requestList"
		></RoomList>
		
	</div>
</template>

<script>
	
	import RoomList from "../components/RoomList.vue";
	
	export default{
		data:function(){
			return {
				list:[],
				dataState:"normal"
			}
		},
		mounted:function(){
			this.requestList();
			
		},
		
		methods:{
			requestList:function(){
				if(this.dataState == "loading"){
					return;
				}
				this.dataState = "loading";
				this.$ajax.get("/douyu/api/RoomApi/live",{
					params:{
						offset:Math.floor(this.list.length/30)
					}
				})
				.then(res=>{
//					this.list=res.data.data;
					this.list = this.list.concat(res.data.data);
					console.log(res.data);
					this.dataState = "success";
				},()=>{
					this.dataState = "fail";
				});
			}
		},
		components:{
			RoomList
		}
	}
</script>

<style scoped>
	
</style>