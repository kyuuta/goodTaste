<template>
    <section class="ky-buycart">
        <i class="icon-minus" @click="reduceToCart"></i>
        <span class="count">{{ foodNum }}</span>
        <i class="icon-add" @click="addToCart"></i>
    </section>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';

    export default {
        name: 'kyBuyCart',
        props: {
            food: {
                type: Object,
                required: true
            }
        },
        computed: {
            ...mapState({
                cartList: state => state.cartList
            }),
            foodNum() {
                let num = 0;
                this.cartList.forEach(item => {
                    if(item.id === this.food.id) {
                        num += item.num;
                    }
                })
                return num;
            }
        },
        data() {
            return {
            }
        },
        methods: {
            ...mapMutations([
                'ADD_CART',
                'REDUCE_CART'
            ]),
            addToCart() {
                this.ADD_CART(this.food);
            },
            reduceToCart() {
                this.REDUCE_CART(this.food.id);
            }
        }
    }
</script>

<style lang="less" src="*common/buyCart.less" scoped/>

