<script>
import patternVue from '@/assets/img/pattern_vue.png'
import blogIcon from '@/assets/img/blog_icon.png'
export default {
  data() {
    return {
      patternVue,
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
        <div class="homepage-content-about text-start">
          <h2 class="underline underline-offset-1 text-lg">Hello! I’m Shady</h2>
          <h1 class="display">
            I’m a <span class="text-primary">fullstack web developer</span> from the Germany, Bielefeld.
          </h1>
          <p class="text-md">
            Interested in programming and to code inclusive, effective, and impactful digital products. Logical approach
            to problem solving is my passion. Code perfectionist in the best sense of the word.
          </p>
        </div>
        <img class="mt-8 md:mt-0 w-100" :src="patternVue" alt="..." />
      </div>
      <div class="content-wrapper">
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
          <form class="w-full" name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
            <p class="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
            <p>
            <div class="relative w-full mb-3 pr-0 pr-md-5">
              <label class="block uppercase text-xs font-bold mb-2">Email:</label>
              <input class="w-full" type="text" name="email" />
            </div>
            </p>
            <p>
            <div class="relative w-full mb-3 pr-0 pr-md-5">
              <label class="block uppercase text-xs font-bold mb-2">Message:</label>
              <textarea class="w-full" name="message"></textarea>
            </div>
            </p>
            <p>
              <button class="btn w-full" type="submit">Send</button>
            </p>
          </form>

          <!-- <form name="contact" method="POST" data-netlify="true">

            <div class="flex justify-start flex-wrap">
              <div class="relative w-full mb-3 pr-0 pr-md-5">
                <label class="block uppercase text-xs font-bold mb-2">Name</label>
                <input type="text" name="name" class="focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Name" />
              </div>
       
              <div class="relative w-full mb-3 pl-0 pl-md-5">
                <label class="block uppercase text-xs font-bold mb-2">Email</label>
                <input type="email" name="email" class="focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email" />
              </div>
            </div>

            <div class="flex justify-start">
              <div class="mb-3 w-full">
                <label class="block uppercase text-xs font-bold mb-2">Your Role:</label>
                <select name="role[]" multiple
                  class="form-select appearance-none w-full px-3 py-1.5 text-base font-normal bg-clip-padding bg-no-repeat border bg-grey-100 border-solid border-primary rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none">
                  <option value="recruiter">Recruiter</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="headhunter">Headhunter</option>
                  <option value="else">Else</option>
                </select>
              </div>
 
            </div>
            <div class="w-full mb-3">
              <label class="block uppercase text-xs font-bold mb-2">Message</label>
              <textarea class="w-full" name="message"></textarea>
            </div>
   
            <button
              class="btn shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
              type="button">
              Submit
            </button>

          </form> -->
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
