<script>
export default {
  name: "Footer",
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>
<template>
  <footer class="pt-8 pb-4">
    <div>
      <div class="flex flex-wrap text-left">
        <div class="w-full lg:w-6/12 px-4">
          <h3>Let's keep in touch!</h3>
          <h5 class="text-lg mt-0 mb-2  ">
            Find me on any of these platforms, i respond 1-2 business days. Or simply write me an E-Mail.
          </h5>
          <div class="flex mt-6 lg:mb-0 mb-6">
            <a class="btn block mr-1 md:mr-2" href="mailto:shadynathantawfik@gmail.com">
              <span class="hidden md:inline-block">Get in</span> Contact
            </a>
            <Social />
          </div>
        </div>
        <div class="lg:w-6/12">
          <div class="flex flex-wrap items-top mb-6">
            <div class="lg:w-4/12 pl-4">
              <span class="block uppercase dark:text-primary-400 text-sm font-bold mb-2 underline">
                Other Resources
              </span>
              <ul class="list-unstyled">
                <li>
                  <nuxt-link to="/privacy" class="dark:text-primary-400 font-semibold block py-2 mb-2 text-sm">
                    ==> Terms & Conditions
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/privacy" class="dark:text-primary-400 font-semibold block py-2 text-sm ">
                    ==> Privacy
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-4/12 pl-4 ml-auto">
              <span class="block uppercase dark:text-primary-400 text-sm font-bold mb-2 underline">
                Useful Links
              </span>
              <ul class="list-unstyled">
                <li>
                  <a class="hover:color-primary-800 dark:text-primary-400 font-semibold block pb-2 text-sm"
                    href="https://developer.mozilla.org/en-US/">
                    AMDN Web Docs
                  </a>
                </li>
                <li>
                  <a class="hover:color-primary-800 dark:text-primary-400 font-semibold block pb-2 text-sm"
                    href="https://replit.com/">
                    Replit
                  </a>
                </li>
                <li>
                  <a class="hover:color-primary-800 dark:text-primary-400 font-semibold block pb-2 text-sm"
                    href="https://fonts.google.com/">
                    Google Fonts
                  </a>
                </li>
                <li>
                  <a class="hover:color-primary-800 dark:text-primary-400 font-semibold block pb-2 text-sm"
                    href="https://www.producthunt.com/">
                    Producthunt
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="mt-6" />
      <div class="flex flex-wrap items-start justify-start">
        <div class="w-full pl-3 pt-3 text-start">
          <div class="text-sm font-semibold">
            Copyright © {{ date }}
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
li.flex-1 {
  padding: 0 1rem;
}

.nuxt-link-exact-active.nuxt-link-active {
  @apply font-bold cursor-default;
  background-color: var(--color-primary);
  border-radius: 8px;
  padding-left: 0.5rem;
}

footer {
  width: 100%;
  border-top: 1px solid var(--text)
}

hr {
  border: 0;
  border-top: 1px solid var(--text);
}
</style>