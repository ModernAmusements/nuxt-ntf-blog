<script lang="ts" setup>


</script>

<template>
	<!-- CTA -->
	<nuxt-link class="btn block mx-1 md:mx-2" to="#"><span class="hidden md:inline-block">Get in</span> Contact
	</nuxt-link>
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