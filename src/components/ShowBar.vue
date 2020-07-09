<template>
	<div class="showbar">
		<div class="showValue" >{{value}}</div>
		<div class="showDescription">{{description}}</div>
	</div>
</template>

<script>
	export default {
		name:"ShowBar",
		props:{
			value:{
				type:String,
				required:true
			},
			description:{
				type:String,
				required:true
			}
		}
	}
</script>

<style>
	.showbar{
		display: inline-block;
		color:#fff;
		font-size: 16px;
		text-align:center;
	}
</style>
