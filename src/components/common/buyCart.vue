<template>
    <section class="ky-buycart">
        <span class="minus-btn" 
                @click="reduceToCart">
                <transition name="showReduce">
                    <i v-if="foodNum" class="icon-minus"></i> 
                </transition>
        </span>
        
        <transition name="fade">
            <span v-if="foodNum" 
                  class="count">{{ foodNum }}</span>
        </transition>
        
        <span class="add-btn" @click="addToCart">
            <i class="icon-add"></i> 
        </span>
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
                cartList: state => state.home.cartList
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
        data: () => ({ }),
        methods: {
            ...mapMutations([
                'ADD_CART',
                'REDUCE_CART'
            ]),
            addToCart(e) {
                this.ADD_CART(this.food);
                this.$eventHub.$emit('dropBall',e.target);
            },
            reduceToCart() {
                this.REDUCE_CART(this.food.id);
            },
            openFoodModal(food) {
                this.$eventHub.$emit('openFoodModal',food);
            }
        }
    }
</script>

<style lang="less" src="*common/buyCart.less" scoped/>

