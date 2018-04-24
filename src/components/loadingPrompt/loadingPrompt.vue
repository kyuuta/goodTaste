<template>
    <transition name="fade-in-out">
        <div class="ky-loading-prompt" v-show="visible">
            <div class="ky-loading-prompt-wrapper">
                <div class="orbit-spinner">
                    <div class="orbit"></div>
                    <div class="orbit"></div>
                    <div class="orbit"></div>
                </div>
                <p class="loading-text" v-show="text">{{ text }}</p>
            </div>
            <div class="ky-loading-prompt-mask" @touchmove.stop.prevent></div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'loadingPrompt',
        props: {
            text: String
        },
        data: () => ({ visible: false })
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
            color: #fff;
        }

        &-mask {
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            z-index: 3000;
            opacity: 0;
        }

        .orbit-spinner, .orbit-spinner * {
            box-sizing: border-box;
        }

        .orbit-spinner {
            height: 40/@rem;
            width: 40/@rem;
            border-radius: 50%;
            perspective: 800px;
            .orbit {
                position: absolute;
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                &:nth-child(1) {
                    left: 0%;
                    top: 0%;
                    animation: orbit-spinner-orbit-one-animation 1200ms linear infinite;
                    border-bottom: 3/@rem solid #fff;
                }
                &:nth-child(2) {
                    right: 0%;
                    top: 0%;
                    animation: orbit-spinner-orbit-two-animation 1200ms linear infinite;
                    border-right: 3/@rem solid #fff;
                }
                &:nth-child(3) {
                    right: 0%;
                    bottom: 0%;
                    animation: orbit-spinner-orbit-three-animation 1200ms linear infinite;
                    border-top: 3/@rem solid #fff;
                }


            }
        }

        .loading-text {
            margin-top: 10/@rem;
        }
    }

    .fade-in-out-enter,
    .fade-in-out-leave-active {
        opacity: 0;
    }

    @keyframes orbit-spinner-orbit-one-animation {
        0% {
            transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
        }
        100% {
            transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
        }
    }

    @keyframes orbit-spinner-orbit-two-animation {
        0% {
            transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
        }
        100% {
            transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
        }
    }

    @keyframes orbit-spinner-orbit-three-animation {
        0% {
            transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
        }
        100% {
            transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
        }
    }
</style>
