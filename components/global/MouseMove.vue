<script>
import layer1 from "@/assets/img/home/layer-1.svg";
import layer2 from "@/assets/img/home/layer-2.svg";
import layer3 from "@/assets/img/home/layer-3.svg";
import layer4 from "@/assets/img/home/layer-4.svg";
export default {
  data() {
    return {
      layer1,
      layer2,
      layer3,
      layer4,
    };
  },
};
</script>
<template>
  <div class="container h-screen mx-auto pos-relative">
    <div class="pos-absolute layer-1" x-scale="0.1" y-scale="0.1">
      <img :src="layer1" />
    </div>
    <div class="pos-absolute layer-2" x-scale="0.15" y-scale="0.15">
      <img :src="layer2" />
    </div>
    <div class="pos-absolute layer-3" x-scale="0.2" y-scale="0.2">
      <img :src="layer3" />
    </div>
    <div class="pos-absolute layer-4" x-scale="0.125" y-scale="0.1">
      <img class="" :src="layer4" />
    </div>
  </div>
</template>
<style>
.absolute-center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.align-items-center {
  align-items: center;
}

.bg-bubble {
  background-image: repeating-radial-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.4) 25%,
    rgba(255, 255, 255, 0) 50%
  );
}

.bg-primary {
  background-color: black;
}

.bg-light {
  background-color: aliceblue;
}

.bg-light-opaque {
  background-color: rgba(240, 248, 255, 0.7);
}

.container {
  max-width: 1600px;
  max-height: 640px;
}

.d-flex {
  display: flex;
}

.h-screen {
  height: 100vh;
}

.justify-content-center {
  justify-content: center;
}

.ml-4 {
  margin-left: 2rem;
}

.ml-sub-2 {
  margin-left: -1rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.my-0 {
  margin-top: 0;
  margin-bottom: 0;
}

.overflow-hidden {
  overflow: hidden;
}

.pos-absolute {
  position: absolute;
}

.pos-relative {
  position: relative;
}

.layer-1 {
  top: 25%;
  left: 55%;
}

.layer-2 {
  top: 15%;
  left: 25%;
}

.layer-3 {
  top: 55%;
  left: 25%;
}

.layer-4 {
  top: 30%;
  right: 35%;
}
</style>
