import Vue from 'vue'
import App from './App'
import router from './router'


import 'normalize.css';

// import './config/rem'					// rem转换
import './config/config'				// fastClick click => touch

Vue.config.productionTip = false

new Vue({
	router
}).$mount('#app')