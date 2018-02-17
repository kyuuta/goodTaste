import Vue from 'vue'
import App from './App'
import router from './router'

import '^config/config';

Vue.config.productionTip = false

window.vueObj = new Vue({
	router,
	render: h => h(App)
}).$mount('#app')