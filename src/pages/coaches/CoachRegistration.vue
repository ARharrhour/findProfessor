<template>
	<base-card>
		<h3>Register as a coach now!</h3>

		<div>
			<form>
				<div class="form-control">
					<label for="firstname">Firstname</label>
					<input type="text" name="firstname" id="" ref="inputFirstname" />
				</div>
				<div class="form-control">
					<label for="lastname">Lastname</label>
					<input type="text" name="lastname" id="" ref="inputLastname" />
				</div>
				<div class="form-control">
					<label for="description">Description</label>
					<textarea
						type="text"
						name="description"
						id=""
						ref="inputDescription"
						rows="5"
					></textarea>
				</div>
				<div class="form-control">
					<label for="hourly_rate">Hourly Rate</label>
					<input type="number" name="hourlyRate" id="" ref="inputHourlyRate" />
				</div>
				<div class="form-control">
					<label for="expertise">Areas of Expertise</label>
					<input
						type="checkbox"
						name="expertise"
						id=""
						ref="inputIxpertise"
						value="Frontend Development"
					/>
					<input
						type="checkbox"
						name="expertise"
						id=""
						ref="inputIxpertise"
						value="Backend Development"
					/>
					<input
						type="checkbox"
						name="expertise"
						id=""
						ref="inputIxpertise"
						value="Career Advisory"
					/>
				</div>
				<base-button mode="flat">Register</base-button>
			</form>
		</div>
	</base-card>
</template>
<script>
	export default {};
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
		margin: 1.2rem 0;
		font-size: 1.4rem;
	}

	.invalid label {
		color: red;
	}

	.invalid input,
	.invalid textarea {
		border: 1px solid red;
	}
</style>
