<template>
	<div id="Order">
		<Taber :indexs="indexs">
			<Container class="screen" >
				<div>
					<p>时间：20/07/03 16:12:59</p>
					<p>事件：新油惠系统注册奖励</p>
					<p>抵扣券数量：+50</p>
				</div>
			</Container>
			<Container>
				<div>
					<p>时间：20/07/03 16:12:59</p>
					<p>事件：新油惠系统注册奖励</p>
					<p>抵扣券数量：+50</p>
				</div>
			</Container>
			<Container>
				<p style="text-align: center;padding: 10px;">暂时无记录</p>
			</Container>
		</Taber>
	</div>
</template>

<script>
	import Taber from "../components/Taber.vue";
	import Container from "../components/Container.vue";
	
	export default {
		name:"Order",
		data(){
			return {
				indexs:["全部","收入","支出"]
			}
		},
		components:{
			Taber,
			Container
		}
	}
</script>

<style>
</style>
