<template>
	<div class="root" @click="closeClick">
		<div class="header"></div>
		<div class="container">
			<div class="menu">
				<ul>
					<li>
						<router-link to="/" class="clear-fix">
							<span>首页</span>
							<span class="fa fa-angle-right"></span>
						</router-link>
					</li>
					<li>
						<router-link to="/category" class="clear-fix">
							<span>全部分类</span>
							<span class="fa fa-angle-right"></span>
						</router-link>
					</li>
					<li>
						<router-link to="" class="clear-fix">
							<span>推荐</span>
							<span class="fa fa-angle-right"></span>
						</router-link>
					</li>
					<li>
						<router-link to="" class="clear-fix">
							<span>个人中心</span>
							<span class="fa fa-angle-right"></span>
						</router-link>
					</li>
				</ul>
			</div>
			<div class="right-box"></div>
		</div>
	</div>
</template>

<script>
	export default {
		methods:{
			closeClick:function(){
				this.$emit("close");
			}
		}
	}
</script>

<style scoped>
	.root{
		position: fixed;
		width: 100%;
		left: 0;
		top: 0;
		z-index: 10;
	}
	.header{
		height: 50px;
	}
	
	.container{
		display: flex;
	}
	
	.menu{
		background-color: #282828;
		height: calc(100vh - 50px);
		flex-grow: 1;
	}
	
	.right-box{
		flex-basis: 80px;
		flex-grow: 0;
	}
	
	ul{
		margin: 0;
		list-style: none;
		font-size: 1.6rem;
		padding-left: 0;
		border-top: solid 1px #3B3B3B;
	}
	
	li{
		padding-left: 10px;
		padding-right: 10px;
		line-height: 50px;
		border-bottom: dotted 1px #3B3B3B;
	}
	
	a span:nth-of-type(1){
		float: left;
	}
	
	a span:nth-of-type(2){
		float: right;
		line-height: 50px;
		font-size: 2rem;
		font-weight: bold;
	}
	
</style>