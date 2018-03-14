import Vue from 'vue';

import loadingPrompt from '@/loadingPrompt';
import Modal from '@/modal';

Vue.$loadingPrompt = Vue.prototype.$loadingPrompt = loadingPrompt;
Vue.component(Modal.name, Modal);