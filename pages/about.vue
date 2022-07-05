<script>
import aboutImgOne from '@/assets/img/about/about-img-1.png'
import aboutImgTwo from '@/assets/img/about/about-img-2.svg'
import aboutImgThree from '@/assets/img/about/about-img-3.png'
export default {
	data() {
		return {
			aboutImgOne,
			aboutImgTwo,
			aboutImgThree
		}
	},
}
</script>

<template>
	<main>
		<!-- Homepage Hero -->
		<section>
			<div class="content-wrapper">
				<div class="homepage-content-about text-start">
					<h2 class="underline underline-offset-1 text-lg">Compiling Ideas Into Code is my Motto</h2>
					<h1>
						Shady Tawfik is a German <span class="text-primary">JavaScript/PHP Developer</span>, and a
						Quality/Performance Engineer. Fluent in PHP and JavaScript.
					</h1>
					<p class="text-md">
						Interested in frontend frameworks as well as Backend frameworks. Based in Bielefeld, Shady is
						currently the head of frontend at epunks. A full-stack developer knows no limits. And when he
						finds one, he crosses it without hesitation!
					</p>
				</div>
				<img class="mt-8 md:mt-0 w-100" :src="aboutImgOne" alt="..." />
			</div>
			<div class="content-wrapper">
				<img class="mt-8 md:mt-0" :src="aboutImgTwo" alt="..." />
				<div class="homepage-content-blog text-start">
					<h3 class="underline underline-offset-1 text-lg">Capabilities</h3>
					<p class="text-md mb-5">
						7 years of professional work experience. I know both the work in small teams and the challenges
						of working on large projects consisting of large teams that must work together like Swiss
						clockwork.
						<br><br>
						I am currently employed by epunks and hold the position of Head of Frontend and QA Engineer.
						<br><br>
						My CV is available on request, as well as my degrees. (unfortunately, I have been a victim of
						identity theft and have to be very careful with this data).
						<br><br>
						At the moment I can't accept any requests or anything like that because of my working
						relationship with the epunks.
					</p>
					<a class="btn block mr-1 md:mr-2" href="mailto:shadynathantawfik@gmail.com">
						Request CV
					</a>
				</div>
			</div>
			<div class="content-wrapper">
				<div class="homepage-content-blog text-start">
					<h3 class="underline underline-offset-1 text-lg">My Story</h3>
					<p class="text-md mb-5">
						I started experimenting with websites when I was 14 and became interested in computer science
						early on in school. Nevertheless, I decided to study physics after graduating from high school.
						This was also because my father is a physicist and I have always been fascinated by physics and
						numbers.
						<br><br>
						As it turned out today, it was the best decision I could have made, because I was able to learn
						the languages C++ and Java. In the meantime, I started my own business and started programming
						websites. Starting with small landing pages up to whole online stores.
						<br><br>
						After my physics studies, the decision was clear. I wanted to work professionally as a
						developer, but at the same time, I was always fascinated by design, especially Ux Ui design,
						because I designed countless websites during my self-employment.
						<br><br>
						At the moment I can't accept any requests or anything like that because of my working
						relationship with the epunks.
						<br><br>
						To deepen my knowledge in this area I started a bachelor's at the University of Applied Sciences
						Bielefeld with a focus on graphic design and web development. During my studies, I was able to
						work as a freelancer for various studios and thus gain early experience in how the industry
						works and what is important.
						<br><br>
						That's why it was easy for me to start working as a frontend developer at Rewe right after my
						studies. Before that, I was able to go on an exciting journey through the most diverse
						development offices.
					</p>
				</div>
				<img class="mt-8 md:mt-0" :src="aboutImgThree" alt="..." />
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

img,
svg {
	width: 100%;
	height: auto;
	object-fit: cover;
}

input {
	height: 2.6rem;
}

@media (max-width: 1024px) {
	.content-wrapper {
		flex-direction: column;
		justify-content: space-between;
	}

	img,
	svg {
		width: 100%;
		height: auto;
		object-fit: cover;
	}
}
</style>
