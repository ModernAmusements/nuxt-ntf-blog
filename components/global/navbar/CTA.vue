<script lang="ts" setup>


</script>

<template>
	<!-- CTA -->
	<nuxt-link class="btn block" to="#"><span class="hidden md:inline">Get in </span>Contact</nuxt-link>
	<!-- CTA -->
</template>

<script>
export default {
	name: 'CTA',
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