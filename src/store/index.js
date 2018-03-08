import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
// import * as modules from "./modules/";

Vue.use(Vuex);


const state = {
    cartList: [],
    config: {
        keepAlivePage: ['test'],
        scrollPosition: {
            x: 0,
            y: 0
        }
    }
}

export default new Vuex.Store({
    actions,
    getters,
    mutations,
    state
})