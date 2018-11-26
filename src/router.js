import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'Home',
			// lazy load
			component: () => import(/* webpackChunkName: "about" */ './components/Home/index.vue'),
			meta: { skipAuth: true }
		},
		{
			path: '/use',
			name: 'Use',
			// lazy load
			component: () => import(/* webpackChunkName: "about" */ './components/Use/index.vue')
		},
		{
			path: '/develop',
			name: 'Develop',
			// lazy load
			component: () => import(/* webpackChunkName: "about" */ './components/Develop/index.vue')
		},
		{
			path: '/communicate',
			name: 'Communicate',
			// lazy load
			component: () => import(/* webpackChunkName: "about" */ './components/Communicate/index.vue')
		}
	]
})
