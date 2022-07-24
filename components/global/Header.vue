<script>
import Modal from "./navbar/Modal.vue";
export default {
  name: "Header",
  components: { Modal },
};
</script>

<template>
  <nav class="scrim-bg fixed z-40 top-0 inset-x-0 py-3 px-3" aria-label="Main Menu">
    <div class="nav-logo">
      <Logo />
    </div>
    <SidebarMenu />
    <section>
      <Modal />
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

.nav-logo {
  margin-left: 3rem;
}

li.flex-1 {
  padding: 0 1rem;
}

.nuxt-link-exact-active {
  @apply font-bold cursor-default;
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

.menu-mobile {
  top: 69px;
}

.scrim-bg {
  &::before {
    content: "";
    z-index: -1;
    background-color: var(--bg-header);
    backdrop-filter: blur(12px);
    @apply absolute bottom-0 inset-x-0 h-20 transition-colors duration-200 ease-in-out;
  }
}

.primary-bg {
  background-color: var(--bg-header);
  backdrop-filter: blur(12px);
}

.nuxt-link-exact-active {
  @apply font-bold cursor-default;
}

.light {
  &.scrim-bg {
    &::after {
      animation-name: fadeIn2;
      background-color: var(--bg-header);
      backdrop-filter: blur(12px);
    }
  }

  &.nuxt-link-exact-active {
    @apply border-gray-600 bg-gray-100;
  }

  &.nav {
    border-bottom: 1px solid var(--color-gray-400);
  }
}

.modal {
  top: 438%;
  right: -60%;
}

.modal-form {
  padding: 2rem;
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
