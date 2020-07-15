<template>
	<div class="taber" ref="panel">
		<ul class="nav" ref="nav">
			<li @click="tap" v-for="(v,i) in indexs" :key="i" :class="i == index ? alive:''" :data-index="i">{{v}}</li>
		</ul>
		
		<div class="line_bar"  :style="position"></div>
		<div class="list" ref="list">
			<slot ></slot>
		</div>
	</div>
</template>

<script>
	import swiper from "../assets/js/swiper.js";
	export default {
		name:"Taber",
		props:{
			indexs:{
				type:Array,
				default:()=>[1,2,3,4],
				bar:'',
				length:""
			}
			
		},
		computed:{
			position(){
				return "left:" + this.index * 25 +"vw"
			}
		},
		data(){
			return{
				index:0,
				alive:"alive"
			}
		},
		methods:{
			tap(e){
				let index  = e?.currentTarget?.dataset.index ?? e;
				this.$refs.list.children[this.index].classList.remove("screen")
				this.$refs.list.children[index].classList.add("screen")
				this.index = index;
			},
		},
		mounted(){
			
			this.length = this.$refs.nav.children.length;
	
			let swiperBar  = new swiper(this.$refs.panel,90,()=>{
				if((this.index + 1) == this.length){
					this.tap(0)
				}else{
					this.tap(this.index+1);
				}
				
			},()=>{
				if((this.index - 1) == -1){
					this.tap(this.length - 1)
				}else{
					this.tap(this.index-1);
				}
			});
			this.bar = swiperBar;
		},
		beforeDestroy(){
			this.bar.Distroy();
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
	}
	
	.screen{
		opacity: 1;
	}
	.alive{
		color: #05BBFC;
	}
</style>
