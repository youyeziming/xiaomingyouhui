<template>
	<div class="taber">
		
		<ul class="nav">
			<li @click="tap" v-for="(v,i) in indexs" :key="i" :class="i == index ? alive:''" :data-index="i">{{v}}</li>
		</ul>
		
		<div class="line_bar" ref="lineBar"></div>
		<div class="list" ref="list">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Taber",
		props:{
			indexs:Array,
			default:()=>[1,2,3,4]
		},
		data(){
			return{
				index:0,
				alive:"alive"
			}
		},
		
		methods:{
			tap(e){
				let index  = e.currentTarget.dataset.index;
				
				this.$refs.lineBar.style.left = index * 25 +"vw"
				this.$refs.list.children[this.index].classList.remove("screen")
				this.$refs.list.children[index].classList.add("screen")
				this.index = index;
			}
		},
		mounted(){
			
		}
		
		
	}
</script>

<style scoped="scoped">
	.nav{
		display: flex;
		background-color: #fffff0;
		height: 36px;
		align-content: center;
		position: fixed;
		width: 100vw;
	}
	.nav>li {
		background-color: #ffffff;
		width: 25vw;
		text-align: center;
		height: 100%;
		line-height: 36px;
	}
	.line_bar{
		height: 3px;
		width: 25vw;
		position: fixed;
		top: 36px;
		background-color: #05BBFC;
		z-index: 499;
		transition: left 200ms;
		left: 0;
	}
	
	.screen{
		opacity: 1;
	}
	.alive{
		color: #05BBFC;
	}
</style>
