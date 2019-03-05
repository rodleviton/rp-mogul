<template>
  <div class="avatar">
    <img v-bind:src="src" />
  </div>
</template>

<script>
import Vue from "vue"

export default Vue.extend({
  props: {
    src: String,
  },
})
</script>

<style scoped lang="scss">
.avatar {
  width: 32px;
  height: 32px;
  border-radius: 20px;
  background: yellow;
  overflow: hidden;
}

.avatar > img {
  width: 100%;
  height: auto;
}
</style>
