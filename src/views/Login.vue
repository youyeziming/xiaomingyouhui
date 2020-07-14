<template>
	<div id="Login">
		<div style="padding: 15px;">
			<ul>
				<Input label="账号" description="手机号码"  v-model="ID"/>
				<hr style=" margin: 0;border-style: ridge;">
				<Input label="密码" description="密码" type="password"  v-model="PW"/>
				<hr style=" margin: 0;border-style: ridge;">
			</ul>
			<button @click="login" class="btn white">登录</button>
		</div>
	</div>
</template>

<script>
	import Input from "../components/Input.vue"
	
	
	export default {
		name:"Login",
		
		data(){
			return{
				ID:"",
				PW:""
			}
		},
		methods:{
			login(){
				//模拟登录
				window.login = true;
				alert("登录成功");
				this.$router.replace("/");
				/* if(this.$route.query.redirect==undefined){
					this.$router.replace("/");
				}
				
				this.$router.replace(this.$route.query.redirect); */
				
			}
		},
		components:{
			Input
		},
		mounted(){
			if(window.login){
				this.$router.replace("/");
			}
		}
	}
</script>



<style scoped="scoped">
	#Login{
		height: 100vh;
		width: 100vw;
		position: absolute;
		background: #fff;
		z-index: 999999;
	}
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
