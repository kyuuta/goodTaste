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
                                {{ category.name }}
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
                <kyCart></kyCart>
            </div>
        </div>
    </div>
</template>

<script>
    import kyMenu from './children/menu';
    import kyCart from './children/cart';

    export default {
        data() {
            return {
                menuList: [],                   // 菜单数据
                activeCategoryId: null          // 选中category
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
        },
        components: { 
            kyMenu,
            kyCart 
        }
    }
</script>

<style lang="less" src="*pages/home/index.less" scoped/>