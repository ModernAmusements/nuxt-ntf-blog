<template>
  <div>
    <a class="px-3 py-2 flex items-center text-xs font-bold" ref="btnDropdownRef" v-on:click="toggleDropdown($event)">
      Pages
    </a>
    <div ref="popoverDropdownRef" class="text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }">
      <nuxt-link to="/blog" class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent">
        Blog
      </nuxt-link>
      <nuxt-link to="/projects" class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent">
        Projects
      </nuxt-link>
      <nuxt-link to="/about" class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent">
        About
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";

export default {
  data() {
    return {
      dropdownPopoverShow: false,
    };
  },
  methods: {
    toggleDropdown: function (event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
  },
};
</script>
