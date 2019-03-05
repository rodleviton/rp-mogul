<template>
  <main class="shell">
    <div class="container">
      <slot></slot>
    </div>
    <div class="shadow" />
  </main>
</template>

<script>
import Vue from "vue"

export default Vue.extend({})
</script>

<style scoped lang="scss">
.shell {
  display: flex;
  justify-content: center;
  position: relative;
}

.container {
  z-index: 2;
  position: relative;
  background: #fff;
  border-radius: 12px;
  width: 375px;
  height: 667px;
  overflow: hidden;
}

.shadow {
  z-index: 1;
  width: 200px;
  height: 100px;
  position: absolute;
  bottom: 0;
  box-shadow: 0px 0px 82px 0px rgba(0, 0, 0, 0.75);
}
</style>
