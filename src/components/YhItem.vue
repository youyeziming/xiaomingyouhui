<template>
	<div class="yhitem">
		<div class="yh_info">
			<div class="dingdan" style="">
				<div class="place">
					<img src="https://static.czb365.com/1588062185117.jpg?x-oss-process=image/resize,m_lfit,h_200,w_200/format,png">
				</div>
				<div class="position_info">
					<p class="title">
						<a >大安石油大鸿加油站</a>
					</p>
					<p class="place_position">惠州市江北41号小区三环北路20号</p>
					<p class="value">
						<span >￥<em>4.85</em></span>
						<span style="padding-left: 10px;">降<em>0.47</em></span>
					</p>
				</div>
			</div>
			<div class="position">
				<p style="text-align: right;">
					<img src="../assets/img/Collection.png" alt="" width="20px">
				</p>
				<p class="place_navigation">
					<a style="color: #fff;">导航</a>
				</p>
				<p >距您4.12KM</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"YhItem",
		props:[]
	}
</script>

<style scoped="scoped">
	.yhitem{
		padding: 5px 0;
		width: 100vw;
		margin: 0 0 10px 0;
		background-color: #fff;
	}
	.yh_info{
		display: flex;
		justify-content: space-around;
	}
	.place{
		padding:0 5px;
	}
	.place>img{
		width:90px;
		height: 90px;
	}
	.position_info>p{
		padding: 5px;
	}
	
	.title{
		font-size: 0.8em;
		color: #00f;
		font-weight: bold;
		font-style: normal;
	}
	.place_position{
		font-size: 0.8em;
	}
	.dingdan{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	em{
		font-weight: bold;
		font-style: normal;
		font-size: 14px;
		color: #FF0000;
		padding-left: 5px;
	}
	.place_navigation
	{
		background-color: #26b1fe;
		text-align: center;
		padding: 5px;
		margin: 5px 0;
	}
	.navigation{
		color: #fff;
	}
	.position{
		min-width: 70px;
		padding: 5px;
	}
	.value{
		white-space: nowrap;
	}
</style>
