<template>
    <div>
        hello KYUUTA!
        <div class="test" v-for="(item, index) in list" :key="index" style="padding-bottom: 10px;background: #fff;">
            <p>name: {{ item.name }}</p>
            <p>address: {{ item.address }}</p>
            <p>starts: {{ item.string }}</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                list: []
            }
        },
        mounted(){
            this.getTest();
        },
        methods: {
            getTest() {
                this.$http({
                    url: 'https://easy-mock.com/mock/5a9bfcdc5dfe1568ff5331ce/example/mock'
                }).then(res => {
                    console.log(res)
                })
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
