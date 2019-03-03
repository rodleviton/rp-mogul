<template>
  <h1 class="logo">
    {{title}}
    <div class="period"></div>
  </h1>
</template>

<script>
import Vue from "vue"

export default Vue.extend({
  props: {
    title: String,
  },
})
</script>

<style scoped lang="scss">
.logo {
  align-items: baseline;
  display: flex;
  font-size: 29px;
}

.period {
  width: 5px;
  height: 5px;
  margin-left: 4px;
  background: #ff3366;
}
</style>