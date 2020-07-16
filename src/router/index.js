import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Card from '../views/Card.vue'
import Home from '../views/Home.vue'
import Login from "../views/Login.vue"
import Fuel from "../views/Fuel.vue"
import InputMoney from "../views/InputMoney.vue"
import Platform from "../views/Platform.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/inputmoney',
    name: 'InputMoney',
    component: InputMoney,
	props:({query})=>{
		return {
			gun:query.gun,
			num:decodeURIComponent(query.num),
			value:query.value,
			div:query.div,
			place:query.place
		}
	}
  },
  {
	path:"/",
	redirect:"/index"
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/card',
    name: 'Card',
    component: Card
  },
  {
    path: '/login',
    name: 'Login',
    component:Login 
  },
  {
	path: '/fuel/:index',
	name: 'Fuel',
	component:Fuel,
	props:({params,query})=>({index:params.index,type:decodeURIComponent(query.type)})
  },
  {
	path: '/platform/:index',
	name: 'Platform',
	component: Platform,
	props:({params,query})=>({index:params.index,type:decodeURIComponent(query.type)})
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


/* router.beforeEach(function(to,from,next){

	if(to.path == "/login" || to.path.match("/fuel")){
		next();
	}
	
	
	if(to.path == "/"||to.path== "/index"){
		next();
	}

	if(to.path !=="/index" && !(to.path.match("/fuel"))  && !!window.login == false){
		next("/login?redirect="+to.path);
		console.log(to.path);
	}
	
	if(window.login){
		next();
	}
}); */

/* router.afterEach(function(to,from){
	
}) */


export default router
