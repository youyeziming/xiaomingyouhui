<template>
  <div id="app" ref="app">
	<router-view/>
	<nav id="navigator">
		<li>
			<router-link to="/">
				<span class="iconfont icon-zhuye"></span>
				<p>油惠</p>
			</router-link>
		</li>
		<li>
			<router-link to="/order">
				<span class="iconfont icon-dingdan"></span>
				<p>订单</p>
			</router-link>
		</li>
		<li>
			<router-link to="/card">
				<span class="iconfont icon-dianpu"></span>
				<p>核销</p>
			</router-link>
		</li>
		<li>
			<router-link to="/home">
				<span class="iconfont icon-ziyuan"></span>
				<p>我的</p>
			</router-link>
		</li>
	</nav>
  </div>
</template>

<script>
	/* import swiper from "./assets/js/swiper.js";
	import routerInfo from "./router/router_info.js"; */
	export default {
		name:"App",
		beforeCreate(){
			this.$store.dispatch("loadData");
		},
		mounted() {
		/* 	let index = routerInfo.indexOf(this.$route.name);
			let swiperBar  = new swiper(this.$refs.app,100,()=>{
				//向右滑动
				let offset = index = (index+1) == routerInfo.length ? 0 : ++index;
				this.$router.push({name:routerInfo[offset]});
			},()=>{
				//向左滑动
				let offset = index = (index-1) == -1 ? routerInfo.length - 1 : --index;
				this.$router.push({name:routerInfo[offset]});
			});
			console.log(swiperBar); */
			
			
		}
	}
</script>

<style>
	@import url("assets/css/iconfont.css");
	@import url("assets/css/style.css");
	#navigator
	{
		display: flex;
		justify-content:space-around;
		bottom: 0;
		position: fixed;
		width: 100vw;
		left: 0;
		border-top: 1px solid #ddd;
		background-color: #fff;
		opacity: 0.98;
		
	}
	#navigator>li{
		cursor: pointer;
	}
	.router-link-exact-active{
		color: #f00!important;
	}
	#app{
		height: 100vh;
		background-color: #efefef;
		overflow: hidden;
	}
</style>
