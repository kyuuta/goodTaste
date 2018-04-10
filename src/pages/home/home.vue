<template>
    <div class="home">
        <div class="menu-view">
            <main class="menuview-main">
                <section class="menu-container" ref="menuWrapper">

                    <ul class="menu-category">
                        <li v-for="(category, index) in menuList"
                            :class="[
                                'item',
                                {'active': index === currentIndex}
                            ]"
                            :key="index"
                            ref="menuList"
                            @click="changeCategory(index, $event)">
                            <span>{{ category.name }}</span>
                            <span class="num-tag"
                                  v-if="categoryNumList[index]">
                                {{ categoryNumList[index] }}
                            </span>
                        </li>
                    </ul>

                </section>
                <section class="container" ref="foodsWrapper">

                    <div class="scroller">
                        <kyMenu v-for="(menu, index) in menuList"
                                :key="index"
                                ref="foodList"
                                :menuData="menu" />
                    </div>
                    
                </section>
            </main>
            <kyCart :cartList="cartList" />
        </div>

        <Modal v-model="modalVisible"
               @close="closeFoodModal" />
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import BScroll from 'better-scroll';

    import kyMenu from './children/Menu';
    import kyCart from './children/Cart';

    export default {
        name: 'home',
        data() {
            return {
                menuList: [],                   // 菜单数据
                categoryNumList: [],            // 分类已选数量
                totalPrice: 0,                  // 购物车总价
                modalVisible: false,            // 菜品属性弹窗状态
                foodListScrollY: 0,             // 菜品scrollY
                foodListHeightArr: [],          // 菜品分类高度
            }
        },
        computed: {
            ...mapState({
                cartList: state => state.home.cartList
            }),
            currentIndex() {
                for (let i = 0, foodArr = this.foodListHeightArr; i < foodArr.length; i++) {
                    let active = foodArr[i];
                    let next = foodArr[i + 1];
                    if (!next || (this.foodListScrollY >= active && this.foodListScrollY < next)) {
                        this.menuScroll.scrollToElement(this.$refs.menuList[i], 200, 0, -100);
                        return i;
                    }
                }
                return 0;
            },
        },
        mounted() {
            this.getTest();
            this.openFoodModal();
        },
        methods: {
            getTest() {
                this.$http({
                    url: 'https://www.easy-mock.com/mock/5a9cb0afc81bc4233201023e/goodTaste/menu'
                }).then(res => {
                    this.menuList = res.data;
                    this.$nextTick(()=> {
                        this.initScroll();
                        this.calculateFoodListHeight();
                    })
                })
            },
            // initBetterScroll
            initScroll() {
                this.menuScroll = new BScroll(this.$refs.menuWrapper, {
                    click: true,
                    bounce: false
                })
                this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
                    click: true,
                    bounce: false,
                    probeType: 3
                })
                this.foodsScroll.on('scroll', pos => {
                    if(pos.y <= 0) {
                        this.foodListScrollY = Math.abs(Math.round(pos.y));      
                    }
                })
            },
            // calculateFoodListHeight
            calculateFoodListHeight() {
                let height = 0;
                this.foodListHeightArr.push(height);
                this.$refs.foodList.forEach((item, index) => {
                    height += item.$el.clientHeight;
                    this.foodListHeightArr.push(height)
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
            changeCategory(index,event) {
                if (!event._constructed) return;
                this.foodsScroll.scrollToElement(this.$refs.foodList[index].$el, 300);
            },
            openFoodModal() {
                this.$eventHub.$on('openFoodModal',(food) => {
                    this.modalVisible = true;
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