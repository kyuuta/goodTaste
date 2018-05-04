<template>
    <footer class="cartview">
        <transition name="mask-fade">
            <div class="cartview-mask" 
                 v-show="visible"
                 @click="maskHandleClick"></div>
        </transition>

        <transition name="showcartlist">
            <section v-show="visible"
                     class="cartview-list"
                     :class="{'cartview-list-iphonex': this.$store.state.config.isPhoneX}">
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
        
        <div class="cartview-footer"
             :class="{'cartview-footer-iphonex': this.$store.state.config.isPhoneX}"
             :style="{'background-color': !visible ? 'rgba(61,61,63, .9)' : 'rgba(61,61,63,1)'}" 
             @click="changeCartListStatus">
            <div class="cart-icon"></div>
            <div class="info">
                <p>{{ cartList.length ? '已选菜 暂无价钱' : '请选菜'}}</p>
            </div>
            <div @click.stop="goPayment"
                 :class="['balance-btn',
                         !cartList.length ? 
                         'balance-btn-disabled':
                         this.$store.state.config.isPhoneX ? 'balance-btn-payment-iphonex' : 'balance-btn-payment']">去结算</div>
        </div>
        
    </footer>
</template>

<script>    
    import { mapMutations, mapState } from 'vuex';
    import kyBuyCart from '@/common/BuyCart';

    export default {
        name: 'kyCart',
        props: {
            value: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            ...mapState({
                cartList: state => state.home.cartList
            })
        },
        data: () => ({
            visible: this.value
        }),
        methods: {
            ...mapMutations([
                'CLEAR_CART'
            ]),
            clearCart() {
                this.CLEAR_CART();
            },
            maskHandleClick() {
                this.visible = false;
                this.$emit('input', false);
            },
            changeCartListStatus() {
                this.$emit('changeCartStatus');
            },
            goPayment() {
                console.log("23333")
            }
        },
        watch: {
            value (val) {
                this.visible = val;
            }
        },
        components: { kyBuyCart }
    }
</script>

<style lang="less" src="*pages/home/cart.less" scoped/>

