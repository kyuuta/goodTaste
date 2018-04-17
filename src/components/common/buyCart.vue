<template>
    <section class="ky-buycart">
        <transition name="showReduce">
            <span v-if="foodNum"
                  class="minus-btn" 
                  @click="reduceToCart">
                <i class="icon-minus"></i> 
            </span>
        </transition>
        
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
                // this.openFoodModal(this.food);
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

