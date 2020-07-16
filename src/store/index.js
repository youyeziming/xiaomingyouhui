import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count:5,
		content:[
			
		],
		fuels:[
			
		],
		select:{
			
		}
		
		
	},
	mutations: {
		SETDATA(state,property){
			state[property.per] = property.value;
		},
	},
	actions: {
		loadData({commit}){
			axios.get('/data.json').then(res => {
				commit("SETDATA",{per:"content",value:res.data});
			})
		},
		loadFuel({commit}){
			axios.get('/fuels.json').then(res => {
				commit("SETDATA",{per:"fuels",value:res.data});
			})
		},
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
