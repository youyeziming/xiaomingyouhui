<template>
	<div class="keyboard" :class="isTrigged ? 'trigged' : null ">
		<div class="key_group">
			<div class="key_number">
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
				<div>5</div>
				<div>6</div>
				<div>7</div>
				<div>8</div>
				<div>9</div>
				<div style="width:50vw;">0</div>
				<div>.</div>
			</div>
			<div class="func_key">
				<div class="delete">&lt;-</div>
				<div class="confirm">确定</div>
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
		props:{
			isTrigged:{
				type:Boolean,
				default:true
			}
		}
		
		
	}
</script>

<style scoped="scoped">
	.key_group{
		display: flex;
	}
	.keyboard{
		position: absolute;
		width: 100vw;
		background-color: #f6f6f6;
		font-size: 16px;
		font-weight: 600;
		bottom: -280px;
		display: none;
		transition: bottom 200ms;
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
		line-height: 80px;
	}
	.delete{
		height: 80px;
	}
	.confirm{
		background-color: #df2a1d;
		color: #fff;
	}
	
</style>
