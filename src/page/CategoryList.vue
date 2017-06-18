<template>
	<div class="root">
		<SecondBar>{{$route.params.game}}</SecondBar>
		
		<CateRoomList :list="list"></CateRoomList>
		
	</div>
</template>

<script>
	
	import SecondBar from "../components/SecondBar.vue";
	import CateRoomList from "../components/CateRoomList.vue"
	
	export default{
		components:{
			SecondBar,
			CateRoomList
		},
		mounted:function(){
			this.requestData();
		},
		data:function(){
			return {
				list:[]
			}
		},
		
		methods:{
			requestData(){
				var url = "/douyu/api/RoomApi/live/"
				+this.$route.params.id;
				
				this.$ajax.get(url)
				.then(res=>{
//					console.dir(res.data);
					this.list = res.data.data;
				});
			}
		}
		
	}
</script>

<style scoped>
	
</style>