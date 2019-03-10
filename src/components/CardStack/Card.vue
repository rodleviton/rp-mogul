<template>
  <div class="card">
    <img
      v-bind:src="src"
      draggable="false"
      :style="{
        opacity: opacity,
        transform: `scale(${getScale()}, ${getScale()}) translate(0, ${
          isSelected ? 130 : 0
        }px)`,
        transition: `transform ${isDragging ? 0 : speed}s, opacity ${
          isDragging ? 0 : speed
        }s`,
      }"
    />
  </div>
</template>

<script>
import Vue from "vue"

export default Vue.extend({
  methods: {
    getScale() {
      if (this.scale === 1) {
        return this.scale / 2
      }

      return (1 - this.scale + 1) / 2
    },
  },
  props: {
    scale: {
      type: Number,
      default: 1,
    },
    speed: {
      type: Number,
      default: () => 0.2,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
    isDragging: {
      type: Boolean,
      default: false,
    },
    src: {
      type: String,
    },
    opacity: {
      type: Number,
      default: 1,
    },
  },
})
</script>

<style scoped lang="scss">
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f3f3;
  overflow: hidden;
  box-shadow: -4px 22px 44px 0px rgba(0, 0, 0, 0.05);
  color: #e3e3e3;
  font-size: 22px;
}
</style>
