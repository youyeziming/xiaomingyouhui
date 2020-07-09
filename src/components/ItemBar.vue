<template>
	<p class="itembar">
		<a :href="link">
			<span class="icon" :style="'background:'+color">
			</span>
			<span class="des">
				{{mes}}
			</span>
			<span class="allow" v-if="allow">
				&gt;
			</span>
		</a>
	</p>
</template>

<script>
	export default{
		name:"ItemBar",
		props:{
			icon:{
				
			},
			mes:{
				type:String
			},
			allow:{
				type:Boolean,
				default:true
			},
			link:{
				type:String
			},
			color:{
				type:String,
				default:"#9dcd1b"
			}
		}		
		
	}
</script>

<style scoped="scoped">
	.itembar{
		padding: 10px;
		background: #fff;
		font-size: 16px;
	}
	.des{
		
	}
	.icon{
		display: inline-block;
		width: 28px;
		height: 28px;
		line-height: 44px;
		border-radius: 5px;
		margin-right: 5px;
	
	}
	.allow{
		float: right;
		font-family: " microsoft yahei","SimHei";
		position: absolute;
		right: 9px;
	}
	a{
		width: 100%;
		height: 100%;
		color: #000!important;
		display: flex;
		align-items: center;
	}
</style>
