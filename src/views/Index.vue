<template>
  <div class="index">
	<AlterMessage :isOpen="open" @changeOpen="open = false" des="选择油箱号">
		<SelectList :click="changeYH" title="汽油" :list="gasolines"/>
		<SelectList :click="changeYH" title="柴油" :list="diesels"/>
		<SelectList :click="changeYH" title="天然气" :list="gas"/>
	</AlterMessage>
	<div id="filter">
		<div @click="open = true">{{filterValue}}国家价:5.2元/升
			<em style="position: relative;top: 2px;"><van-icon name="add-o" /></em>
		</div>
		<div>综合排序</div>
	</div>
	<div id="yhlist" >
		<YhItem v-for="(v,i) in search(filterValue)" :type="filterValue" :datas="v" :index="i" :key="i+'YYZiMig'"/>
	</div>
	
  </div>
</template>

<script>
	
import YhItem from "../components/YhItem.vue";
import AlterMessage from "../components/AlterMessage.vue";
import SelectList from "../components/SelectList.vue";
import {mapState} from "vuex";
 

export default {
	name: 'Index',
	data(){
		return {
			open:false,
			filterValue:"92#",
			gasolines:["92#","95#","98#","101#"],
			diesels:["-40#","-35#","-30#","-20#","-10#","国四0#","0#","-1001#","-2001#","-3501#"],
			gas:["CNG","LNG"],
			alive:'',
		}  
	},
	computed:{
		...mapState({
			content: state => state.content
		})
	},
	methods:{
		changeYH(v,event){
			this.filterValue = v;
			this.open = false;
			this.alive.classList.remove("alive");
			this.alive = event.target;
			this.alive.classList.add("alive");
		},
		funcBar(e){
			e.stopPropagation();
		},
		search(parame){
			let value = this.content.filter((v)=>{
				return v.type == parame;
			})
			if(value[0] !== undefined){
				return value[0].content; 
			}else{
				return [{isOpen:true}];
			}
		},
	},
	components:{
		YhItem,
		AlterMessage,
		SelectList
	},
	mounted(){
		this.alive = document.querySelector(".selectitem");
		this.alive.classList.add("alive");
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
		z-index: 10;
	}
	#filter>div{
		width: 50vw;
		text-align: center;
		line-height: 42px;
	}
	
	#filter>div:active{
		background-color: #91ebfd;
		color: #fff;
	}
	
	#yhlist
	{
		width: 100vw;
		top: 42px;
		position: absolute;
		padding-top: 10px;
		margin: 0px 0 44px 0;
	}
	.index{
		height: 100vh;
		position: absolute;
		width: 100vw;
		overflow: scroll;
	}
	
</style>