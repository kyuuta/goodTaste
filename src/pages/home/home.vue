<template>
    <div class="home">
        <div class="menu-view">
            <div class="menu-view-main">
                <main class="menuview-main">
                    <ul class="menu-category">
                        <li :class="['item',{
                                'active': activeCategoryId == category.category_id                   
                            }]"
                            v-for="(category, index) in menuList"
                            :key="index"
                            @click="changeCategory(category.category_id)">
                                {{ category.description }}
                        </li>
                    </ul>
                    <section class="container">
                        <div class="scroller">
                            <dl class="menu">
                                <dt class="category-title">
                                    <strong class="category-name">Hot</strong>
                                    <span class="category-desc">is Not Hot...</span>
                                </dt>
                                <dd>
                                    <div class="foods">
                                        <div class="foods-pic">
                                            <img src="111" alt="111">
                                        </div>
                                        <section class="foods-info">
                                            <p class="foods-info-name">First Product</p>
                                            <p class="foods-info-desc">!songzongzhendeshuai === false....<p>
                                            <p class="foods-info-sales">
                                                <span>月售233份</span>
                                                <span>好评率23.333%</span>
                                            </p>
                                            <strong class="foods-info-price">
                                                <span>23.33</span>
                                            </strong>
                                        </section>
                                    </div>
                                </dd>
                                <dd>
                                    <div class="foods">
                                        <div class="foods-pic">
                                            <img src="111" alt="111">
                                        </div>
                                        <section class="foods-info">
                                            <p class="foods-info-name">First Product</p>
                                            <strong class="foods-info-price">
                                                <span>23.33</span>
                                            </strong>
                                        </section>
                                    </div>
                                </dd>
                                <dd>
                                    <div class="foods">
                                        <div class="foods-pic">
                                            <img src="111" alt="111">
                                        </div>
                                        <section class="foods-info">
                                            <p class="foods-info-name">First Product</p>
                                            <!-- <p class="foods-info-desc">!songzongzhendeshuai === false....<p> -->
                                            <p class="foods-info-sales">
                                                <span>月售233份</span>
                                                <span>好评率23.333%</span>
                                            </p>
                                            <strong class="foods-info-price">
                                                <span>23.33</span>
                                            </strong>
                                        </section>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="menu">
                                <dt class="category-title">
                                    <strong class="category-name">Hot</strong>
                                    <span class="category-desc">is Not Hot...</span>
                                </dt>
                                <dd>
                                    <div class="foods">
                                        <div class="foods-pic">
                                            <img src="111" alt="111">
                                        </div>
                                        <section class="foods-info">
                                            <p class="foods-info-name">First Product</p>
                                            <p class="foods-info-desc">!songzongzhendeshuai === false....<p>
                                            <p class="foods-info-sales">
                                                <span>月售233份</span>
                                                <span>好评率23.333%</span>
                                            </p>
                                            <strong class="foods-info-price">
                                                <span>23.33</span>
                                            </strong>
                                        </section>
                                    </div>
                                </dd>
                                <dd>
                                    <div class="foods">
                                        <div class="foods-pic">
                                            <img src="111" alt="111">
                                        </div>
                                        <section class="foods-info">
                                            <p class="foods-info-name">First Product</p>
                                            <strong class="foods-info-price">
                                                <span>23.33</span>
                                            </strong>
                                        </section>
                                    </div>
                                </dd>
                                <dd>
                                    <div class="foods">
                                        <div class="foods-pic">
                                            <img src="111" alt="111">
                                        </div>
                                        <section class="foods-info">
                                            <p class="foods-info-name">First Product</p>
                                            <!-- <p class="foods-info-desc">!songzongzhendeshuai === false....<p> -->
                                            <p class="foods-info-sales">
                                                <span>月售233份</span>
                                                <span>好评率23.333%</span>
                                            </p>
                                            <strong class="foods-info-price">
                                                <span>23.33</span>
                                            </strong>
                                        </section>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                menuList: [],           // 菜单数据
                activeCategoryId: null    // 选中category
            }
        },
        mounted(){
            this.getTest();
        },
        methods: {
            getTest() {
                this.$http({
                    url: 'https://www.easy-mock.com/mock/5a9cb0afc81bc4233201023e/goodTaste/menu'
                }).then(res => {
                    this.activeCategoryId = res.data[0].category_id;
                    this.menuList = res.data;
                })
            },
            changeCategory(id) {
                this.activeCategoryId = id;
            }
        }
    }
</script>

<style lang="less" src="*pages/home/index.less" scoped/>