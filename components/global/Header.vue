<template>
  <div class="navigation-module fixed-top">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="navbar navbar-expand">
            <a class="navbar-brand" href="/">
              <img src="" alt="">
            </a>
            <button class="hamburger hamburger--collapse navbar-toggler pe-0" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <span class="arrow-top"></span>
              <ul class="navbar-nav ms-auto has-button">
                <li class="">
                  <nuxt-link class="btn block" to="/">Home</nuxt-link>
                </li>
                <li class="">
                  <nuxt-link class="btn block" to="/blog">Blog</nuxt-link>
                </li>
                <li class="">
                  <nuxt-link class="btn block" to="/projects">Projects</nuxt-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>


<style lang="scss" scoped>
</style>


