<template>
	<div class="root" @click="openLiveClick">
		<img :src="room.room_src"/>
		<h6>
			<span class="fa fa-desktop"></span>
			{{room.room_name}}
		</h6>
		<span class="nickname">{{room.nickname}}</span>
		<span class="online fa fa-user">{{room.online|wan}}</span>
	</div>
</template>

<script>
	export default {
		props:["room"],
		methods:{
			openLiveClick(){
//				location.href = this.room.url;
				window.open(this.room.url);
			}
		}
	}
</script>

<style scoped>
	.root{
		position: relative;
		width: 14rem;
		height: 12rem;
		/*border: solid 1px black;*/
		margin: 1rem 0;
		border-radius: 10px;
		overflow: hidden;
		
	}
	
	img{
		width: 100%;
		height: 80%;
	}
	
	h6{
		margin: 0;
		height: 20%;
		font-size: 1rem;
		text-align: center;
		/*line-height: 2.4rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;*/
		
	}
	
	.nickname,.online{
		position: absolute;
		color: white;
		top: 66%;
		text-shadow: 0px 0px 2px black;
	}
	
	.nickname{
		left: 1rem;
	}
	
	.online{
		right: 1rem;
	}
	
	
</style>