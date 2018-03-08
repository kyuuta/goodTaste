import {
    INIT_CART,
    ADD_CART,
    REDUCE_CART,
    CLEAR_CART
} from '../mutation-types';

import {
    setStorage,
    getStorage
} from '^config/utils';

export default {
    [ADD_CART](state, food) {
        const cartList = state.cartList;
        let hasFood = cartList.some(item => item.id === food.id);

        if(!cartList.length || !hasFood) {
            food.num = 1;
            cartList.push(food)
        }else {
            cartList.forEach(item => {
                if(item.id === food.id) {
                    item.num++;
                }
            })
        }

        state.cartList = [...cartList];
        setStorage('buyCart', state.cartList);
    },
    [REDUCE_CART](state, foodId) {
        const cartList = state.cartList;
        
        cartList.forEach((food, index) => {
            if(food.id == foodId) {
                if(food.num > 1) {
                    food.num--;
                }else {
                    cartList.splice(index);
                }
            }
        })

        state.cartList = [...cartList];
        setStorage('buyCart', state.cartList);
    }
}