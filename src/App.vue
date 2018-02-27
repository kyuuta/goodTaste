<template>
	<div class="app-wrapper">
		<keep-alive :include="$store.state.config.keepAlivePage.join(',')">
			<router-view/>
		</keep-alive>
	</div>
</template>

<script>
	export default {
		name: "pageApp",
		mounted() {
		},
		methods: {
			
		}
	}
</script>

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
</style>

