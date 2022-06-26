---
createdAt: 2021-02-28
title: Why I decided to redesign my website
description: The complete refresh of my website, which ended up changing the
  tech stack completely
---
**My website/portfolio was highly focused on projects I was doing as an employee or freelancer. While this highlights my skillset, nothing of my personality comes across. That's why I decided to completely rethink my portfolio. I questioned how the perfect portfolio of a developer should be structured. And went to the following results, which I would like to share with you.** 

*\*Please keep in mind that I am writing this article to the best of my knowledge at the time of writing and it might not be up to date anymore.*

## Before

![This is the old website of Shady Tawfik](/img/scr-20220626-qqz.png "MA Old Site")

![Work Page of Shady Tawfiks old Website](/img/scr-20220626-qv8.png "Work Page")

![The Contact Form of Shady Tawfiks Old Website](/img/scr-20220626-qrk.png "Contact Form")

### There was even a dark mode (which was terribly coded btw)

![Dark Mode Work Page](/img/scr-20220626-qve.png "Dark Mode Work Page")

But still, you can only learn from something like this. no code is perfect and no developer is perfect. once you internalize that you can get better at what you do.

```javascript
// DarkMode
let inverted = localStorage.getItem('inverted');
const invertedToggle = document.querySelector('#circle');
const slider = document.querySelector('.sliderToggle');
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const tapevent = 'PointerEvent';
const css = `
    html {
        --pointer - move - line - color: #03f;
    }
    html.inverted {
        --pointer - move - line - color: #f3a;
      /*--background-color: #101214;
      --foreground-color-rgb: 250,255,240;*/
      /*--background-color: #101214;
      --foreground-color-rgb: 250,255,240;*/
      /*--background-color: #131310;
      --foreground-color-rgb: 210,230,255;*/
      /*--background-color: #111;
      --foreground-color-rgb: 234,240,244;*/
      --background-color-alpha: rgb(23,23,29, 0.7);
      --background-color: #111;
      --background-color-elevated: #121217;
      --foreground-color: #DFF1FD;
      --background-color-dark: #000;
      --foreground-color-a: 0.8;
      --base-grid-color1: rgba(240,155,255, 0.1);
      --base-grid-color2: rgba(240,155,255, 0.05);
    }
    html.size-mode-relative {
      --fontSize: calc(100vw / 80);
      --hrThickness: 0.17rem;
    }
    .settings c:nth-child(2n+2) {
        font - feature - settings:'ss02' 1;
      user-select:none;
    }
    .baselineBeacon {
        height: var(--baseline);
      overflow: hidden;
      display: none;
      position: absolute;
    }
    .pointerMoveLine {
        height: 1px;
      pointer-events: none;
      visibility: hidden;
      position: absolute;
      left:0; top:0; right:0;
      background: var(--pointer-move-line-color);
      transform: translate3d(0,0,0);
      opacity:0.4;
    }
    .pointerMoveLine.active {visibility:visible; }
    .pointerMoveLine.pressed {
        opacity:0.8;
      box-shadow:
        0 1px 0 0 var(--pointer-move-line-color),
        0 -1px 0 0 var(--pointer-move-line-color);
    }
    `.trim();
const style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
const link = document.createElement('link');
link.rel = 'stylesheet';
document.head.appendChild(link);
/**
 * If the label exists, set its innerText to the value.
 * @param id - The id of the label to set.
 * @param value - The value of the input field.
 */
function setLabel(id, value) {
  const label = document.getElementById(id);
  label && (label.innerText = value);
}
const enableInverted = () => {
  document.documentElement.classList.add('inverted');
  invertedToggle.classList.add('darkmodeSlide');
  slider.classList.add('sliderToggleActive');
  localStorage.setItem('inverted', 'enabled');
  console.log('Darkemode: ON');
};
const disableInverted = () => {
  document.documentElement.classList.remove('inverted');
  localStorage.setItem('inverted', null);
  console.log('Darkemode: OFF');
};
if (inverted === 'enabled') {
  enableInverted();
}

/* A jQuery function that is toggling the darkmode on and off. */
$('#dark').click(function () {
  invertedToggle.classList.toggle('darkmodeSlide');
  slider.classList.toggle('sliderToggleActive');
/* Getting the inverted from the localStorage. */
  inverted = localStorage.getItem('inverted');
  if (inverted !== 'enabled') {
    enableInverted();
    updateInvertedLabel();
  } else {
    disableInverted();
    updateInvertedLabel();
  }
});
/* Adding an event listener to the darkModeToggle element. */
darkModeToggle.addEventListener('click', () => {
  invertedToggle.classList.toggle('darkmodeSlide');
  slider.classList.toggle('sliderToggleActive');
  inverted = localStorage.getItem('inverted');
/* Checking if the inverted is not equal to enabled, if it is not, it will enable the inverted and
update the inverted label. If it is equal to enabled, it will disable the inverted and update the
inverted label. */
  if (inverted !== 'enabled') {
    enableInverted();
    updateInvertedLabel();
  } else {
    disableInverted();
    updateInvertedLabel();
  }
});
/**
 * It binds a tap event to a label element, and when the label is tapped, it calls the function passed
 * in as the second argument
 * @param msgname - The name of the message to be displayed.
 * @param fn - The function to be called when the user taps the label.
 */
function bindTapableOption(msgname, fn) {
  const label = document.getElementById(msgname + '-msg');
  label && label.parentElement.addEventListener(tapevent, fn);
}
/**
 * It updates the label of the "Dark" button to reflect the current state of the "Dark" mode
 */
function updateInvertedLabel() {
  const on = document.documentElement.classList.contains('inverted');
  setLabel('inverted-msg', on ? 'Dark: On' : 'Dark: Off');
}
/**
 * If the inverted mode is not enabled, enable it. If it is enabled, disable it
 */
function toggleInvertedMode() {
  if (inverted !== 'enabled') {
    updateInvertedLabel();
  } else {
    updateInvertedLabel();
  }
}
/* Binding a tap event to a label element, and when the label is tapped, it calls the function passed
in as the second argument. */
bindTapableOption('inverted', toggleInvertedMode);
updateInvertedLabel();

```

This is a 153-line code that was solely responsible for controlling the dark mode. I have written the code in 2018 and for that, it is not so bad. My approach was insofar interesting, as I have the status of the dark mode in the local storage. So I could ensure that when the user visits the site again his favorite color mode is set.