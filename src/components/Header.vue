<template>
  <header class="header">
    <slot></slot>
  </header>
</template>

<script>
import Vue from "vue"

export default Vue.extend({})
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  padding: 24px;
}
</style>