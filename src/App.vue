<template>
  <div id="app">
    <Shell>
      <Header>
        <Logo title="Movies" />
        <Avatar src="img/user/avatar.jpg" />
      </Header>
      <router-view />
    </Shell>
  </div>
</template>

<script>
import Vue from "vue"
import Avatar from "@/components/Avatar.vue"
import Header from "@/components/Header.vue"
import Logo from "@/components/Logo.vue"
import Shell from "@/components/Shell.vue"

export default Vue.extend({
  components: {
    Avatar,
    Header,
    Logo,
    Shell,
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
  padding: 100px 0;
}
</style>
