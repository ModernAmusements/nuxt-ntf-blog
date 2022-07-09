<script>
import HeroImg from '@/assets/img/homepage-section-1.svg'
import blogIcon from '@/assets/img/ma-homepage-form-section-2.svg'
export default {
  metaInfo() {
    return {
      meta: [
        { hid: 'Homepage' },
        { title: 'ModernAmusement by Shady Tawfik' },
        { description: 'Sharing skills in the area of web development. Blogs about the latest trends and greats. and much more.' },
        { image: '/static/preview-meta.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'ModernAmusement by Shady Tawfik' },
        { name: 'twitter:description', content: 'Sharing skills in the area of web development. Blogs about the latest trends and greats. and much more.' },
        { name: 'twitter:image', content: '/static/preview-meta.jpg' },
      ]
    }
  },
  data() {
    return {
      HeroImg,
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
        <!-- Homepage Text -->
        <div class="homepage-content-about text-start">
          <h2 class="underline underline-offset-1 text-lg">Hello! I’m Shady</h2>
          <h1 class="display">
            I’m a <span class="text-primary">fullstack web developer</span> from Germany, Bielefeld.
          </h1>
          <p class="text-md">
            Interested in programming and to code inclusive, effective, and impactful digital products. Logical approach
            to problem solving is my passion. Code perfectionist in the best sense of the word.
          </p>
        </div>
        <!-- Homepage Img -->
        <img class="mt-8 md:mt-0 w-100" :src="HeroImg" alt="..." />
      </div>
      <!-- Homepage Section 1 -->
      <div class="content-wrapper section-1">
        <img class="mt-8 md:mt-0" :src="blogIcon" alt="..." />
        <div class="homepage-content-blog text-start">
          <h3 class="underline underline-offset-1 text-lg">You can expect</h3>
          <h4>
            A constructive and inclusive blog for software developers. With you every step of your journey.
          </h4>
          <p class="text-md mb-5">
            On this blog I share tips and tricks, frameworks, projects, tutorials, etc. Make sure you subscribe to get
            the latest updates
          </p>
          <form class="w-full" action="/success" name="contact" method="POST" netlify-honeypot="bot-field"
            data-netlify="true">
            <p class="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
            <p>
            <div class="relative w-full mb-3 pr-0 pr-md-5">
              <label class="block uppercase text-xs font-bold mb-2">Email:</label>
              <input class="w-full" type="text" name="email" required />
            </div>
            </p>
            <p>
              <button class="btn w-full" type="submit">Send</button>
            </p>
          </form>
        </div>
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
    padding-bottom: 3rem;
  }

  .content-wrapper.section-1 img {
    order: 2
  }
}
</style>
