<template>
  <main>
    <section v-if="posts" class="w-full">
      <h1 class="title">Projects</h1>
      <posts post-type="projects" :amount="10" />
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: "Projects => ModernAmusement",
      meta: [
        {
          name: 'og:description',
          property: 'og:description',
          content: 'ModernAmusement Projects => Shady Tawfik Bielefeld',
        },
        {
          name: 'description',
          property: 'description',
          content: 'ModernAmusement Projects => Shady Tawfik Bielefeld',
        },
      ]
    };
  },
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("projects").fetch();
    } catch (e) {
      error({ message: "Projects not found" });
    }
    return { posts };
  },
}
</script>
