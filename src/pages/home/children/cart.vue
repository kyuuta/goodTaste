<template>
    <div>
        <footer class="cartview">
            <section class="cartview-list" v-if="cartList.length">
                <div class="cartview-list">
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
                </div>
            </section>
            <div class="cartview-footer">
                <div class="cart-icon"></div>
                <div class="info">
                    <p>金额</p>
                </div>
                <div class="balance-btn">去结算</div>
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
                
            }
        },
        methods: {
            ...mapMutations([
                'CLEAR_CART'
            ]),
            clearCart() {
                this.CLEAR_CART();
            }
        },
        components: { kyBuyCart }
    }
</script>

<style lang="less" src="*pages/home/cart.less" scoped/>

