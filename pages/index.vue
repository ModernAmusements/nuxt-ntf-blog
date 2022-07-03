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
      <div class="content-wrapper">
        <div class="homepage-content-about text-start">
          <h2 class="underline underline-offset-1 text-lg">Hello! I’m Shady</h2>
          <h1 class="display">
            I’m a <span class="text-primary">fullstack web developer</span> from the Germany, Bielefeld.
          </h1>
          <p class="text-md">Interested in programming and to code inclusive, effective, and impactful digital products.
            Logical
            approach to problem solving is my passion. Code perfectionist in the best sense of the word.
            <br />
            <br />
            On this blog I share tips and tricks, frameworks, projects, tutorials, etc. Make sure you subscribe to get
            the latest updates
          </p>
          <!-- <form class="flex flex-row flex-wrap items-center py-5" name="blog" method="POST"
            data-netlify-recaptcha="true" netlify-honeypot="bot-field" data-netlify="true">
            <p class="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
            <p>
              <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <div data-netlify-recaptcha="true"></div>
            <p class="pl-5 m-0">
              <button class="btn" type="submit">Send</button>
            </p>
          </form> -->
          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
              <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Your Role: <select name="role[]" multiple>
                  <option value="leader">Leader</option>
                  <option value="follower">Follower</option>
                </select></label>
            </p>
            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
        <img class="mt-8 md:mt-0" :src="patternVue" alt="..." />
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

