<template>
	<the-header></the-header>

	<router-view></router-view>
</template>

<script>
	import TheHeader from './components/layout/TheHeader.vue';

	export default {
		components: {
			'the-header': TheHeader,
		},
		provide() {
			return {
				requests: this.requests,
			};
		},
		data() {
			return {
				requests: [
					{ email: 'abde@codk.com', body: 'something' },
					{ email: 'abde@ds.com', body: 'ddddddd' },
				],
			};
		},
	};
</script>

<style>
	* {
		box-sizing: border-box;
	}

	html {
		font-family: sans-serif;
	}

	body {
		margin: 0;
	}
</style>
