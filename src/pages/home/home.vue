<template>
    <div class="home">
        <div class="menu-view">
            <div class="menu-view-main">
                <main class="menuview-main">
                    <ul class="menu-category">
                        <li :class="[
                                'item',
                                {'active': activeCategoryId == category.category_id}
                            ]"
                            v-for="(category, index) in menuList"
                            :key="index"
                            @click="changeCategory(category.category_id)">
                            <span>{{ category.name }}</span>
                            <span class="num-tag"
                                    v-if="categoryNumList[index]">
                                {{ categoryNumList[index] }}
                            </span>
                        </li>
                    </ul>
                    <section class="container">
                        <div class="scroller">
                            <kyMenu v-for="(menu, index) in menuList"
                                    :key="index"
                                    :menuData="menu" />
                        </div>
                    </section>
                </main>
                <kyCart :cartList="cartList"/>
            </div>
        </div>

        <Modal v-show="modalVisible"
               @close="closeFoodModal"></Modal>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    import kyMenu from './children/menu';
    import kyCart from './children/cart';

    export default {
        name: 'home',
        data() {
            return {
                menuList: [],                   // menuListInf
                categoryNumList: [],            // categoryNum
                totalPrice: 0,                  // cartListTotal
                activeCategoryId: null,         // selectedCategory
                modalVisible: false,            // modalStatus
            }
        },
        computed: {
            ...mapState({
                cartList: state => state.home.cartList
            })
        },
        mounted(){
            this.getTest();
            this.openFoodModal();
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
            initRenderInfo() {
                let categoryArr = [];
                this.menuList.forEach((menu, index) => {
                    if(this.cartList.length) {
                        let categodyNum = 0;
                        menu.foods.forEach((food, index) => {
                            this.cartList.forEach((cartFood, index) => {
                                // 计算数量
                                if(food.id === cartFood.id) {
                                    categodyNum += cartFood.num;
                                }
                            })
                        })
                        categoryArr[index] = categodyNum;
                    }
                })
                this.categoryNumList = [...categoryArr];
            },
            changeCategory(id) {
                this.activeCategoryId = id;
            },
            openFoodModal() {
                this.$eventHub.$on('openFoodModal',(food) => {
                    console.log(food)
                })
            },
            closeFoodModal() {

            }
        },
        watch: {
            cartList: {
                handler() {
                    this.initRenderInfo();
                },
                deep: true
            }
        },
        components: { 
            kyMenu,
            kyCart 
        }
    }
</script>

<style lang="less" src="*pages/home/index.less" scoped/>