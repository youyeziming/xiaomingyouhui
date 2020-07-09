<template>
		<div class="container">
			<slot></slot>
		</div>
</template>

<script>
	export default {
		name:"Container",
	}
</script>

<style>
	.container{
		position: absolute;
		top: 36px;
		left: 0;
		right: 0;
		overflow: scroll;
		bottom: 48px;
		opacity: 0;
		transition: all 500ms;
	}
	.container>div{
		background-color: #fff;
		padding: 10px;
		margin:0 0 10px 0;
	}
	.container>div>p{
		padding: 5px;
	}
</style>
