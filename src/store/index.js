import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count:5,
		content:[
			
		],
		fuels:[
			
		]
		
	},
	mutations: {
		SETDATA(state,property){
			state[property.per] = property.value;
		}
	},
	actions: {
		loadData({commit}){
			let xhr  = new XMLHttpRequest();
			xhr.open("GET","/data.json");
			xhr.send();
			xhr.onload = ()=>
			{
				commit("SETDATA",{per:"content",value:JSON.parse(xhr.response)});
			}
		},
		loadFuel({commit}){
			let xhr  = new XMLHttpRequest();
			xhr.open("GET","/fuels.json");
			xhr.send();
			xhr.onload = ()=>
			{
				commit("SETDATA",{per:"fuels",value:JSON.parse(xhr.response)});
			}
		}
		
	},
	getters:{
		getFuels(state){
			return state.fuels;
		},
		getContent(state){
			return state.content;
		}
	},
	modules: {
	}
})
