<template>
    <transition name="fade-in-out">
        <div class="ky-loading-prompt" v-show="visible">
            <div class="ky-loading-prompt-wrapper">
                <div class="loading-round"></div>
                <p class="loading-text" v-show="text">{{ text }}</p>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'loadingPrompt',
        data() {
            return {
                visible: false
            }
        },
        props: {
            text: String
        }
    }
</script>

<style lang="less" scoped>
    @import '~*/mixin.less';

    .ky-loading-prompt {
        transition: opacity .2s linear;

        &-wrapper {
            z-index: 3000;
            position: fixed;
            display: flex;
            top: 50%;
            left: 50%;
            width: 80/@rem;
            height: 80/@rem;
            text-align: center;
            border-radius: 5/@rem;
            box-sizing: border-box;
            transform: translate(-50%, -60%);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: rgba(0, 0, 0, .7);
            color: white;
        }

        .loading-round {
            align-self: center;
            animation: loading-round .9s infinite linear;
            height: 25/@rem;
            width: 25/@rem;
            border: 3/@rem solid transparent;
            border-top-color: #fff;
            border-left-color: #fff;
            border-bottom-color: #fff;
            border-radius: 50%;
        }

        .loading-text {
            margin-top: 10/@rem;
        }
    }

    .fade-in-out-enter,
    .fade-in-out-leave-active {
        opacity: 0;
    }

    @keyframes loading-round {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
