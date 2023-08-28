<template>
  <div
    :class="{ 'simple-keyframe': isClicked }"
    style="border: 5px solid black"
    :style="{ borderColor: `hsl(${mouseX}, 70%, 40%)` }"
    @mousemove="onMouseMove"
  >
    Eine einfache Farbänderung mit CSS.
  </div>
  <button @click="isClicked = !isClicked">Farbanimation</button>
</template>

<script>
export default {
  name: "AnimationsTransitions",
  data() {
    return {
      isClicked: false,
      mouseX: 0,
    };
  },
  methods: {
    onMouseMove(event) {
      this.mouseX = event.clientX;
    },
  },
};
</script>

<style scoped>
@keyframes color-example {
  from {
    background-color: red;
  }
  to {
    background-color: yellow;
  }
}

.simple-keyframe {
  animation-name: color-example;
  animation-duration: 4s;
}
</style>
