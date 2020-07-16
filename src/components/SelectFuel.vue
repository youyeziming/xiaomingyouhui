<template>
	<div class="SelectFuel">
		<div class="des">
			实时油价
		</div>
		<div class="select_val">
			<div style="width: 10vw;" @click="show = true">
				{{actions[index].name}}
				<img width="12px" src="http://img.ejiayou.com/activity/pages/platform/soulList/img/open.png" alt="">
			</div>
			<div class="show_bs" v-for="(v,i) in actions" :key="v.name" v-show="i == index ">
				<div>
					<div class="showbar" style="color: #000000;">
						<div class="showValue" >
							￥<span>{{v.val}}</span>
						</div>
						<div class="show_des">
							易加油优惠价
						</div>
					</div>
				</div>
				<div>
					<div class="showbar">
						<div class="showValue" >
							￥
							<span>{{v.fuel_val}}</span>
						</div>
						<div class="show_des">
							油站价
						</div>
					</div>
				</div>
				<div>
					<div class="showbar">
						<div class="showValue" >
							￥
							<span>{{v.gval}}</span>
						</div>
						<div class="show_des">
							国家价
						</div>
					</div>
				</div>
			</div>
		</div>
		<van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
	</div>
</template>

<script>

	export default {
		name:"SelectFuel",
		data(){
			return {
				show:false,
				actions:[
					{name:"92#",val:"4.91",fuel_val:"5.1",gval:"5.3"},
					{name:"32#",val:"4.90",fuel_val:"5.2",gval:"5.3"}
				],
				index:0,
			}
		},
		methods:{
			onSelect(action,index){
				console.log(action);
				this.show = false;
				this.index = index;
			}
		},
		props:["list"]
	}
</script>

<style scoped="scoped">
	.SelectFuel{
		background-color:#FFFFFF;
		margin:12px 0px;
		padding: 10px;
	}
	.des{
		color:#313131;
		font-size: 14px;
		font-weight: bold;
		padding-bottom: 10px;
	}
	.select_val{
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.select_val>div{
		text-align: center;
	}
	.show_des{
		font-size: 12px;
		margin-left: 10px;
	}
	.showValue>span{
		font-size:16px;
		font-weight: bolder;
	}
	.show_bs{
		width: 90vw;
		display: flex;
		justify-content:space-around;
	}
</style>
