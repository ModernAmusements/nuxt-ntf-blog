---
category: jquery
title: Slick Slider Paganiation with Numbers
description: Slick Slider Paganiation with Numbers  I know you don't like
  sliders any more than I do! Nevertheless, our customers insist on slider again
  and again. For me, a waste of unseen Dom content.
cover: /img/slick-slider.png
gallery:
  - /img/slick-3-cards.png
  - /img/slick-2-cards.png
---
**In this example, I show you how to make numbers out of the pagination points, in connection with the [SlickSlider](https://kenwheeler.github.io/slick/). When I came across this problem I didn't find anything really good, so I would like to share my idea with you. To make things easy i used Bootstrap5.**

```
      $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        infinite: false,
        customPaging: function (slider, i) {
          var thumb = $(slider.$slides[i]).data();
          return '<span class="dot">' + i + '</span>';
        }
      });
```

As you can see the "dots" are replaced by \[i] which stands for the current slide. It is important to note here that the slick slider is built on jQuery and this is only the surface of the actual code. In the pictures below you can see the slick slider in action. With a little jQuery magic the number of the current slides is displayed slightly larger. A [DemoPage](https://modernamusements.github.io/Slick-Slilder-With-Numbers/) is available on GitHub and there you can also have a look at the [sourcecode](https://github.com/ModernAmusements/Slick-Slilder-With-Numbers). I will go into more detail about this slider in the near future and explain in detail how to work with dynamic data and how to create a paganiation like in online stores.