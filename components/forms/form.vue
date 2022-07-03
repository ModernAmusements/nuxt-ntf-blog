<script>
export default {
	name: "Form",
};
</script>
<template>
	<form class="flex flex-row flex-wrap items-center py-5" name="blog" method="POST" data-netlify="true">
		<p>
			<label>Your Email: <input type="email" name="email" /></label>
		</p>
		<p class="pl-5 m-0">
			<button class="btn" type="submit">Send</button>
		</p>
	</form>
</template>

<style lang="postcss" scoped>
</style>