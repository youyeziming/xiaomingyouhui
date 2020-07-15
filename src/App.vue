<template>
  <div id="app" ref="app">

	<router-view/>

	
	
	<nav id="navigator">
		<li>
			<router-link to="/">
				<van-icon name="wap-home-o" size="26" />
				<p>油惠</p>
			</router-link>
		</li>
		<li>
			<router-link to="/order">
				<van-icon name="balance-list-o" size="26"/>
				<p>订单</p>
			</router-link>
		</li>
		<li>
			<router-link to="/card">
				<van-icon name="shop-o" size="26" />
				<p>核销</p>
			</router-link>
		</li>
		<li>
			<router-link to="/home">
				<van-icon name="user-o" size="26" />
				<p>我的</p>
			</router-link>
		</li>
	</nav>
  </div>
</template>

<script>
	export default {
		name:"App",
		beforeCreate(){
			this.$store.dispatch("loadData");
			this.$store.dispatch("loadFuel");
		},
		mounted() {
			
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
		opacity: 0.96;
		
	}
	#navigator>li{
		cursor: pointer;
		position: relative;
		top: 1px;
	}
	.router-link-exact-active{
		color: #f00!important;
	}
	#app{
		height: 100vh;
		background-color: #efefef;
		overflow: hidden;
	}
	.van-icon{
		font-size: 15px;
	}
	
</style>