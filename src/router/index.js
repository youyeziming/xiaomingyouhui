import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Card from '../views/Card.vue'
import Home from '../views/Home.vue'
import Login from "../views/Login.vue"
import Fuel from "../views/Fuel.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'Index',
    component: Index
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
	path: '/fuel',
	name: 'Fuel',
	component:Fuel
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach(function(to,from,next){
	/* if(to.path== "/fuelpage"){
		console.log(1)
		next();
	} */
	
	if(to.path == "/login"||to.path =="/fuel"){
		next();
	}
	console.log(to.path)
	
	if(to.path == "/"||to.path== "/index"){
		next();
	}
	
	if(to.path !=="/index" && to.path !=="/fuel"  && !window.login){
		next("/login");
	}
	
	if(window.login){
		next();
	}
});

/* router.afterEach(function(to,from){
	
}) */


export default router
