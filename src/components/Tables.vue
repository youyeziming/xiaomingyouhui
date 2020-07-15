<template  v-slot={alive} >
	<div class="tables">
		<div class="des">{{des}}</div>
		<ul class="nav" ref="nav" >
			<slot name="index" @click="tap"></slot>
		</ul>
		<div class="list" ref="list">
			<slot name="content" ></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Tabers",
		props:{
			defaultStyle:{
				type:Object,
			},
			des:{
				type:String
			},
			wat:{
				type:Boolean
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
				let index  = e.currentTarget.dataset.index;
				this.$emit("sc",e.currentTarget.innerText.trim());
				
				this.nav[this.index].classList.remove("alive");
				this.nav[index].classList.add("alive");
				if(this.list.length !== 0){
					this.list[this.index].classList.remove("screen");
					this.list[index].classList.add("screen");
				}
				this.index = index;
				
			}
		},
		mounted(){
			this.nav = this.$refs.nav.children;
			this.list = this.$refs.list.children;

			for(let i =0;i < this.nav.length;i++)
			{
				this.nav[i].onclick = this.tap;
			}
		}
	}
</script>

<style scoped="scoped">
	.tables{
		position: relative;
	}
	.nav{
		display: flex;
		height: 36px;
		align-content: center;
	}
	.nav>li {
		background-color: #ffffff;
		text-align: center;
	}
	.screen{
		display: block!important;
		
	}
	.alive{
		background-color: #FF0000 !important;
	}
	.list>div{
		display: none;
	}
	.des{
		padding: 5px;
	}
</style>
