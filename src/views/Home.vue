<template>
	<div id="Home">
		<div class="user">
			<div class="user_info">
				<div class="user_portrait">
					<img src="../assets/img/Collection.png" alt="" width="50">
				</div>
				<div class="user_name white">
					YYZiMig
				</div>
			</div>
			<div>
				<ShowBar style="width:30vw"  value="50" description="抵扣卷余额" />
				<ShowBar style="width:30vw" value="0/0" description="总消费次数" />
				<ShowBar style="width:30vw" value="0" description="油惠股" />
			</div>
		</div>
		<div>
			<div class="collect">
				<ItemBar mes="抵扣卷转赠">
					<van-icon name="balance-list-o" />
				</ItemBar>
				<ItemBar mes="附近油惠" color="#44c4ff" >
					<van-icon name="location-o" />
				</ItemBar>
				<ItemBar mes="油惠订单" color="#ff729a">
					<van-icon name="refund-o" />
				</ItemBar>
				<ItemBar mes="卡密核销" color="#ffb54c">
					<van-icon name="balance-list-o" />
				</ItemBar>
			</div>
			<div class="collect">
				<ItemBar mes="修改密码" color="#ff729a">
					<van-icon name="records" />
				</ItemBar>
				<ItemBar mes="客服热线 4008227886" color="#16dbcb" link="tel:4008227886">
					<van-icon name="service-o" />
				</ItemBar>
				<ItemBar mes="退出登陆" color="#44c4ff"  link="/">
					<van-icon name="cross" />
				</ItemBar>
			</div>
			<div style="height: 58px;"></div>
		</div>
		
	</div>
</template>

<script>
	import ShowBar from "../components/ShowBar.vue";
	import ItemBar from "../components/ItemBar.vue";

	
	export default {
		name:"Home",
		methods:{
		
		},
		components:{
			ShowBar,
			ItemBar,
		}
	}
</script>

<style scoped="scoped">
	#Home{
		height: 100vh;
		overflow: scroll;
	}
	.user_info{
		display: flex;
		height: 60px;
		align-items: center;
		padding: 10px;
	}
	.user_portrait{
		width: 50px;
		height: 50px;
		border: 1px solid #FFFFFF;
		border-radius: 25px;
		overflow: hidden;
		box-sizing: border-box;
		overflow: hidden;
	}
	.user{
		background: url(https://fx.hongtaimingsheng.com/Public/App/img/head-bg.png) no-repeat top;	
		background-size: 100% 100%;
		padding: 5vw;
	}
	.user_name{
		flex-grow: 1;
		text-align: center;
		font-size: 16px;
		font-weight: bolder;
	}
	.collect{
		margin-top: 10px;
		user-select: none;
	}
</style>
