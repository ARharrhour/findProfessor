<template>
	<section>
		<base-card>
			<h2>Register as a coach now!</h2>
			<coach-form @save-data="addCoach"></coach-form>
		</base-card>
	</section>
</template>

<script>
	import CoachForm from '../../components/coaches/CoachForm.vue';

	export default {
		components: {
			CoachForm,
		},

		methods: {
			addCoach(data) {
				this.$store.dispatch('coach/registerCoach', data);
				this.$router.replace('/coaches');
			},
		},
	};
</script>
<style></style>
