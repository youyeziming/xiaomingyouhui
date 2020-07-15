<template>
	<div id="Fuel" class="full_srceen">
		<h3>一键加油详情</h3>
		<div class="area_info">
			<div class="place_img">
				<img :src="this.searchContent(type,index).img" >
			</div>
			<div>
				<p style="font-weight: 600; font-size: 16px;">{{this.searchContent(type,index).place}}</p>
				<p style="font-size: 14px;">{{this.searchContent(type,index).localtion}}</p>
				<p ><span class="value_mini">{{this.searchContent(type,index).value}}</span></p>
			</div>
		</div>
		<div class="collect">
			<Tables des="选择商品"  @sc="fuelType = $event" v-if="search(type,index)">
				<li slot="index" v-for="(f,fi) in search(type,index)" :data-index="fi" :key="f.type+anchor" :class="fi == 0 ? alive : null" :style="select_li">{{f.type}}</li>
				<div slot="content" :class="fni == 0?screen:null" v-for="(fn,fni) in search(type,index)" :key="fni+anchor" >
					<Tables des="选择油号" @sc="fuelNum = $event">
						<li slot="index"  v-for="(n,ni) in fn.content" :data-index="ni" :class="ni==0?'alive':null" :style="select_li" :key="ni+anchor">{{n.type}}</li>
						<div slot="content" :class="fgi == 0?screen:null" v-for="(fg,fgi) in fn.content" :key="fgi">
							<Tables des="选择油枪" @sc="fuelGun = $event">
								<li slot="index" v-for="(fgs,fgsi) in fg.content"  :class="fgsi==0 ? alive:null" :style="select_li" :key="fgsi+anchor" :data-index="fgsi" >{{fgs}}</li>
							</Tables>
						</div>
					</Tables>
				</div>
			</Tables>
		</div>
		
		<div class="quick_fuel" >
			<router-link :to="'/inputmoney?value='+ this.searchContent(type,index).value +'&div='+this.searchContent(type,index).div +' &place='+ this.searchContent(type,index).place +' &num='+ encodeURIComponent(fuelNum)+ '&gun=' + fuelGun">
				<img style="width: 100%;" src="https://fx.hongtaimingsheng.com/Public/Xmzc/img/oneoil.gif" alt="">
			</router-link>
		</div> 
	</div>
</template>

<script>

	import Tables from "../components/Tables.vue"
	import {mapGetters} from "vuex";
	import {mapState} from "vuex";
	export default {
		name:"Fuel",
		computed:{
			...mapGetters(["getFuels","getContent"]),
			
			...mapState({
				"toFuels":state=>state.fuels
			})
		},
		data(){
			return {
				select_li:{
					margin: "3px",
					color: "#FFF",
					"lineHeight": "20px",
					padding: "6px 12px",
					background: "#26b1fe",
					"borderRadius": "6px",
				},
				alive:"alive",
				screen:"screen",
				anchor:"YYZiMig",
				info:'',
				fuelType:"柴油",
				fuelNum:"95#",
				fuelGun:"2",
			}
		},
		methods:{
			search(parame,index){
				let value = this.getFuels.filter((v)=>{
					return v.type == parame;
				})
				return value[0]?.content[index]; 
			},
			searchContent(parame,index){
				let value = this.getContent.filter((v)=>{
					return v.type == parame;
				})
				return value[0]?.content[index];
			},
			
		},
		
		mounted(){
			this.fuelType = this.search(this.type,this.index)[0].type;
			this.fuelNum = this.search(this.type,this.index)[0].content[0].type;
			this.fuelGun = this.search(this.type,this.index)[0].content[0].content[0];
			
			this.info = this.searchContent(this.type,this.index);
			/* let {div,place,value} = this.info;
			let values = {div,place,value};
			this.$store.commit("SETDATAS",values); */
			
		},
		
		props:["type","index"],
		components:{
			Tables
		},
	}
</script>

<style scoped="scoped">
	.quick_fuel,
	.collect{
		margin-top: 10px;
		user-select: none;
		background-color: #fff;
		padding: 0 10px;
	}
	#Fuel{
		background: #efefef;
	}
	.area_info{
		padding: 10px 5px 10px 5px;
		background-color: #FFFFFF;
		display: flex;
	}
	.area_info img{
		width: 62px;
		height: 62px;
		padding: 5px;
	}
	.area_info p{
		padding: 3px;
		color: #000000;
	}
	.area_info .place_img{
		display: flex;
		align-items: center;
	}
	.value_mini{
		background-color: #f32;
		padding: 2px;
		border-radius: 4px;
		color: #fff;
	}
	@media (max-width:260px) {
		.place_img{
			margin: 0 auto;
			width: 62px;
		}
		.area_info{
			display: block;
			text-align: center;
		}
	}
</style>
