<template>
    <div>
        <footer class="cartview">
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
    export default {
        name: 'kyCart',
        data() {
            
        }
    }
</script>

<style lang="less" scoped>
    @import '~*/mixin.less';

    .cartview {
        &-footer {
            display: flex;
            align-items: center;
            position: fixed;
            left: 0;
            bottom: 0;
            height: 45/@rem;
            width: 100%;
            line-height: 45/@rem;
            padding-left: 75/@rem;
            background: rgba(61,61,63,.9);
            .cart-icon {
                position: absolute;
                left: 14/@rem;
                top: -10/@rem;
                height: 45/@rem;
                width: 45/@rem;
                border-radius: 50%;
                background: black;
            }
            .info {
                flex: 1;
                height: 45/@rem;
                color: #fff;
            }
            .balance-btn {
                color: #cccccc;
                height: 45/@rem;
                width: 90/@rem;
                text-align: center;
                background: #666;
            }
        }
    }
</style>
