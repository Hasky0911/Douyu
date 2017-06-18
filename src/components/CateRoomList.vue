<template>
	<div class="root">
		
		<div class="l-item" v-for="r in list">
			<a :href="r.url" target="_blank">
				<img :src="r.room_src"/>
				<div>
					<h5>{{r.room_name}}</h5>
					<p><span class="fa fa-user"></span>{{r.nickname}}</p>
					<p><span class="fa fa-eye"></span>{{r.online|wan}}</p>
				</div>
			</a>
			
		</div>
		
	</div>
</template>

<script>
	export default{
		props:["list"]
	}
</script>

<style scoped>
	.l-item{
		padding: 1rem;
		
		border-bottom: solid 1px #666666;
	}
	
	img{
		height: 10rem;
		width: 14rem;
		margin-right: 1rem;
	}
	
	h5{
		font-size: 1.2rem;
	}
	
	p{
		color: #999999;
	}
	
	a{
		display: flex;
	}
	
</style>