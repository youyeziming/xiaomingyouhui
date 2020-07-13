<template>
	<div id="Card">
		<h3>核销卡密</h3>
		<ul>
			<Input label="卡号" description="请输入你的卡号"  v-model="cardID"/>
			<hr style=" margin: 0;border-style: ridge;">
			<Input label="卡密" description="请输入你的卡密" type="password"  v-model="cardPW"/>
		</ul>
		<button @click="register" class="btn white">确定</button>
	</div>
</template>

<script>
	import Input from "../components/Input.vue"
	export default {
		name:"Card",
		
		data(){
			return{
				cardID:"",
				cardPW:""
			}
		},
		methods:{
			//注册
			register(){
				
			}
		},
		components:{
			Input
		}
	}
</script>

<style scoped="scoped">
	
	
	
	ul{
		padding: 0 10px;
		background-color: #fff;
		margin-bottom:10px;
	}

	
	.btn{
		width: 100%;
		background: #05bbfc;
		border: 1px solid deepskyblue;
		height: 32px;
	}
</style>
