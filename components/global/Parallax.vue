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
  transform: translateX(130px) translateY(-50px) !important;
  transition-timing-function: ease;
}

.parallax-image-wrap-1 {
  transform: translateX(0px) !important;
  transition-timing-function: ease;
}

.parallax-image-wrap-2 {
  transform: translateX(-105px) !important;
  transition-timing-function: ease;
}

.parallax-image-wrap-3 {
  transform: translateX(40px) translateY(175px) !important;
  transition-timing-function: ease;
}

.parallax-image-wrap .image {
  width: 100%;
  filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.25));
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
}

@media (max-width: 1220px) {
  .parallax {
  }
}

@media (max-width: 1024px) {
}
</style>
