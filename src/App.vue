<template>
	<the-header></the-header>
	<!-- <find-coach></find-coach> -->
	<!-- <coach-registration></coach-registration> -->
	<!-- <coach-filter></coach-filter> -->
	<router-view></router-view>
</template>

<script>
	import TheHeader from './components/layout/TheHeader.vue';
	// import FindCoach from './components/coaches/FindCoach.vue';
	export default {
		components: {
			'the-header': TheHeader,
			// FindCoach,
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
