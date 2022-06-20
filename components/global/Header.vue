<template>
  <nav
    class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow scrim-bg">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <nuxt-link to="/">
          <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap">
            Mondern Amusements
          </a>
        </nuxt-link>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button" v-on:click="setNavbarOpen">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div class="lg:flex flex-grow items-center" :class="[navbarOpen ? 'block' : 'hidden']"
        id="example-navbar-warning">
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">

          <li class="flex items-center">
            <index-dropdown />
          </li>

          <li class="flex items-center">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold" href="" target="_blank">
              <i class="text-blueGray-400 fab fa-instagram text-lg leading-lg" />
              <span class="lg:hidden inline-block ml-2">Share</span>
            </a>
          </li>

          <li class="flex items-center">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold" href="" target="_blank">
              <i class="text-blueGray-400 fab fa-twitter text-lg leading-lg" />
              <span class="lg:hidden inline-block ml-2">Tweet</span>
            </a>
          </li>

          <li class="flex items-center">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold" href="" target="_blank">
              <i class="text-blueGray-400 fab fa-github text-lg leading-lg" />
              <span class="lg:hidden inline-block ml-2">Star</span>
            </a>
          </li>

          <li class="flex items-center">
            <button
              class="text-xs font-bold  px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
              type="button">
              Get in Contact
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import IndexDropdown from "@/components/Dropdowns/IndexDropdown.vue";

export default {
  data() {
    return {
      navbarOpen: false,
    };
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
  },
  components: {
    IndexDropdown,
  },
};
</script>


<style lang="postcss" scoped>
.scrim-bg {
  &::before {
    content: "";
    z-index: -1;
    background-color: var(--bg);
    @apply absolute bottom-0 inset-x-0 h-12 mb-4 transition-colors duration-200 ease-in-out;
  }
}

.nuxt-link-exact-active {
  @apply text-gray-200 border-gray-400 bg-gray-800 bg-opacity-25 cursor-default;
}

.light {
  &.scrim-bg {
    &::after {
      animation-name: fadeIn2;
      background: linear-gradient(to bottom,
          #e5e7eb,
          cubic-bezier(0.15, 0, 0.45, 1),
          transparent);
    }
  }

  &.nuxt-link-exact-active {
    @apply text-primary-700 border-gray-600 bg-gray-100;
  }
}

/* Need two because of smoother switching between color modes */
@keyframes fadeIn1 {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeIn2 {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
