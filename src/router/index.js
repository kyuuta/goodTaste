import Vue from 'vue'
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);


const advertisement = _import("advertisement/advertisement"); 			// 广告
const NotFound = _import('notFound/notFound');				    	    // 404


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
