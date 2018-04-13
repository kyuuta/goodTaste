<template>
    <div class="modal-wrapper" v-show="visible">
        <div class="modal">
            <div class="modal-header">
                <slot name="header">
                    <h2>Hello world!</h2>
                    <h2>Hello world!</h2>
                    <h2>Hello world!</h2>
                    <h2>Hello world!</h2>
                    <h2>Hello world!</h2>
                    <h2>Hello world!</h2>
                    <h2>Hello world!</h2>
                    <h2>Hello world!</h2>
                    <h2>Hello world!</h2>
                    <h2>Hello world!</h2>
                    <h2>Hello world!</h2>
                    <h2>Hello world!</h2>
                    <h2>Hello world!</h2>
                </slot>
            </div>
            <div class="modal-body">
                <slot name="body">
                    <p>test my modal</p>
                </slot>
            </div>
            <div class="modal-footer">
                <slot name="footer">
                    <p>close?...</p>
                </slot>
            </div>
        </div>
        <div class="modal-mask" @click="close"></div>
    </div>
</template>

<script>
    export default {
        name: 'Modal',
        props: {
            value: {
                type: Boolean,
                default: false
            }
        },
        data: () => ({
            visible: this.value
        }),
        methods: {
            close() {
                this.visible = false;
                this.$emit('close');
            },
            cancel() {
                this.close();
            },
            confirm() {
                this.close();
                this.$emit('confirm');
            }
        },
        watch: {
            value(val) {
                this.visible = val;
            }
        }
    }
</script>

<style lang="less" src="./modal.less" scoped/>
