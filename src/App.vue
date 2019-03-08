<template>
	<div class="app-wrapper">
		<!-- <transition :name="transitionName"> -->
			<keep-alive :include="$store.state.config.keepAlivePage.join(',')">
				<router-view class="ky-view"/>
			</keep-alive>
		<!-- </transition> -->
	</div>
</template>

<script>
	import { mapMutations } from 'vuex';

	export default {
		name: "pageApp",
		created() {
			this.IS_IPHONEX();
		},
		data() {
			return {
				
			}
		},
		methods: {
			...mapMutations([
                'IS_IPHONEX'
            ]),
		},
		watch: {
			// '$route'(to, from) {
			// 	const toDepth = to.path.split('/').length
			// 	const fromDepth = from.path.split('/').length
			// 	this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
			// }
		}
	}
</script>

<style src="*/reset.css"></style>
<style src="*/iconfont.css"></style>
<style lang="less">
	@import "~*/mixin.less";

	html, body {
		height: 100%;
		width: 100%;
		font-size: 12/@rem;
		.app-wrapper {
			width: 100%;
			height: 100%;
		}
	}
	// .ky-view {
	// 	position: absolute;
	// 	width: 100%;
	// 	transition: all .8s ease;
	// }
	// .slide-left-enter,
	// .slide-right-leave-active {
	// 	-webkit-transform: translate(100%, 0);
	// 	transform: translate(100%, 0);
	// }

	// .slide-left-leave-active,
	// .slide-right-enter {
	// 	-webkit-transform: translate(-100%, 0);
	// 	transform: translate(-100% 0);
	// }
</style>

