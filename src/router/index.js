import Vue from 'vue'
import Router from 'vue-router';


const advertisement = () => import("%/advertisement"); 			// 广告
const NotFound = () => import('%/notFound');				    // 404


import routesHome from './home';


Vue.use(Router)

export default new Router({
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		if(!savedPosition) {
			const position = {};
			if(to.hash) position.selector = to.hash;
			if(to.matched.some(i => i.meta.scrollToTop)) {
				position.x = 0;
				position.y = 0;
			}
			return position;
		}
		return savedPosition;
	},
	routes: [
		{
			path: '/',
			redirect: 'advertisement'
		},
		{
			path: '/advertisement',
			component: advertisement
		},
		...routesHome,
		{
			path: '*',
			component: NotFound
		}
	]
})
