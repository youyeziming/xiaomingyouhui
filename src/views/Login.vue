<template>
	<div id="Login">
		<div style="padding: 15px;">
			<van-form @submit="onSubmit">
				<van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]"  />
				<van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码'}]"/>
				<div style="margin: 16px;">
				<van-button round block type="info" native-type="submit"> 提交 </van-button>
				</div>
			</van-form>
		</div>
	</div>
</template>

<script>
	
	export default {
		name:"Login",
		
		data(){
			return{
				username: '',
				password: '',
			}
		},
		methods:{
			onSubmit(){
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
