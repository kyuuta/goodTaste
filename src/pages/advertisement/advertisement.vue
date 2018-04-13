<template>
    <div class="advertisement">
        <div class="skip-btn" @click="skip">跳过({{ skipTime }}秒)</div>
        <div class="author">created by KYUUTA.</div>
    </div>
</template>

<script>
    /*
     *  昨天熬夜3点多有点困Zzz..
     *  created by kyuuta on 2018-02-27 11:21:33
     */

    export default {
        name: 'advertisement',
        data: () => ({
            skipTime: 3
        }),
        mounted() {
            this.skipCountDown();
        },
        methods: {
            skipCountDown() {
                let timer = setInterval(()=>{
                    if(this.skipTime > 1) {
                        this.skipTime--;
                    } else {
                        clearInterval(timer);
                        this.$router.push('/home/index')
                    }
                }, 1000);
            },
            skip() {
                this.skipTime = 0;
                this.$router.push('/home/index')
            }
        }
    }
</script>

<style lang="less" src="*pages/advertisement/index.less" scoped/>