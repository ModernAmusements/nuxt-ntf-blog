<template>
  <main>
    <!-- Homepage Hero -->
    <section class="self-start flex flex-col flex-1 items-start justify-start">
      <h1 class="text-start">Shady Tawfik</h1>
      <h3 class="text-start">compiling ideas into =>> code</h3>
    </section>
    <!-- Homepage Hero -->
    <!-- Latest blog post -->
    <section class="mt-8">
      <h3 class="text-primary-600 dark:text-primary-400">
        Latest blog post
      </h3>
      <posts post-type="blog" :amount="3" />
    </section>
    <!-- Latest blog post -->
  </main>
</template>

<style>
</style>