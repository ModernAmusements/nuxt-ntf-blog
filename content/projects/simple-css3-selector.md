---
category: css3
title: Simple CSS3 selector
description: Hiding the last x types of an element.
cover: /img/til-1.png
---
How it Works

(-n+x) while -n=possible elements + <how many should be hidden> (keep in mind - this is not dynamic and should only be used on elements with a finite number of children.

```css
.element:nth-last-of-type(-n + 2) {
  display: none !important;
}
```