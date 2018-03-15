<template>
    <div class="home">
        <div class="menu-view">
            <main class="menuview-main">
                <section class="menu-container" ref="menuWrapper">
                    <ul class="menu-category">
                        <li v-for="(category, index) in menuList"
                            :class="[
                                'item',
                                {'active': index == activeCategoryIndex}
                            ]"
                            :key="index"
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
                                :menuData="menu" />
                    </div>
                </section>
            </main>
            <kyCart :cartList="cartList" />
        </div>

        <Modal v-show="modalVisible"
               @close="closeFoodModal" />
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import BScroll from 'better-scroll';

    import kyMenu from './children/menu';
    import kyCart from './children/cart';

    export default {
        name: 'home',
        data() {
            return {
                menuList: [],                   // menuListInf
                categoryNumList: [],            // categoryNum
                totalPrice: 0,                  // cartListTotal
                activeCategoryIndex: 0,         // selectedCategory
                modalVisible: false,            // modalStatus
                foodListScrollY: 0,             // foodListScrollY
                foodListHeightArr: [],          // foodListHeightArr
            }
        },
        computed: {
            ...mapState({
                cartList: state => state.home.cartList
            })
        },
        created() {
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
                        this.calculateFoodListHeight();
                        this.initScroll();
                    })
                })
            },
            // initBetterScroll
            initScroll() {
                const menuScroll = new BScroll(this.$refs.menuWrapper, {
                    click: true,
                    bounce: false
                })
                const menuWrapperHeight = this.$refs.menuWrapper.clientHeight;
                this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
                    click: true,
                    bounce: false,
                    probeType: 3
                })
                this.foodsScroll.on('scroll', pos => {
                    if(pos.y <= 0) {
                        this.scrollY = Math.abs(Math.round(pos.y));
                        for(let i = 0; i < this.foodListHeightArr.length; i++) {
                            let nowTop = this.foodListHeightArr[i];
                            let nextHeight = this.foodListHeightArr[i+1];
                            if(!nextHeight || (this.scrollY >= nowTop && this.scrollY < nextHeight)) {
                                this.activeCategoryIndex = i;
                                const menuList = this.$refs.menuWrapper.querySelectorAll('.active');
                                const el = menuList[0];
                                menuScroll.scrollToElement(el, 800, 0, -(menuWrapperHeight/2 - 50));
                                break;
                            }
                        }
                    }
                })
            },
            // calculateFoodListHeight
            calculateFoodListHeight() {
                const listContainer = this.$refs.foodsWrapper;
                const listArr = Array.from(listContainer.children[0].children);
                listArr.forEach((item, index) => {
                    this.foodListHeightArr[index] = item.offsetTop;
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
                if (!event._constructed) {
                    return;
                }
                console.log("111")
                let foodList = this.$refs.foodsWrapper;
                let el = foodList[index];
                this.foodsScroll.scrollTo(0, -this.foodListHeightArr[index], 400);
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