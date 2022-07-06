<template>
  <nuxt-link @click.native="to ? null : $router.go(-2)" :to="to ? to : '/'">
    <== <slot>go back</slot>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: { // ? Override with a path instead of router back
      type: String,
      default: '',
    },
  },
}
</script>