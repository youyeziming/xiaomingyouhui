<template>
	<div id="easyput">
		<div class="header">
			<img src="https://img.ejiayou.com/uploadPic/Image/2019/07/1562058049309.jpg" alt="">
			<div>{{place}}</div>
		</div>
		<div class="article">
			<div>
				<img width="18" src="http://img.ejiayou.com/activity/pages/ejiayoupay/img/icon_oilGun.png" alt="">
				<span style="margin-left: 5px;">油枪号</span>
			</div>
			<div class="input_num">
				<span class="ded">{{gun}}</span>
				<span class="des">{{num}}号汽油</span>
			</div>
			
			<div>
				<img width="18" src="http://img.ejiayou.com/activity/pages/ejiayoupay/img/icon_oilGun.png" alt="">
				<span style="margin-left: 5px;">加油金额</span>
			</div>
			
			<div class="input_num" :class="isOpen?'foucs':null"  @click="isOpen = true">
				<span class="ded" >{{getVal}}</span>
				<span class="des">约{{howLiter}}L</span>
			</div>
		</div>
		
		<div class="article">
			<div class="des_yh" style="border-bottom: 1px solid #e7e7e7;">
				<span>选择优惠卷</span>
				<span>0张
					<van-icon name="arrow" style="position: relative;top: 2px;" />
				</span>
			</div>
			<div class="des_yh">
				<span>合计优惠</span>
				<span class="val">￥{{discountMuch}}</span>
			</div>
		</div>
		
		<div class="sum">
			<div>
				<span>合计￥</span>
				<span>{{resMuch}}</span>
			</div>
			<div class="submit" :class="getVal !== 0 ? 'alive_btn' :null" @click="isDone">确认金额</div>
		</div>
		<KeyBoard  :isTrigged="isOpen" @send="enter" @delete="val.pop()" @confirm="isOpen= false"></KeyBoard>
		<van-action-sheet v-model="show" :actions="actions" @select="show = false;" />
	</div>
</template>

<script>
	import KeyBoard from "../components/KeyBoard.vue"
	export default {
		name:"EasyPut",
		data(){
			return{
				isOpen:false,
				val:[],
				actions: [
					{ name: '微信支付' },
					{ name: '支付宝支付' },
				],
				show:false
			}
		},
		methods:{
			
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
			},
			isDone(){
				if(this.val.length !== 0)
					this.show=true
			}
			
		},
		components:{
			KeyBoard,
			
		},
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
				let much = this.div / this.value;
				return (much * parseInt(this.getVal) / 2)["toFixed"](2);
			},
			resMuch(){
				let much = parseInt(this.getVal) ;
				return (much - this.discountMuch);
			}
		},
		
		
		props:["num","gun","value","div","place"]
	}
</script>

<style scoped="scoped">
	.des_yh:active{
		background-color: #f2f2f2;
	}
	
	.alive_btn{
		background-color: #FFA500 !important;
		color: #fff !important;
	}
	.submit{
		background: rgb(221, 221, 221);
		color: rgb(153, 153, 153);
		width: 80px;
		height: 40px;
		font-size: 14px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 12px;
		font-weight: bold;
	}
	
	.sum{
		position: fixed;
		height: 50px;
		padding: 0 12px;
		background: #fff;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 12;
	}
	.val{
		color: #f00;
	}
	
	#easyput{
		height: 100vh;
		width: 100vw;
		position: absolute;
		background: #efefef;
		font-weight: bolder;
		z-index: 99;
	}
	.des_yh{
		justify-content: space-between;
		height: 52px;
		align-items: center;
		font-weight: 400;
	}
	
	.header{
		display: flex;
		padding: 10px;
		background-color: #fff;
		align-items: center;
	}
	.header>img{
		width: 25px;
		height: 25px;
		margin-right: 12px;
		border-radius: 2px;
	}
	.article{
		padding: 10px;
		background-color: #fff;
		margin-top: 10px;
	}
	
	.article>div{
		display: flex;
		position: relative;
	}
	.input_num{
		height: 45px;
		box-sizing: border-box;
		border-radius: 12px;
		margin-top: 5px;
		margin-bottom: 15px;
		align-items: center;
		justify-content: center;
		border:2px solid #efefef;
	}
	.des{
		font-size: 12px;
		color: #ffa500;
		position: absolute;
		right: 10px;
	}
	.ded{
		font-size: 18px;
	
		text-align: center;
		color: #000000;
	}
	.foucs{
		border:2px solid #ffa500;
	}
</style>
