import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '^config/config';

import loadingPrompt from '@/loadingPrompt/index';


Vue.$loadingPrompt = Vue.prototype.$loadingPrompt = loadingPrompt;
Vue.prototype.$http = GLOBAL.network.request;


Vue.config.productionTip = false

window.vueObj = new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')