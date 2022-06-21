<template>
  <main>
    <section class="self-center flex flex-row flex-1 items-center justify-center">
      <div class="hero-logo">
        <Logo />
      </div>
      <h1 class="text-center ml-5">modernAmusements</h1>
    </section>

    <section class="mt-8">
      <h3 class="text-primary-600 dark:text-primary-400 max-w-5xl mx-auto uppercase">
        Latest blog post
      </h3>
      <posts post-type="blog" :amount="3" />
    </section>
  </main>
</template>

<style>
hero-logo+logo {
  width: 100%;
  height: auto;
}
</style>