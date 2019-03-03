<template>
  <div>
    <CardStack v-bind:cards="data"/>
    <Panel>
      <h2 class="title">Blade Runner 2049</h2>
      <h3 class="date">
        Coming in
        <span>Coming in 10.6.17</span>
      </h3>
    </Panel>
  </div>
</template>

<script>
import Vue from "vue"
import CardStack from "@/components/CardStack/CardStack.vue"
import Panel from "@/components/Panel.vue"

import { data } from "@/assets/data"

export default Vue.extend({
  components: {
    CardStack,
    Panel,
  },
  data: () => ({ data }),
})
</script>

<style scoped lang="scss">
.title {
  font-size: 16px;
  line-height: 22px;
}

.date {
  font-size: 11px;
  line-height: 15px;
  color: #9ba7c6;
}
</style>
