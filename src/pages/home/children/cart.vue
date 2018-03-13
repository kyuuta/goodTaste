<template>
    <div>
        <footer class="cartview">
            <transition name="mask-fade">
                <div class="cartview-mask" 
                     v-show="cartList.length && cartListStatus"
                     @click="changeCartListStatus"></div>
            </transition>
            <transition name="showcartlist">
                <section v-show="cartList.length && cartListStatus"
                         class="cartview-list">
                    <div class="cartview-list-header">
                        <span class="tit">已选菜品</span>
                        <div class="clear-cart" @click="clearCart">
                            <span>清空</span>
                        </div>
                    </div>
                    <div class="cartview-list-content">
                        <ul>
                            <li class="food" 
                                v-for="food in cartList"
                                :key="food.id">
                                <span>{{ food.name }}</span>
                                <kyBuyCart :food="food"/>
                            </li>
                        </ul>
                    </div>
                </section>
            </transition>
            
            <div class="cartview-footer" @click="changeCartListStatus">
                <div class="cart-icon"></div>
                <div class="info">
                    <p>{{ cartList.length ? '已选菜 暂无价钱' : '请选菜'}}</p>
                </div>
                <div :class="['balance-btn',
                              !cartList.length ? 
                              'balance-btn-disabled':
                              'balance-btn-payment']" 
                     @click.stop="goPayment">去结算</div>
            </div>
        </footer>
    </div>
</template>

<script>    
    import { mapMutations } from 'vuex';
    import kyBuyCart from '@/common/buyCart';

    export default {
        name: 'kyCart',
        props: [
            'cartList'
        ],
        data() {
            return {
                cartListStatus: false
            }
        },
        methods: {
            ...mapMutations([
                'CLEAR_CART'
            ]),
            clearCart() {
                this.CLEAR_CART();
            },
            changeCartListStatus() {
                this.cartList.length ? this.cartListStatus = !this.cartListStatus : true;
            },
            goPayment() {
                console.log("23333")
            }
        },
        watch: {
            cartList(val) {
                if(!val.length) {
                    this.cartListStatus = false;
                }
            } 
        },
        components: { kyBuyCart }
    }
</script>

<style lang="less" src="*pages/home/cart.less" scoped/>

