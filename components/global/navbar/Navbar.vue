<script lang="ts" setup>


</script>

<template>
	<!-- Navigation -->
	<ul class="flex">
		<li class="flex-1">
			<nuxt-link class="hidden md:block" to="/">Home</nuxt-link>
		</li>
		<li class="flex-1">
			<nuxt-link class="hidden md:block" to="/blog">Blog</nuxt-link>
		</li>
		<li class="flex-1">
			<nuxt-link class="hidden md:block" to="/projects">Projects</nuxt-link>
		</li>
		<li class="flex-1">
			<nuxt-link class="hidden md:block" to="/#">About</nuxt-link>
		</li>
	</ul>
	<!-- Navigation -->
</template>

<script>
export default {
	name: 'Navigation',
}
</script>

<style lang="postcss" scoped>
li.flex-1 {
	padding: 0 1rem;
}

.nuxt-link-exact-active {
	@apply text-primary font-bold cursor-default;
}
</style>