<template>
  <div id="app">
    <Shell>
      <Explorer />
    </Shell>
  </div>
</template>

<script>
import Vue from "vue"
import Shell from "@/components/Shell.vue"
import Explorer from "@/views/Explorer.vue"

export default Vue.extend({
  components: {
    Shell,
    Explorer,
  },
})
</script>

<style lang="scss">
@font-face {
  font-family: "Eina";
  src: url("~@/assets/fonts/eina-03-semibold.woff2") format("woff2"),
    url("~@/assets/fonts/eina-03-semibold.woff") format("woff");
}

#app {
  font-family: "Eina", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1c1c1c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
