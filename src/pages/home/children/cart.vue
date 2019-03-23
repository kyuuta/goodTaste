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
                            <span class="food-name">{{ food.name }}</span>
                            <kyBuyCart :food="food"/>
                        </li>
                    </ul>
                </div>
            </section>
        </transition>


        <div class="ball-container">
            <div v-for="ball in balls">
                <transition 
                    name="drop" 
                    @before-enter="beforeDrop" 
                    @enter="dropping" 
                    @after-enter="afterDrop">
                    <div class="ball" v-if="ball.show">
                        <div class="inner inner-hook"></div>
                    </div>
                </transition>
            </div>
        </div>
        
        <div class="cartview-footer"
             :class="{'cartview-footer-iphonex': this.$store.state.config.isPhoneX}"
             :style="{'background-color': !visible ? 'rgba(61,61,63, .9)' : 'rgba(61,61,63,1)'}" 
             @click="changeCartListStatus">
            <div class="cart-icon">
                <i class="icon-cart"></i>
            </div>
            <div class="info">
                <p>{{ cartList.length ? cartTotal.toFixed(2) : '请选菜'}}</p>
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
            }),
            cartTotal() {
                return this.cartList.reduce((total, active) => {
                    return active.num * active.price + total
                }, 0) / 100;
            }
        },
        data() {
            return {
                visible: this.value,
                balls: [{show: false},{show: false},{show: false},{show: false},{show: false}],
                dropBalls: []
            }
        },
        mounted() {
            this.$eventHub.$on('dropBall', target => {
                this.drop(target);
            });
        },
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
            },
            drop(el) {
                for (let i = 0; i < this.balls.length; i++) {
                    let ball = this.balls[i];
                    if (!ball.show) {
                        ball.show = true;
                        ball.el = el;
                        this.dropBalls.push(ball);
                        return;
                    }
                }
            },
            beforeDrop(el) {
                let count = this.balls.length;
                    while (count--) {
                    let ball = this.balls[count];
                    if (ball.show) {
                        let rect = ball.el.getBoundingClientRect();
                        let x = rect.left - 32;
                        let y = -(window.innerHeight - rect.top - 22);
                        el.style.display = '';
                        el.style.webkitTransform = `translate3d(0,${y}px,0)`;
                        el.style.transform = `translate3d(0,${y}px,0)`;
                        let inner = el.getElementsByClassName('inner-hook')[0];
                        inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
                        inner.style.transform = `translate3d(${x}px,0,0)`;
                    }
                }
            },
            dropping(el, done) {
                let rf = el.offsetHeight;
                this.$nextTick(() => {
                    el.style.webkitTransform = 'translate3d(0,0,0)';
                    el.style.transform = 'translate3d(0,0,0)';
                    let inner = el.getElementsByClassName('inner-hook')[0];
                    inner.style.webkitTransform = 'translate3d(0,0,0)';
                    inner.style.transform = 'translate3d(0,0,0)';
                    el.addEventListener('transitionend', done);
                });
            },
            afterDrop(el) {
                let ball = this.dropBalls.shift();
                if (ball) {
                    ball.show = false;
                    el.style.display = 'none';
                }
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

