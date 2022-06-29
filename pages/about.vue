<script>
import aboutIMG from "@/assets/img/aboutIMG.jpg";
export default {
	data() {
		return {
			aboutIMG
		};
	},
};
</script>

<template>
	<main>
		<div class="container mx-auto px-4">
			<div class="items-center flex flex-wrap">
				<img class="mt-8 md:mt-0 rounded" :src="aboutIMG" alt="Shady Tawfik Webdeveloper Bielefeld Germany" />
				<div class="w-full md:w-5/12 ml-auto mr-auto px-4">
					<div class="md:pr-5">
						<h3 class="text-3xl font-semibold">About Me:</h3>
						<p class="mt-4 text-lg leading-relaxed text-white">
							Shady Tawfik is a German JavaScript/PHP Developer, and a
							Quality/Performance Engineer.
						</p>
						<ul class="list-none mt-6">
							<li class="py-2">
								<div class="flex items-center">

									<div>
										<h4 class="text-white">
											Fluent in PHP and JavaScript, frontend frameworks as well as Backend
											frameworks.
										</h4>
									</div>
								</div>
							</li>
							<li class="py-2">
								<div class="flex items-center">

									<div>
										<h4 class="text-whitek">
											Based in Bielefeld, Shady is currently the head of frontend at epunks.
										</h4>
									</div>
								</div>
							</li>
							<li class="py-2">
								<div class="flex items-center">
									<div>
										<h4 class="text-white">A full-stack developer knows no
											limits. And when he finds one, hecrosses it without hesitation!</h4>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="container mx-auto overflow-hidden pb-20">
			<div class="flex flex-wrap items-center">
				<div class="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
					<h3 class="text-3xl mb-2 font-semibold leading-normal">
						Compiling Ideas Into Code is my Motto!
					</h3>
					<p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
						Capabilities:
					</p>
					<div class="block pb-6">
						<span
							class="text-xs font-semibold inline-block py-1 px-2   rounded-full text-black bg-white uppercase last:mr-0 mr-2 mt-2">
							PHP, Laravel
						</span>
						<span
							class="text-xs font-semibold inline-block py-1 px-2   rounded-full text-black bg-white uppercase last:mr-0 mr-2 mt-2">
							Vuejs/NuxtJS, Vuetify, Vuex
						</span>
						<span
							class="text-xs font-semibold inline-block py-1 px-2   rounded-full text-black bg-white uppercase last:mr-0 mr-2 mt-2">
							Boostrap
						</span>
						<span
							class="text-xs font-semibold inline-block py-1 px-2  rounded-full text-black bg-white uppercase last:mr-0 mr-2 mt-2">
							Tailwindcss
						</span>
						<span
							class="text-xs font-semibold inline-block py-1 px-2  rounded-full text-black bg-white uppercase last:mr-0 mr-2 mt-2">
							MySQL, SQLite
						</span>
						<span
							class="text-xs font-semibold inline-block py-1 px-2  rounded-full text-black bg-white uppercase last:mr-0 mr-2 mt-2">
							Cypress
						</span>
						<span
							class="text-xs font-semibold inline-block py-1 px-2  rounded-full text-black bg-white uppercase last:mr-0 mr-2 mt-2">
							Web Development
						</span>
						<span
							class="text-xs font-semibold inline-block py-1 px-2  rounded-full text-black bg-white uppercase last:mr-0 mr-2 mt-2">
							Custom CMS Platforms
						</span>
						<span
							class="text-xs font-semibold inline-block py-1 px-2  rounded-full text-black bg-white uppercase last:mr-0 mr-2 mt-2">
							Hosting
						</span>
						<span
							class="text-xs font-semibold inline-block py-1 px-2  rounded-full text-black bg-white uppercase last:mr-0 mr-2 mt-2">
							Dev Ops
						</span>

					</div>
					<a href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vn-index"
						target="_blank"
						class="font-bold text-blueGray-700 hover:text-black ease-linear transition-all duration-150">
						View All
						<i class="fa fa-angle-double-right ml-1 leading-relaxed"></i>
					</a>
				</div>

				<div class="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
					<div class="justify-center flex flex-wrap relative">
						<div class="my-4 w-full lg:w-6/12 px-4">
							<a href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vn-index"
								target="_blank">
								<div class="bg-red-600 shadow-lg rounded-lg text-center p-8">
									<img alt="..." class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
										src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg" />
									<p class="text-lg text-black mt-4 font-semibold">
										Svelte
									</p>
								</div>
							</a>
							<a href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vn-index"
								target="_blank">
								<div class="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
									<img alt="..." class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
										src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg" />
									<p class="text-lg text-black mt-4 font-semibold">
										ReactJS
									</p>
								</div>
							</a>
							<a href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
								target="_blank">
								<div class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">
									<img alt="..." class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
										src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg" />
									<p class="text-lg text-black mt-4 font-semibold">
										NextJS
									</p>
								</div>
							</a>
						</div>
						<div class="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
							<a href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vn-index"
								target="_blank">
								<div class="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
									<img alt="..." class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
										src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png" />
									<p class="text-lg text-black mt-4 font-semibold">
										JavaScript
									</p>
								</div>
							</a>
							<a href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vn-index"
								target="_blank">
								<div class="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
									<img alt="..." class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
										src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg" />
									<p class="text-lg text-black mt-4 font-semibold">
										Angular
									</p>
								</div>
							</a>
							<a href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vn-index"
								target="_blank">
								<div class="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
									<img alt="..." class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
										src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg" />
									<p class="text-lg text-black mt-4 font-semibold">
										Vue.js
									</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>


		</div>

	</main>
</template>

<style scoped>
.hero-wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
}

img {
	width: 50%;
	height: auto;
	object-fit: cover;
}


@media (max-width: 780px) {
	.hero-wrapper {
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

