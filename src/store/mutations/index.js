import {
    INIT_CART,
    ADD_CART,
    REDUCE_CART,
    CLEAR_CART,
    IS_IPHONEX
} from '../mutation-types';

import {
    setStorage,
    getStorage
} from '^config/utils';

export default {
    [ADD_CART](state, food) {
        const cartList = state.home.cartList;
        let hasFood = cartList.some(item => item.id === food.id);

        if(!cartList.length || !hasFood) {
            vueObj.$set(food, 'num', 1);
            cartList.push(food)
        }else {
            cartList.forEach(item => {
                if(item.id === food.id) {
                    item.num++;
                }
            })
        }

        state.home.cartList = [...cartList];
        setStorage('buyCart', state.home.cartList);
    },
    [REDUCE_CART](state, foodId) {
        const cartList = state.home.cartList;
        
        cartList.forEach((food, index) => {
            if(food.id == foodId) {
                if(food.num > 1) {
                    food.num--;
                }else {
                    food.num--;
                    cartList.splice(index, 1);
                }
            }
        })

        state.home.cartList = [...cartList];
        setStorage('buyCart', state.home.cartList);
    },
    [CLEAR_CART](state) {
        state.home.cartList = [];
        setStorage('buyCart', state.home.cartList);
    },
    [IS_IPHONEX](state) {
        console.log('init is phonex')
        const w = window.screen.width * window.devicePixelRatio;
        const h = window.screen.height * window.devicePixelRatio;
        (w == 1125 && h == 2436)
            && !GLOBAL.browser.versions.qqBrowser
            && !GLOBAL.browser.versions.uc
                ? state.config.isPhoneX = true
                : state.config.isPhoneX = false;
    }
}