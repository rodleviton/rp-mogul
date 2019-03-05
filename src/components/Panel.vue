<template>
  <div class="panel">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue"

export default Vue.extend({})
</script>

<style scoped lang="scss">
.panel {
  text-align: left;
  background: #fff;
  position: absolute;
  bottom: -580px;
  width: 100%;
  height: 667px;
  padding: 24px 24px 38px 24px;
}
</style>
