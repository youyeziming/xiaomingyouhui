<template>
	<div id="Fuel" class="full_srceen">
		<h3>一键加油详情</h3>
		<div class="area_info">
			<div class="place_img">
				<img src="https://static.czb365.com/1588062185117.jpg?x-oss-process=image/resize,m_lfit,h_200,w_200/format,png">
			</div>
			<div>
				<p style="font-weight: 600; font-size: 16px;">大安石油大鸿加油站</p>
				<p style="font-size: 14px;">惠州市江北41号小区三环北路20号</p>
				<p ><span class="value_mini">￥4.80</span></p>
			</div>
		</div>
		<div class="collect">
			<SelectList  title="选择商品" :list="fuels"/>
			<SelectList  title="选择油号" :list="fuelnum"/>
			<SelectList  title="选择油枪" :list="fuelgun"/>
		</div>
		<div class="quick_fuel">
			<img style="width: 100%;" src="https://fx.hongtaimingsheng.com/Public/Xmzc/img/oneoil.gif" alt="">
		</div>
		<key-board></key-board>
	</div>
</template>

<script>
	import SelectList from "../components/SelectList.vue"
	import KeyBoard from "../components/KeyBoard.vue"
	export default {
		name:"Fuel",
		data(){
			return {
				fuels:["柴油","汽油"],
				fuelnum:["92#","95#"],
				fuelgun:[2,3,6,7,5,12,34]
			}
		},
		components:{
			SelectList,
			KeyBoard
			
		},
		
	}
</script>

<style scoped="scoped">
	.quick_fuel,
	.collect{
		margin-top: 10px;
		user-select: none;
		background-color: #fff;
		padding: 0 10px;
	}
	#Fuel{
		background: #efefef;
	}
	.area_info{
	
		padding: 10px 5px 10px 5px;
		background-color: #FFFFFF;
		display: flex;
		
	}
	.area_info img{
		width: 62px;
		height: 62px;
		padding: 5px;
	}
	.area_info p{
		padding: 3px;
		color: #000000;
	}
	.area_info .place_img{
		display: flex;
		align-items: center;
	}
	.value_mini{
		background-color: #f32;
		padding: 2px;
		border-radius: 4px;
		color: #fff;
	}
	@media (max-width:260px) {
		.place_img{
			margin: 0 auto;
			width: 62px;
		}
		.area_info{
			display: block;
			text-align: center;
		}
	}
</style>
