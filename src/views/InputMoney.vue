<template>
	<div id="InputMoney">
		
		<div class="tip">请告知加油工作人员，本次服务由团油提供</div>
		<div class="content">
			<div class="col">
				<div class="row tit">加油订单</div>
				<div class="row">
					<span>油站名称</span>
					<span>{{place}}</span>
				</div>
				<div class="row">
					<span>油号/油枪</span>
					<span>{{num}}/{{gun}}号枪</span>
				</div>
				<div class="row"  @click="isOpen = true">
					<div>
						<span>金额</span>
						<span class="place_hold" v-show="val.length==0">请输入消费金额</span>
						<span v-show="val.length !== 0" class="val place_hold">￥{{getVal}}</span>
					</div>
					<div>约{{howLiter}}升</div>
				</div>
			</div>
		</div>
    
		<div class="content" style="margin-top:10px;">
			<div class="col">
				<div class="row tit">加油优惠</div>
				<div class="row">
					<span>优惠直降</span>
					<span class="val">￥{{discountMuch}}</span>
				</div>
				<div class="row">
					<!-- <div>
						<span>优惠卷</span>
						<span class="place_hold">与直降优惠不同享</span>
					</div>
					<div> -->
						<van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="isInput" style="padding: 13px 0px;"/>
						<van-popup v-model="showList" round position="bottom" style="height: 90%; padding-top: 4px;">
							<van-coupon-list :show-exchange-bar="false" :coupons="coupons" :chosen-coupon="chosenCoupon"  @change="onChange" @exchange="onExchange"/>
						</van-popup>
					<!-- </div> -->
				</div>
			</div>
		</div>
		<van-submit-bar label="合计待支付:" button-text="确认支付" :price="resMuch" @submit="show = true" />
		<KeyBoard  :isTrigged="isOpen" @send="enter" @delete="val.pop()" @confirm="isOpen= false"></KeyBoard>
		<van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
		
	</div>
</template>

<script>
	import KeyBoard from "../components/KeyBoard.vue"

	const coupon = [
		{
			available: 1,
			condition: '无法和直降\n优惠叠加使用',
			reason: '',
			value: 150,
			name: '一品油优惠券',
			startAt: 1489104000,
			endAt: 1514592000,
			valueDesc: '1.5',
			unitDesc: '元',
		},
		{
			available: 1,
			condition: '无法和直降\n优惠叠加使用',
			reason: '',
			value: 250,
			name: '油海田优惠券',
			startAt: 1489104001,
			endAt: 1514592003,
			valueDesc: '2.5',
			unitDesc: '元',
		},
		
	];

	
	
	export default {
		name:"InputMoney",
		computed:{
			getVal(){
				if(this.val.length == 0){
					return 0
				}
				return this.val.toString().split(",").join("");
			},
			howLiter(){
				let much  = parseInt(this.getVal);
				return (much / this.value)["toFixed"](1);
			},
			discountMuch(){
				if(this.chosenCoupon !== -1){
					return 0;
				}
				let much = this.div / this.value;
				return (much * parseInt(this.getVal) / 2)["toFixed"](2);
			},
			resMuch(){
				let much = parseInt(this.getVal) ;
				if(this.chosenCoupon !== -1){
					let res = this.coupons[this.chosenCoupon].value / 100;
					return (much - res) * 100;
				}else{
					return (much - this.discountMuch)*100;
				}
			}
		},
		data(){
			return {
				isOpen:false,
				val:[],
				show: false,
				actions: [
					{ name: '微信支付' },
					{ name: '支付宝支付' },
				],
				chosenCoupon: -1,
				coupons:coupon,
				showList:false
			}
		},
		components:{
			KeyBoard,
		},
		methods:{
			onSelect(item) {
				console.log(item);
				this.show = false;
			},
			onChange(index) {
				this.showList = false;
				this.chosenCoupon = index;
			},
			onExchange(code) {
				console.log(code);
				this.coupons.push(coupon);
			},
			isInput(){
				if(this.val.length !== 0){
					this.showList = true;
					this.isOpen = false;
				}else{
					alert("请输入的金额") 
				}
			},
			enter($event){
				if($event == "."&& this.val.indexOf(".") !==-1 ){
					return
				}else if(this.val.length <= 6 ){
					this.val.push($event)
				}
			}
		},
		props:["num","gun","value","div","place"]
		
	}
</script>

<style scoped="scoped">
	#InputMoney{
		height: 100vh;
		width: 100vw;
		position: absolute;
		background: #f2f2f2;
		z-index: 999999;
		font-size: 12px;
		color: #222;
	}
	.tip{
		height: 38px;
		background: #fffbd6;
		display: flex;
		font-size: 14px;
		font-weight: 400;
		color: #65453a;
		justify-content: center;
		font-family: PingFangSC-Regular,PingFang SC;
		align-items: center;
	}
	.content>.col{
		padding: 0 10px;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		background: #fff;
	}
	
	.col>.row{
		width: 100%;
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #e8e8e8;
		display: flex;
		justify-content: space-between;
	}
	
	.col>.row:nth-last-of-type(1){
		border-bottom: none;
	}
	
	.tit{
		font-weight: 600;
		font-family: PingFangSC-Semibold;
		font-size: 14px;
		justify-content: flex-start!important;
	}
	.tit:before{
		background-color: #f00;
		content: "";
		padding: 2px;
		margin-right: 4px;
		height: 10px;
		position: relative;
		top: 18px;
	}
	.place_hold{
		color:#bdbdbd;
		margin-left: 20px;
		height: 100%;
		display: inline-block;
		font-size: 14px;
	}
	.val{
		color: rgb(227, 25, 55);
		font-size: 16px;
		font-weight: 800;
	}
	
</style>
