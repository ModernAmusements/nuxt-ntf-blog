<script>
import Header from "@/components/global/Header.vue"
import Footer from "@/components/global/Footer.vue"
export default {
  components: {
    Header,
    Footer
  },
};
</script>
<template>
  <div class="wrapper">
    <Header />
    <nuxt />
    <!-- <ColorModePicker /> -->
    <Footer />
  </div>
</template>