<template>
  <main>
    <section v-if="posts" class="content-wrapper">
      <h1>Blog</h1>
      <p class="text-lg">Welcome to the best and latest news on Web development current by ModernAmusments.</p>
      <posts post-type="blog" :amount="10" />
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: "Blog => ModernAmusement",
      meta: [
        {
          name: 'og:description',
          property: 'og:description',
          content: 'Welcome to the best and latest news on Web development current by ModernAmusments. => Shady Tawfik Bielefeld',
        },
        {
          name: 'description',
          property: 'description',
          content: 'Welcome to the best and latest news on Web development current by ModernAmusments. => Shady Tawfik Bielefeld',
        },
      ]
    };
  },
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("blog").fetch();
    } catch (e) {
      error({ message: "Blog posts not found" });
    }
    return { posts };
  },
}
</script>
