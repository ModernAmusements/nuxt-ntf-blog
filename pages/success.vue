<script>
import patternVue from '@/assets/img/pattern_vue.png'
import blogIcon from '@/assets/img/blog_icon.png'
export default {
	data() {
		return {
			patternVue,
			blogIcon
		}
	},
}
</script>

<template>
	<main>
		<!-- Homepage Hero -->
		<section>
			<div class="content-wrapper">
				<div class="homepage-content-about text-center">
					<h2 class="underline underline-offset-1 text-lg">Thank you for your registration</h2>
					<h1 class="display">
						<span class="text-primary">Welcome to my Webdev Blog</span>
					</h1>
					<p class="text-md">
						Don't worry i send out newsletters every 2 weeks and you can unsubscribe at any time
					</p>
					<nuxt-link to="/"
						class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent">
						Home
					</nuxt-link>
				</div>
				<img class="mt-8 md:mt-0 w-100" :src="patternVue" alt="..." />
			</div>
		</section>
	</main>
</template>

<style scoped>
.content-wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
}

img {
	width: 50%;
	height: auto;
	object-fit: cover;
}

input {
	height: 2.6rem;
}

@media (max-width: 780px) {
	.content-wrapper {
		flex-direction: column;
		justify-content: space-between;
	}

	img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}
}
</style>
