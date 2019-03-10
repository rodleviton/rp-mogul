<template>
  <div
    class="panel"
    v-bind:class="{ active }"
    :style="{ transition: `all ${speed}s ease` }"
  >
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue"

export default Vue.extend({
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    speed: {
      type: Number,
      default: () => 0.2,
    },
  },
})
</script>

<style scoped lang="scss">
.panel {
  display: flex;
  text-align: left;
  background: #fff;
  position: absolute;
  bottom: -580px;
  width: 100%;
  height: 667px;
  padding: 24px 24px 38px 24px;
  z-index: 999;
}

.active {
  bottom: -400px;
}
</style>
