<script>
import Logo from "@/components/global/navbar/Logo.vue";
export default {
  name: "Header",
  components: {
    Logo,
  },
};
</script>


<template>
  <nav class="scrim-bg fixed z-40 top-0 inset-x-0 py-3 px-3" aria-label="Main Menu">
    <nuxt-link class="logo-link" alt="Modern Amusment Logo" to="/">
      <Logo />
    </nuxt-link>
    <ul class="flex">
      <li class="flex-1">
        <nuxt-link class="btn block" to="/">Home</nuxt-link>
      </li>
      <li class="flex-1 ml-2">
        <nuxt-link class="btn block" to="/blog">Blog</nuxt-link>
      </li>
      <li class="flex-1 ml-2">
        <nuxt-link class="btn block" to="/projects">Projects</nuxt-link>
      </li>
    </ul>
  </nav>
</template>


<style lang="postcss" scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-gray-400);
}

.logo-link {
  background-color: transparent !important;
  cursor: pointer !important;
}

.scrim-bg {
  &::before {
    content: "";
    z-index: -1;
    background-color: var(--bg-transparent);
    backdrop-filter: blur(12px);
    @apply absolute bottom-0 inset-x-0 h-20 transition-colors duration-200 ease-in-out;
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
