<script>
import HeroImg from "@/assets/img/ma-hero.svg";
import blogIcon from "@/assets/img/ma-homepage-form-section-2.svg";
import Parallax from "/components/global/Parallax";
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
  components: {
    Parallax,
  },
  data() {
    return {
      HeroImg,
      blogIcon,
      parallaxItems: [
        {
          layerOne: require("/assets/img/home/layer-1.svg"),
          layerTwo: require("/assets/img/home/layer-2.svg"),
          layerThree: require("/assets/img/home/layer-3.svg"),
          layerFour: require("/assets/img/home/layer-4.svg"),
        },
      ],
    };
  },
  methods: {
    mousemove(e) {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let parallax = document.querySelectorAll(".parallax .parallaxItem");

      for (let i = 0; i < parallax.length; i++) {
        let para = parallax[i];
        // Img wrap 1
        let para_image = para.querySelector(".parallax-image-wrap");
        // Img wrap 1
        let img_x = mouseX - this.coords(para_image).x;
        let img_y = mouseY - this.coords(para_image).y;
        para_image.style.transform = `translateY(-${img_y / 20}px) translateX(-${
          img_x / 20
        }px) translateX(140px) translateZ(100px)`;
        // Img wrap 2
        let para_image_2 = para.querySelector(".parallax-image-wrap-1");
        // Img wrap 2
        let img_2_x = mouseX - this.coords(para_image_2).x;
        let img_2_y = mouseY - this.coords(para_image_2).y;
        para_image_2.style.transform = `translateY(-${img_2_y / 20}px) translateX(-${
          img_2_x / 20
        }px) translateZ(200px)`;
        // Img wrap 3
        let para_image_3 = para.querySelector(".parallax-image-wrap-2");
        // Img wrap 3
        let img_3_x = mouseX - this.coords(para_image_3).x;
        let img_3_y = mouseY - this.coords(para_image_3).y;
        para_image_3.style.transform = `translateY(-${img_3_y / 20}px) translateX(-${
          img_3_x / 20
        }px) translateX(-140px) translateZ(300px)`;
        // Img wrap 3
        let para_image_4 = para.querySelector(".parallax-image-wrap-3");
        // Img wrap3
        let img_4_x = mouseX - this.coords(para_image_4).x;
        let img_4_y = mouseY - this.coords(para_image_4).y;
        para_image_4.style.transform = `translateY(-${img_4_y / 20}px) translateX(-${
          img_4_x / 20
        }px) translateX(45px) translateZ(400px)`;
      }
    },
    coords(el) {
      let coords = el.getBoundingClientRect();

      // It's getting the coordinates of the element and dividing it by 2.
      return {
        x: coords.left,
        y: coords.top,
      };
    },
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
                <input class="mb-2 md:mb-0" type="text" name="name" />
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
        <!-- <img class="mt-8 md:mt-0 w-100" :src="HeroImg" alt="..." /> -->
        <div @mousemove="mousemove">
          <section class="parallax">
            <Parallax
              v-for="parallax in parallaxItems"
              :key="parallax.color"
              :parallax="parallax"
            />
          </section>
        </div>
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

.parallax {
  display: flex;
  max-width: 1280px;
  padding: 6rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.homepage-content-about {
  max-width: 720px;
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

@media (max-width: 1220px) {
  .homepage-content-about {
    max-width: 540px;
  }

  .parallax {
    width: 540px;
    padding: 2rem;
  }
}

@media (max-width: 1024px) {
  .content-wrapper,
  .content-wrapper-center {
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 3rem;
  }

  .parallax {
    width: 100%;
  }

  .parallax-image-wrap {
    transform: scale(0.9) translateX(75px) translateY(-80px) !important;
    transition-timing-function: ease;
  }

  .parallax-image-wrap-1 {
    transform: scale(1.5) translateX(0px) !important;
    transition-timing-function: ease;
  }

  .parallax-image-wrap-2 {
    transform: scale(0.9) translateX(-105px) !important;
    transition-timing-function: ease;
  }

  .parallax-image-wrap-3 {
    transform: scale(0.9) translateX(40px) translateY(175px) !important;
    transition-timing-function: ease;
  }

  img {
    width: 100%;
  }

  .content-wrapper.section-1 img {
    order: 2;
  }
}
</style>
