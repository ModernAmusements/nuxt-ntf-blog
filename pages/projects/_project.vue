<template>
  <main>
    <section v-if="post">
      <nav class="mb-8" aria-label="go back">
        <router-back class="block" />
      </nav>

      <article>
        <img v-if="post.cover" class="cover-image" :src="post.cover">
        <h6 class="inline py-1 px-2 mr-1 bg-gray dark:text-white text-primary-400 text-sm font-medium rounded-sm">{{
            post.category
        }}</h6>
        <h1 class="">{{ post.title }}</h1>
        <p class="mt-1 mb-8  dark:text-primary-400">{{ post.description }}</p>
        <nuxt-content :document="post" />
        <div v-if="post.gallery" class="nuxt-content">
          <img v-for="image in post.gallery" class="image" :key="image.id" :src="image">
        </div>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description
        }
      ]
    }
  },
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("projects", params.project).fetch();
    } catch (e) {
      error({ message: "Project not found" });
    }
    return { post };
  },

}
</script>

