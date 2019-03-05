<template>
  <div>
    <CardStack :cards="data" :onChange="onActiveTitle"/>
    <Panel>
      <h2 class="title">{{getCardTitle()}}</h2>
      <h3 class="date">
        Coming in
        <span>{{getReleaseData()}}</span>
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
  data: () => ({ data, activeTitle: data[0] }),
  methods: {
    getCardTitle() {
      return this.activeTitle.title
    },
    getReleaseData() {
      return this.activeTitle.release
    },
    onActiveTitle(id) {
      this.activeTitle = this.data.find(item => id === item.id)
    },
  },
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
