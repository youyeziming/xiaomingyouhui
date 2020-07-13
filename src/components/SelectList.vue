<template>
	<div class="selectlist">
		<div class="select_title">{{title}}</div>
		<div class="selectcollect">
			<a @click="click(v,$event)" class="selectitem" v-for="v in list" :key="v">{{v}}</a>
		</div>
	</div>
</template>

<script>
	export default {
		name:"SelectList",
		props:{
			list:{
				type:Array,
				required:true
			},
			title:{
				type:String,
			},
			click:{
				type:Function
			}
		}
	}
</script>

<style scoped="scoped">
	.select_title{
		padding: 5px;
	}
	.selectlist{
		padding-bottom: 10px;
		
	}
	.selectcollect{
		display: flex;
		width: 100%;
		flex-wrap: wrap;
	}
	.selectitem{
		color: #FFF;
		background: #26b1fe;
		line-height: 20px;
		padding: 6px 12px;
		margin: 3px;
		border-radius: 6px;
	}
	.alive{
		background:#f00;
	}
</style>
