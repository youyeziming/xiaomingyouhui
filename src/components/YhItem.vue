<template>
	<div class="yhitem">
		<div class="yh_info" v-if="!datas.isOpen">
			<div class="dingdan" style="">
				<div class="place">
					<img :src="datas.img">
				</div>
				<div class="position_info">
					<p class="title">
						<a >{{datas.place}}</a>
					</p>
					<p class="place_position">{{datas.localtion}}</p>
					<p class="value">
						<span >￥<em>{{datas.value}}</em></span>
						<span style="padding-left: 10px;">降<em>{{datas.div}}</em></span>
					</p>
				</div>
			</div>
			<div class="position">
				<p style="text-align: right;">
					<img src="../assets/img/Collection.png" alt="" width="20px">
					<span class="commit" v-if="datas.commit">{{datas.commit}}</span> 
				</p>
				<p class="place_navigation">
					<a style="color: #fff;" :href="'/fuel/'+index+'?type='+encodeURIComponent(type)">导航</a>
				</p>
				<p >距您{{datas.site}}KM</p>
			</div>
		</div>
		<p style="padding: 5px 0px;text-align: center;margin: -5px 0 -5px 0;width: 100vw;background: #efefef;" v-if="datas.isOpen">附近暂无油站</p>
	</div>
</template>

<script>
	export default{
		name:"YhItem",
		data(){
			return {
				token:"N"
			}
		},
		props:{
			"datas":{
				type:Object,
				
			},
			"index":{
				type:Number
			},
			"type":{
				type:String
			}
		}
			

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
	.commit{
		position: relative;
		top: -5px;
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
		justify-content: flex-start;
		align-items: center;
		width: 350px;
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
		border-radius: 5px;
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
