---
createdAt: 2021-10-13T17:57:40.468Z
title: Gradual switch from jQuery to NuxtJs
description: In the company we have decided to slowly bring our projects up to date.
---
In the company we have decided to slowly bring our projects up to date with the latest software available without being blinded by hyped frameworks. Therefore, the annual surveys of developers such as https://2021.stateofjs.com/de-DE/ play a big role in making a decision. The following points were also particularly important to us.

Adaptation of the software in the software world. 
Documentation
Developer experience while working
and much more

I have established 2 teckstacks in our company, which we use depending on the requirements. Often we connect both stacks but also among themselves. (More about this in a separate blog article)

In this article we want to focus on the one when user experience and design are clearly in the foreground and the content management system does not need an object relational mapping database.

In this case we use:

* Nuxt.js (in "universal mode", where both SEO and speed is great).
* Vue 2
* Vuex (supported by adding to `/store`, but not implemented)
* Bootstrap5
* PWA (install website as standalone app)
* Netlify CMS (no need for a separate server)
* Prettier
* Nuxt-content (w/ exensible support for markdown and code-blocks)

This tech stack doesn't have a cool name but is extremely good for quickly turning a design into a website.

Before me, we only had a tech stack that was basically Laravel. This has not proven to be economical and developer friendly when the website does not require the features that PHP does. 

To get back to the actual content of the article, the switch to NuxtJs. jQuery is a great piece of software and has made life extremely easier for us developers over the years. Mastering the jQuery syntax is still one of the basic requirements for a developer. 

Why NuxtJs? It could just as well have been Svelte, React or something else. But here in Germany and generally in Europe VueJs and NuxtJs is more and more introduced into the everyday life of a developer. 

I could now also go into the CI. But this would go beyond the scope of this article. Therefore I will show the basic differences of the syntax. The great thing about VueJs is that the developer has his logic, his html markup and his styling in one file. This makes the project extremely simple to structure. Also, with NuxtJs we have the advantage that we don't have to worry about routing. This was not possible before, which means that the code that is responsible for a contact form, for example, is distributed over several data in the project. With our new tech stack this is fortunately different. First of all, the VueJs syntax may seem daunting at first. But in the end it is just as simple as HTML5.

Now let's look at the differences in syntax. 

jQuery:

```javascript
$( "#element" ).on( "click", function() {
  console.log( $( this).text() );
});

```

Vanilla JS:

```javascript
var element = document.getElementById('element');
div.addEventListener('click', function(e){
  console.log(this.getAttribute('id'))
});

```

VueJs:

```javascript
VueJs:
<div :class="{'isClicked': isClicked }">
</div>
<button @click="isClicked = !isClicked">
 	Click
</button>

```



As you can see Vuejs is the clear winner because unlike the previous examples all the code is contained in one file. Working with Vuejs and NuxtJs is as intuitive as using an IPhone. It almost makes you wonder why we used to bother with unnecessarily complicated data systems. The advantages are obvious. 



This is just a small example why we are slowly moving to NuxtJs. Of course modularity plays a big role in the economic development but that is a topic for another article. I hope this helped you to get a small insight into the life of a developer, the decision for technology and its syntactical differences.