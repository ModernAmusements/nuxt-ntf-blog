---
createdAt: 2022-04-04T18:34:26.645Z
title: Laravel Core Concepts
description: In this blog post, we shall be discussing the fundamental concepts
  and all you need to build projects in Laravel.
---
![Laravel Core Concepts](/img/laravelcore.png "Laravel Core Concepts")

In this blog post, we shall be discussing the fundamental school concepts and pretty much all you need to build projects in Laravel. We will also understand various concepts of prototyping databases and API along with some Laravel-specific projects.

**Laravel**

so if you never heard of laravel or you've kind of heard of it but don't know what it does Laravel is a framework and a framework is essentially the starting code to building your project so instead of you having to write out all of these functions and all of these methods and controllers and things the same code for all your projects laravel is like this starter kit it kind of includes almost everything you need so it makes a brilliant force or prototyping or

building projects quickly because it has been built for so many years and they've built up this whole platform where everything you

could need to build a startup or to build a web app is already included so I'm talking like database stuff so there's so much sort of stuff for relationships and handling those

relationships do it neatly rather than having to write out your queries and handle them yourself things like sockets if you want to use socket die o or pusher it's all built in there's tons of API stuff so if you want to take payments again there are kits for that they're all built in so you can use like stripe or Braintree or PayPal nicely and on top of that there's.



A site called packages which is essentially a load of packages that you can include in your project these come through a piece of software called composer and these are packages built by other people other organizations which you can make use of and composer will

keep these up to date and freely handle it all for you so for example if you want to use the Facebook API you can just import a package that will give you a load of functions in PHP.

That you can access nicely and if you've used composer before you'll be familiar with that but in Laravel, there's tons of laravel specific projects as well and you'll see those at some point in this blog anyways Laravel is currently in version 9.x at the time. 



With Laravel you're going to need a program called composer as I say. Composer is the package manager that is the most common one for PHP if you're on a Mac or Linux or a UNIX system.



**Getting Started**

1. Set up an application key so this is like a unique hash it's base64 encoded for your project and that leads me into the dot env file now
2. Effectively an environment file specifies the environment that this project is running so you'll see things like the app URL, the app name, the database credentials male drivers, and things at API keys in here if you want. To store them and effectively if you've got two environments let's say you've got a staging environment for testing and you've got a production environment you can have different database details different app URLs different API keys
3. Run that authentication scaffolding. Generated successfully so as I say this comes out the box and then I need to run PHP artisan serve to get my web server running again when I refresh the browser



This article is about the whole MVC architecture. Behind laravel and behind pretty much any framework nowadays MVC stands for model view controller and these are the three main things that make up an application so starting with:

* **Model:** Models are effectively your data stores. The Model represents a table in the database and these models can be related to each other using relationships just like you would use in Laravel in normal MySQL using a join query you can have multiple. Models that's a collection and then you would loop through a collection to retrieve individual models so that's it so each model usually doesn't always but usually represents a table that's related to it model can also
* **View:** Is pretty much like HTML so it's dealing with the output of data on the screen or in emails but better laravel comes with something called .blade. .blade is there so it's effectively HTML but you can insert these smart little snippets so you can have sections if you want to master the page with the header and the footer and all your JavaScript and then you can have the content separate it means you've only got to ever edit one file if you've done a regular old PHP you probably included a master page but it gets really funny if you want to set titles and things like that laravel have thought of everything so you can't go wrong you can also do things like if statements within the HTML loops so you can echo variables.
* * **Components**: Came out a few versions ago. That's quite recent there's just so much stuff slotting components there's tons of stuff and really for most people it's going to be perfect it saves you so much time if you've ever done regular PHP you might also have done string replaces where you import an HTML file using file get contents and then you string replace various tags within that file I know we used to do it where I work and it's a nightmare after a while so .blade kills it is all for you. You might have also used something like smart templates which are pretty good but .blade is awesome anyway the final:
* **Controllers**: And this is where the actual logic happens so this is where you might process data you might have to do calculations effectively your controller is what links your models to your views. It is what handles the logic and it goes and gets data from your model as it pushes data to your models and then it goes and outputs that view. It's really like the middleman of your project.



 **And that's it for MVC**