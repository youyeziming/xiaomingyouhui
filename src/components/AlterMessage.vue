<template>
	<div class="altermessage" v-show="isOpen">
		<div class="mark"></div>
		<div class="alterbody">
			<div class="title">
				<div class="des">{{des}}</div>
				<div class="des close" @click="close">×</div>
			</div>
			<div class="content">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"AlterMessage",

		props:{
			isOpen:{
				type:Boolean,
				default:false,
			},
			des:{
				type:String
			}
		},
		methods:{
			close(){
				this.$emit("changeOpen",false);
			}
		}
	}
</script>

<style scoped="scoped">
	.close{
		font-size: 24px;
	}
	.close:active{
		color: #f00;
	}
	.alterbody{
		top: 50%;
		width: 100vw;
		position: absolute;
		transform: translateY(-50%);
	}
	.mark{
		width: 100vw;
		height: 100vh;
		background-color: #444;
		opacity: 0.75;
	
	}
	.altermessage{
		z-index: 1000;
		position: fixed;
	}
	.content{
		background-color: #fff;
		padding: 10px;
	}
	.title{
		display: flex;
		justify-content: space-between;
		height: 42px;
		align-items: center;
		background:#f8f8f8;
		box-sizing: border-box;

		border-bottom: 1px solid #e8e8e8;

		opacity: 1;
	}
	.des{
		padding: 0 15px;
	}
</style>
