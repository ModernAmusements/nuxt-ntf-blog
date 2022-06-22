<script>
import Logo from "@/components/global/navbar/Logo.vue";
import Social from "@/components/global/navbar/Social.vue";
import Navigation from "@/components/global/navbar/Navigation.vue";
import CTA from "@/components/global/navbar/CTA";
export default {
  name: "Header",
  components: {
    Logo,
    Social,
    Navigation,
    CTA
  },
};
</script>


<template>
  <nav class="scrim-bg fixed z-40 top-0 inset-x-0 py-3 px-3" aria-label="Main Menu">
    <!-- ma logo -->
    <nuxt-link class="logo-link" alt="Modern Amusment Logo" to="/">
      <Logo />
    </nuxt-link>
    <!-- Navigation -->
    <Navigation />
    <section>
      <!-- CTA -->
      <CTA />
      <!-- Nav Social -->
      <Social />
    </section>
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

section {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
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
  @apply text-primary font-bold cursor-default;
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
