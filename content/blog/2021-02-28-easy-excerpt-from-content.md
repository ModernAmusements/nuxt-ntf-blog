---
createdAt: 2021-02-28
title: Why I decided to redesign my website
description: The complete refresh of my website, which ended up changing the
  tech stack completely
---
**My website/portfolio was extremely focused on projects I was doing as an employee or freelancer. I realized that while this highlights my skillset, nothing of my personality comes across. That's why I decided to completely rethink my portolio. I questioned how the perfect portfolio of a developer should be structured. And came to the following results, which I would like to share with you.** 


*\*Please keep in mind that I am writing this article to the best of my knowledge at the time of writing and it might not be up to date anymore.*

```js{4,7}\[posts.vue]
computed: {
  placeholderClasses() {
    const classes = ['w-full','w-2/3','w-5/6'];
    return [...Array.from(
      { length: this.amount },
      (value, index) => classes[index % classes.length]
    )]; // repeats classes after one another
  }
},
```