<script>
export default {
  name: "ParallaxItem",
};
const CenterCoordinates = {
  computed: {
    centerX() {
      return this.width / 2;
    },
    centerY() {
      return this.height / 2;
    },
    height() {
      return this.$parent.$el.offsetHeight;
    },
    width() {
      return this.$parent.$el.offsetWidth;
    },
  },
};

const ParallaxItem = {
  mixins: [CenterCoordinates],
  props: {
    mousePos: {
      default: {
        x: 0,
        y: 0,
      },

      type: Object,
    },

    xScale: {
      default: 0,
      type: Number,
    },

    yScale: {
      default: 0,
      type: Number,
    },
  },

  template: `
		<div>
			<slot></slot>
		</div>
	`,
  watch: {
    mousePos: {
      deep: true,
      handler() {
        this.translate();
      },
    },
  },

  methods: {
    translate() {
      const xPercentFromCenter = ((this.mousePos.x - this.centerX) / this.width) * 2;
      const yPercentFromCenter = ((this.mousePos.y - this.centerY) / this.height) * 2;

      const xTranslateAmount = this.centerX * xPercentFromCenter * this.xScale;
      const yTranslateAmount = this.centerY * yPercentFromCenter * this.yScale;

      this.$slots.default[0].elm.style.transform = `
				translateX(${xTranslateAmount}px)
				translateY(${yTranslateAmount}px)
			`;
    },
  },
};

mounted();
this.$el.addEventListener("mousemove", (e) => {
  window.requestAnimationFrame(() => {
    this.mousePos.x = e.clientX;
    this.mousePos.y = e.clientY;
  });
});
</script>
<template>
  <div id="parallax">
    <div class="container h-screen mx-auto pos-relative">
      <parallax-item
        class="pos-absolute layer-1"
        :mouse-pos="mousePos"
        x-scale="0.1"
        y-scale="0.1"
      >
        <img src="/layer-1.svg" />
      </parallax-item>
      <parallax-item
        class="pos-absolute layer-2"
        :mouse-pos="mousePos"
        x-scale="0.15"
        y-scale="0.15"
      >
        <img src="/layer-2.svg" />
      </parallax-item>
      <parallax-item
        class="pos-absolute layer-3"
        :mouse-pos="mousePos"
        x-scale="0.2"
        y-scale="0.2"
      >
        <img src="/layer-3.svg" />
      </parallax-item>
      <parallax-item
        class="pos-absolute layer-4"
        :mouse-pos="mousePos"
        x-scale="0.125"
        y-scale="0.1"
      >
        <img class="" src="/layer-4.svg" />
      </parallax-item>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
