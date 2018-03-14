<template>
    <div class="modal-wrapper" v-show="show">
        <div class="modal">
            <div class="modal-header">
                <slot name="header">
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
        <div class="modal-mask"></div>
    </div>
</template>

<script>
    export default {
        name: 'Modal',
        props: ['show'],
        data() {
            return {
                
            }
        },
        methods: {
            close() {

            }
        }
    }
</script>

<style lang="less" src="./modal.less" scoped/>
