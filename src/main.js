import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import '^config/config';
import '^config/base-components';

Vue.prototype.$http = GLOBAL.network.request;
Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue(); // 事件中心

Vue.config.productionTip = false

window.vueObj = new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')