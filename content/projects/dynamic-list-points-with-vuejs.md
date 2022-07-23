---
category: vuejs
title: Dynamic List Points with VueJs
description: How to make dynamic list points with VueJs. Here is a small code
  snippet. I hope it helps you. If you have any questions just contact me.
cover: /img/code-1.png
---
## **How it Works**

Vue is designed to make the world easier. accordingly, much of the logic happens in the code itself. 

We can use the v-for directive to render a list of elements based on an array. Or in this case, based on an index. The special :key attribute is mainly used as a hint for Vue's virtual DOM algorithm to identify vnodes when comparing the new list of nodes against the old list.

```
<span v-for=" (menuItem, index) in menuItems":key="index">
```

```
<nuxt-Link :to="menuItem.Link">
```
ist die syntax von nuxt und wird als <a> tag gerendert :to steht für href="".

![Vue3 Code](/img/code-2.png "Vue3 Code")

Thats it. If you want to get into more insights checkout my [Github Repo.](https://github.com/ModernAmusements/Vue3-menu)