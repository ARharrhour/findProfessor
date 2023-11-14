<template>
	<form @submit.prevent="registerCoach">
		<div class="form-control" :class="{ invalid: !firstname.isValid }">
			<label for="firstname">Firstname</label>
			<input
				type="text"
				v-model.trim="firstname.val"
				id="firstname"
				ref="inputFirstname"
				@blur="clearValidity('firstname')"
			/>
			<p v-if="!firstname.isValid">Firstname must not be empty.</p>
		</div>
		<div class="form-control" :class="{ invalid: !lastname.isValid }">
			<label for="lastname">Lastname</label>
			<input
				type="text"
				@blur="clearValidity('lastname')"
				v-model.trim="lastname.val"
				id="lastname"
			/>
			<p v-if="!lastname.isValid">Lastname must not be empty.</p>
		</div>
		<div class="form-control" :class="{ invalid: !description.isValid }">
			<label for="description">Description</label>
			<textarea
				type="text"
				v-model.trim="description.val"
				@blur="clearValidity('description')"
				rows="5"
			></textarea>
			<p v-if="!description.isValid">Description must not be empty.</p>
		</div>
		<div class="form-control" :class="{ invalid: !hourlyRate.isValid }">
			<label for="hourly_rate">Hourly Rate</label>
			<input
				type="number"
				@blur="clearValidity('hourlyRate')"
				v-model.number="hourlyRate.val"
				id="hourlyRate"
			/>
			<p v-if="!hourlyRate.isValid">
				Hourly Rate must not be a number and not empty.
			</p>
		</div>
		<div class="form-control" :class="{ invalid: !areas.isValid }">
			<h3>Areas of Expertise</h3>
			<div>
				<input
					@blur="clearValidity('areas')"
					type="checkbox"
					v-model="areas.val"
					value="frontend"
				/>
				<label for="frontend">Frontend</label>
			</div>
			<div>
				<input
					@blur="clearValidity('areas')"
					type="checkbox"
					v-model="areas.val"
					value="backend"
				/>
				<label for="Backend">Backend</label>
			</div>
			<div>
				<input
					@blur="clearValidity('areas')"
					type="checkbox"
					v-model="areas.val"
					value="career"
				/>
				<label for="career">Career</label>
			</div>
			<p v-if="!areas.isValid">At least one expertise must selected.</p>
		</div>
		<p v-if="!formIsValid">Please fix the above errors and submit again</p>
		<base-button>Register</base-button>
	</form>
</template>
<script>
	export default {
		emits: ['save-data'],
		data() {
			return {
				firstname: {
					val: '',
					isValid: true,
				},
				lastname: {
					val: '',
					isValid: true,
				},
				description: {
					val: '',
					isValid: true,
				},
				hourlyRate: {
					val: null,
					isValid: true,
				},
				areas: {
					val: [],
					isValid: true,
				},
				formIsValid: true,
			};
		},
		methods: {
			clearValidity(input) {
				this[input].isValid = true;
			},
			validateForm() {
				this.formIsValid = true;
				if (this.firstname.val === '') {
					this.firstname.isValid = false;
					this.formIsValid = false;
				}
				if (this.lastname.val === '') {
					this.lastname.isValid = false;
					this.formIsValid = false;
				}
				if (this.description.val === '') {
					this.description.isValid = false;
					this.formIsValid = false;
				}
				if (!this.hourlyRate.val || this.hourlyRate.val < 0) {
					this.hourlyRate.isValid = false;
					this.formIsValid = false;
				}
				if (this.areas.val.length === 0) {
					this.areas.isValid = false;
					this.formIsValid = false;
				}
			},
			registerCoach() {
				this.validateForm();
				if (!this.formIsValid) {
					return;
				}
				const data = {
					first: this.firstname.val,
					last: this.lastname.val,
					desc: this.description.val,
					areas: this.areas.val,
					rate: this.hourlyRate.val,
				};

				this.$emit('save-data', data);
			},
		},
	};
</script>
<style>
	.form-control {
		margin: 0.5rem 0;
	}

	label {
		font-weight: bold;
		display: block;
		margin-bottom: 0.5rem;
	}

	input[type='checkbox'] + label {
		font-weight: normal;
		display: inline;
		margin: 0 0 0 0.5rem;
	}

	input,
	textarea {
		display: block;
		width: 100%;
		border: 1px solid #ccc;
		font: inherit;
	}

	input:focus,
	textarea:focus {
		background-color: #f0e6fd;
		outline: none;
		border-color: #3d008d;
	}

	input[type='checkbox'] {
		display: inline;
		width: auto;
		border: none;
	}

	input[type='checkbox']:focus {
		outline: #3d008d solid 1px;
	}

	h3 {
		margin: 0.5rem 0;
		font-size: 1rem;
	}

	.invalid label {
		color: red;
	}

	.invalid input,
	.invalid textarea {
		border: 1px solid red;
	}
</style>
