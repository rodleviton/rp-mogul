<template>
  <div class="star" v-bind:class="{ active }" />
</template>

<script>
import Vue from "vue"

export default Vue.extend({
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style scoped lang="scss">
.star {
  background: url("../../assets/img/star.svg");
  background-size: 100%;
  width: 15px;
  height: 15px;
  transform: scale(0.5, 0.5);
  margin: 2px;
  transition: all 0.2s ease;
  opacity: 0.5;
}
.active {
  transform: scale(1, 1);
  opacity: 1;
}
</style>
