<template>
  <div class="parallaxItem">
    <div class="parallaxItem-inner">
      <div class="parallax-image-wrap parallax-image-wrap-0">
        <img :src="parallax.layerOne" class="image" />
      </div>
      <div class="parallax-image-wrap parallax-image-wrap-1">
        <img :src="parallax.layerTwo" class="image" />
      </div>
      <div class="parallax-image-wrap parallax-image-wrap-2">
        <img :src="parallax.layerThree" class="image" />
      </div>
      <div class="parallax-image-wrap parallax-image-wrap-3">
        <img :src="parallax.layerFour" class="image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "parallax",
  props: ["parallax"],
};
</script>

<style>
@keyframes wrap-0 {
  from {
    transform: translateX(-50px) translateY(-50px);
  }

  to {
    transform: translateX(130px) translateY(-50px);
  }
}

@keyframes wrap-1 {
  from {
    transform: translateX(0px) translateZ(-1000px);
  }

  to {
    transform: translateX(0px) translateZ(0px);
  }
}

@keyframes wrap-2 {
  from {
    transform: translateX(-25px);
  }

  to {
    transform: translateX(-105px);
  }
}

@keyframes wrap-3 {
  from {
    transform: translateX(40px) translateY(225px);
  }

  to {
    transform: translateX(40px) translateY(175px);
  }
}

.parallaxItem {
  display: block;
}

.parallaxItem-inner {
  cursor: pointer;
  display: grid;
  height: 100%;
  width: 100%;
  perspective: 200rem;
  place-items: center;
  place-self: center;
  /* transform: rotateY(340deg) rotateX(0deg); */
}

.parallax-image-wrap {
  position: relative;
  z-index: 1;
  transform-origin: center;
  grid-area: 1 / 1;
  pointer-events: none;
  position: relative;
  transform-style: preserve-3d;
}

.parallax-image-wrap-0 {
  transform: translateX(130px) translateY(-50px);
  transition-timing-function: cubic-bezier(0.29, 1.01, 1, -0.68);
  animation-duration: 1s;
  animation-name: wrap-0;
  animation-iteration-count: 1;
  animation-direction: alternate;
}

.parallax-image-wrap-1 {
  transform: translateX(0px) translateZ(0px);
  transition-timing-function: cubic-bezier(0.29, 1.01, 1, -0.68);
  animation-duration: 1s;
  animation-name: wrap-1;
  animation-iteration-count: 1;
  animation-direction: alternate;
}

.parallax-image-wrap-2 {
  transform: translateX(-105px);
  transition-timing-function: cubic-bezier(0.29, 1.01, 1, -0.68);
  animation-duration: 1s;
  animation-name: wrap-2;
  animation-iteration-count: 1;
  animation-direction: alternate;
}

.parallax-image-wrap-3 {
  transform: translateX(40px) translateY(175px);
  transition-timing-function: cubic-bezier(0.29, 1.01, 1, -0.68);
  animation-duration: 1s;
  animation-name: wrap-3;
  animation-iteration-count: 1;
  animation-direction: alternate;
}

.parallax-image-wrap .image {
  width: 100%;
  filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.25));
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
}

@media (max-width: 1024px) {
}
</style>
