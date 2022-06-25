<script>
import patternVue from "@/assets/img/pattern_vue.png";
export default {
  data() {
    return {
      patternVue
    };
  },
};
</script>

<template>
  <main>
    <!-- Homepage Hero -->
    <section>
      <div class="hero-wrapper">
        <div>
          <div class="w-50">
            <h3 class="text-start">Compiling Ideas Into =>> Code</h3>
            <h1 class="text-start">Hello! I’m Shady. I work with startups and top companies!</h1>
            <p>I’m a fullstack web developer from the Germany. Interested in programming and to code inclusive,
              effective, and
              impactful digital products. Logical approach to problem solving is my passion. Code perfectionist in the
              best
              sense of the word.</p>
            <div class="mt-12">
              <nuxt-link class="btn mr-5" alt="Modern Amusment Blog" to="/blog">Blog</nuxt-link>
              <nuxt-link class="btn" alt="Modern Amusment Blog" to="/About">About</nuxt-link>
            </div>
          </div>
        </div>
        <img class="mt-8 md:mt-0" :src="patternVue" alt="..." />
      </div>
    </section>
    <!-- Homepage Hero -->
    <!-- Latest blog post -->
    <section class="mt-8">
      <h3 class="text-primary-600 dark:text-primary-400">
        Latest blog post
      </h3>
      <posts post-type="blog" :amount="3" />
    </section>
    <!-- Latest blog post -->
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

h3 {
  border-bottom: 1px solid var(--text);
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

