<template>
	<div class="root" @click="itemClick">
		<img :src="game.game_icon"/>
		<h6>{{game.game_name}}</h6>
	</div>
</template>

<script>
	export default {
		props:["game"],
		methods:{
			itemClick(){
				console.log(this.game)
				location.href = "#/category/"
				+this.game.game_name+"/"
				+this.game.cate_id;
			}
		}
	}
</script>

<style scoped>
	.root{
		flex-basis: 33.33%;
		border: solid 1px darkgrey;
		height: 12rem;
	}
	
	img{
		width: 100%;
		height: 80%;
		border-radius: 50%;
		padding: 1rem;
	}
	
	h6{
		height: 20%;
		text-align: center;
		margin: 0;
		font-size: 1.4rem;
		color: #666666;
	}
</style>