---
createdAt: 2022-06-27T20:16:51.009Z
title: Why I decided to redesign my website
description: The complete refresh of my website, which ended up changing the
  tech stack completely
---
**My website/portfolio was highly focused on projects I was doing as an employee or freelancer. While this highlights my skillset, nothing of my personality comes across. That's why I decided to completely rethink my portfolio. I questioned how the perfect portfolio of a developer should be structured. And went to the following results, which I would like to share with you.** 

*\*Please keep in mind that I am writing this article to the best of my knowledge at the time of writing and it might not be up to date anymore.*

## Before

![This is the old website of Shady Tawfik](/img/scr-20220626-qqz.png "MA Old Site")

![Work Page of Shady Tawfiks old Website](/img/scr-20220626-qv8.png "Work Page")

### There was even a dark mode (which was terribly coded btw)

![Dark Mode Work Page](/img/scr-20220626-qve.png "Dark Mode Work Page")

But still, you can only learn from something like this. no code is perfect and no developer is perfect. once you internalize that you can get better at what you do.

```javascript
function toggleInvertedMode() {
  if (inverted !== 'enabled') {
    updateInvertedLabel();
  }
}
```
This is a 153-line code that was solely responsible for controlling the dark mode. I have written the code in 2016 and for that, it is not so bad. My approach was insofar interesting, as I have the status of the dark mode in the local storage. So I could ensure that when the user visits the site again his favorite color mode is set.

My old website is written in PHP and I wanted to use Laravel <https://laravel.com/> as a framework for simplicity because it was relatively new at the time. This allowed me to keep my backend and frontend in one project. As CMS I used Kirby <https://getkirby.com/>, and consciously decided against a CSS framework. Not because I don't like them. If it is an economic decision I would always take a CSS framework. But I had time and wanted to show what I can do. Therefore only individual SCSS. I put the site live via Digital Ocean <https://www.digitalocean.com/>. 

![The Contact Form of Shady Tawfiks Old Website](/img/scr-20220626-qrk.png "Contact Form")

During the development, I noticed, that a simple portfolio website is unnecessarily complicated by the use of Laravel. That's why I limited myself to PHP but used Laravel Mix <https://laravel-mix.com/> as a bundler. Laravel Mix is a bundler that is perfect and is very easy to configure. Kirby CMS is the best but also the most expensive CMS I could work with. It is perfectly adapted to the wishes of developers but also designers who need more CMS functions than the maintenance of content. 

I have built many customers a Kirby CMS backend with which they were able to build whole pages (even new pages) themselves. Similar to Elemetor but with x times individualization. I think that's why the price is justified. In addition, Kirby CMS, as well as Laravel Mix is excellently documented. 

Hosting on Digital Ocean was not worth it, as most of the work is done once you have your app set up correctly. 

I think it's important to note that Kirby CMS only stores files and folders, and the content is stored in plain text files. Folders are pages(like in NuxtJS ;). A so-called flat-file database without any relation to each other for example with an ORM.

In the end, I had monthly costs of 20-30 Euro in total. Everything is included, from the SSL certificate, the domain, VPN, etc pp. I averaged the price over a year. For a portfolio site that has no revenue but is there for the external presentation, the price has been very expensive. 

Over time my PHP but also my JavaScript skills have evolved and during this time countless frameworks have been developed, which made me rethink the tech stack of my website completely. 

The goals were simple: 
Modern technology
low costs

I made a conscious decision to write my new portfolio in JavaScript with NuxtJS <https://v3.nuxtjs.org/> and TailwindCSS <https://tailwindcss.com/> since I wrote my last one in PHP. I was attracted by the challenge because the tech stack at my work is based on PHP (Laravel, Blade, Bootstrap, MySQL, etc). It is important to me to keep my knowledge fresh and up to date. And to give the whole thing a little puff I gave myself 7 days until the site should be live. 

You can see the result right now and I hope it was worth it. I will go into more detail in my next blog article about how the 7 days went. And at the same time in 2 weeks (date of the article), a NuxtJS Tailwind CSS tutorial is available, with which you can write your portfolio.