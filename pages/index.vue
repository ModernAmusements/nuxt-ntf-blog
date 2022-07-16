<script>
import HeroImg from "@/assets/img/ma-hero.svg";
import blogIcon from "@/assets/img/ma-homepage-form-section-2.svg";
export default {
  head() {
    return {
      title: "ModernAmusement => Shady Tawfik",
      meta: [
        {
          name: "og:description",
          property: "og:description",
          content: "ModernAmusement Homepage => Shady Tawfik Bielefeld",
        },
        {
          name: "description",
          property: "description",
          content: "ModernAmusement Homepage => Shady Tawfik Bielefeld",
        },
      ],
    };
  },
  data() {
    return {
      HeroImg,
      blogIcon,
    };
  },
};
</script>

<template>
  <main>
    <!-- Homepage Hero -->
    <section>
      <div class="content-wrapper">
        <!-- Homepage Text -->
        <div class="homepage-content-about text-start">
          <h2 class="text-lg mb-0">Hi all. I am</h2>
          <h1 class="display">
            Shady from Germany, Bielefeld.<br />
            <span class="text-primary"> > fullstack web developer </span>
          </h1>
          <p class="text-sm md:text-base">
            // Code inclusive, effective, impactful products.
            <br />
            // Logical approach to problem solving is my passion.
            <br />
            // Code perfectionist in the best sense of the word.
            <br />
            // Intuitive - Strong perference for engaging UI
            <br />
            // Fast load times and lag free interaction
            <br />
            // Dynamic - Websites don't have to be static
            <br />
          </p>
          <p class="text-xs mb-5">
            A constructive and inclusive <span class="text-primary">blog</span> for
            <span class="text-primary">software developers</span>. With you every step of
            your <span class="text-primary">journey.</span>
            On this blog I share tips and tricks, frameworks, projects, tutorials, etc.
            Make sure you subscribe to get the latest updates
          </p>
          <form
            class="w-full"
            action="/success"
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <p>
              <label class="hidden">
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
            <div class="flex flex-col md:flex-row items-center">
              <p class="">
                <label class="block uppercase text-xs font-bold mb-2">Name: </label>
                <input type="text" name="name" />
              </p>
              <p class="m-0 pl-0 md:pl-5">
                <label class="block uppercase text-xs font-bold mb-2">Email:</label>
                <input type="text" name="email" required />
              </p>
            </div>
            <p class="mt-5">
              <label class="block uppercase text-xs font-bold mb-2">Message:</label>
              <textarea name="message"></textarea>
            </p>
            <p>
              <button class="btn" type="submit">Send</button>
            </p>
          </form>
        </div>
        <!-- Homepage Img -->
        <img class="mt-8 md:mt-0 w-100" :src="HeroImg" alt="..." />
      </div>
    </section>
    <section class="mt-8">
      <h3 class="text-primary-600 dark:text-primary-400">Latest blog post</h3>
      <posts post-type="blog" :amount="3" />
    </section>
  </main>
</template>

<style scoped>
.content-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.homepage-content-about {
  max-width: 750px;
}

form {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.hyphens-auto {
  hyphens: auto;
}

img {
  width: 50%;
  height: auto;
  object-fit: cover;
  max-width: fit-content;
}

input {
  height: 2.6rem;
}

@media (max-width: 1024px) {
  .content-wrapper,
  .content-wrapper-center {
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 3rem;
  }

  img {
    width: 100%;
  }

  .content-wrapper.section-1 img {
    order: 2;
  }
}
</style>
