<template>
  <div class="index">
	<div id="filter">
		<div>国家价:元/升</div>
		<div>综合排序</div>
	</div>
	<div id="yhlist" @scroll="funcBar">
		<YhItem v-for="i in 20" :key="i"/>
	</div>
  </div>
</template>

<script>
import YhItem from "../components/YhItem.vue";

export default {
  name: 'Index',
  methods:{
	funcBar(e){
		e.stopPropagation();
	}
  },
  components:{
	YhItem
  },
  beforeRouteEnter(to,from,next){
	console.log("router alright enter")
	next();
  }
}
</script>

<style scoped="scoped">
	#filter{
		display: flex;
		justify-content: space-around;
		height: 42px;
		background-color: #fff;
		position: fixed;
	}
	#filter>div{
		width: 50vw;
		text-align: center;
		line-height: 42px;
	}
	#yhlist
	{
		width: 100vw;
		top: 42px;
		position: absolute;
		bottom: 50px;
		overflow-x: hidden;
		overflow-y: scroll;
		padding-top: 10px;
	}
	.index{
		
		height: 100vh;
		position: absolute;
		width: 100vw;
	}
	
</style>