<script>
export default {
  head: {
    title: 'my website title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'Modern Amusement Shady Tawfik',
        name: 'Modern Amusement Shady Tawfik',
        content: 'Shady Tawfik is a German JavaScript/PHP Developer, and a Quality/ Performance Engineer.Fluent in PHP and JavaScript.'
      }
    ],
    link: [{ rel: 'og:image', href: '/static/preview-meta.jpg' }]
  }
}
</script>
  
<template>
  <div class="wrapper">
    <Header />
    <nuxt />
    <ColorModePicker />
    <Footer />
  </div>
</template>