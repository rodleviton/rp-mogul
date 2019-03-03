<template>
  <div class="card">
    <slot/>
  </div>
</template>

<script>
import Vue from "vue"

export default Vue.extend({})
</script>

<style scoped lang="scss">
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f3f3;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: -4px 22px 44px 0px rgba(0, 0, 0, 0.05);
  color: #e3e3e3;
  font-size: 22px;
}
</style>