<template>
  <main>
    <section class="self-center flex flex-col flex-1 items-center justify-center">
      <h1 class="text-center ml-3">Shady Tawfik</h1>
      <h3 class="text-center">compiling ideas into =>> code</h3>
    </section>

    <section class="mt-8">
      <h3 class="text-primary-600 dark:text-primary-400 max-w-5xl mx-auto">
        Latest blog post
      </h3>
      <posts post-type="blog" :amount="3" />
    </section>
  </main>
</template>

<style>
@import url('https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css');
</style>