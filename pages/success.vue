<script>
import patternVue from "@/assets/img/pattern_vue.png";
import blogIcon from "@/assets/img/blog_icon.png";
export default {
  head() {
    return {
      title: "Success => ModernAmusement",
      meta: [
        {
          name: "og:description",
          property: "og:description",
          content: "Success => Shady Tawfik Bielefeld",
        },
        {
          name: "description",
          property: "description",
          content: "Success => Shady Tawfik Bielefeld",
        },
      ],
    };
  },
  data() {
    return {
      patternVue,
      blogIcon,
    };
  },
};
</script>

<template>
  <main>
    <section>
      <div class="content-wrapper-col">
        <div class="newsletter-success text-center">
          <h2 class="underline underline-offset-1 text-lg">Thank you for your Request</h2>
          <h1 class="display">
            <span class="text-primary">Welcome to my World</span>
          </h1>
          <p class="text-md">I respond 1-2 business days.</p>
          <nuxt-link
            to="/"
            class="text-sm btn pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent"
          >
            Back Home ==>
          </nuxt-link>
        </div>
        <img class="mt-8 md:mt-0 w-100" :src="patternVue" alt="..." />
      </div>
    </section>
  </main>
</template>

<style scoped>
.content-wrapper-col {
  display: flex;
  align-items: center;
  flex-direction: column;
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
