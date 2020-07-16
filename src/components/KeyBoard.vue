<template>
	<div class="keyboard" :class="isTrigged ? 'trigged' : null ">
		<div class="key_group">
			<div class="key_number">
				<div @click="send(1)">1</div>
				<div @click="send(2)">2</div>
				<div @click="send(3)">3</div>
				<div @click="send(4)">4</div>
				<div @click="send(5)">5</div>
				<div @click="send(6)">6</div>
				<div @click="send(7)">7</div>
				<div @click="send(8)">8</div>
				<div @click="send(9)">9</div>
				<div @click="send(0)" style="width:50vw;">0</div>
				<div @click="send('.')">.</div>
			</div>
			<div class="func_key">
				<div class="delete" @click="del">
					<van-icon name="arrow-left" size="20"/>
				</div>
				<div class="confirm" @click="confirm">确定</div>
			</div>
		
		</div>
	</div>
</template>

<script>
	export default {
		name:"KeyBoard",
		data(){
			return{
				
			}
		},
		methods:{
			confirm(){
				this.$emit("confirm");
			},
			send(e){
				this.$emit("send",e);
			},
			del(){
				this.$emit("delete")
			}
			
		},
		props:{
			isTrigged:{
				type:Boolean,
				default:true
			},
			
		}
		
		
	}
</script>

<style scoped="scoped">
	.key_group{
		display: flex;
	}
	.keyboard{
		position: fixed;
		width: 100vw;
		background-color: #f6f6f6;
		font-size: 16px;
		font-weight: 600;
		bottom: -280px;

		transition: bottom 200ms;
		z-index: 9999999;
	}
	
	.trigged{
		bottom: 0px;
		display: block;
	}
	
	.key_number{
		display:inline-flex;
		flex-wrap: wrap;
		width: 75vw;
	}
	.key_number>div{
		width: 25vw;
		height: 40px;
		line-height: 40px;
		
	}
	.key_number>div, .func_key>div{
		text-align: center;
		border-top: 1PX solid #ddd;
		border-right: 1PX solid #ddd;
		box-sizing: border-box;
	}
	
	.key_number>div:active,.func_key>div:active{
		color: #fff;
		background-color: #ddd;
	}
	
	.func_key>div{
		width: 25vw;
		height: 80px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.delete{
		height: 80px;
	}
	.confirm{
		background-color: #df2a1d;
		color: #fff;
	}
	
</style>
