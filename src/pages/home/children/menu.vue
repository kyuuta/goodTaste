<template>
    <dl class="menu">
        <dt class="category-title">
            <strong class="category-name">{{ menuData.name }}</strong>
            <span class="category-desc">{{ menuData.description }}</span>
        </dt>
        <dd v-if="menuData.foods.length"
            v-for="food in menuData.foods"
            :key="food.id">
            <div class="foods">
                <div class="foods-pic">
                    <img src="~images/food-img.jpg" alt="111">
                </div>
                <section class="foods-info">
                    <p class="foods-info-name">{{ food.name }}</p>
                    <p class="foods-info-desc">!songzongzhendeshuai === false....<p>
                    <p class="foods-info-sales">
                        <span>月售233份</span>
                        <span>好评率23.333%</span>
                    </p>
                    <strong class="foods-info-price">
                        <span>23.33</span>
                    </strong>
                    <kyBuyCart class="buy-cart" :food="food"/>
                </section>
            </div>
        </dd>
    </dl>
</template>

<script>
    import kyBuyCart from '@/common/buyCart';

    export default {
        name: 'kyMenu',
        data() {
            return {
                
            }
        },
        props: {
            menuData: {
                type: Object,
                required: true
            }
        },
        methods: {
            
        },
        components: { kyBuyCart }
    }
</script>

<style lang="less" src="*pages/home/menu.less" scoped/>

