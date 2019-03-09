<template>
  <div>
    <CardStack :cards="data" :onChange="onChange" :onMove="onMove" />
    <Panel>
      <div
        v-for="(item, index) in data"
        :key="index"
        :style="{
          position: 'absolute',
          transform: `translate(0, ${getYPosition(index)}px)`,
          transition: `transform ${
            isDragging || !isVisible(index) ? 0 : speed
          }s ease 0s, opacity ${
            isDragging || !isVisible(index) ? 0 : speed
          }s ease 0s`,
          opacity: getOpacity(index),
        }"
      >
        <h2 class="title">{{ item.title }}</h2>
        <h3 class="date">
          Coming in
          <span>{{ item.release }}</span>
        </h3>
      </div>
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
  data: () => ({
    data,
    offset: 20,
    activeIndex: 0,
    factor: 0,
    isDragging: false,
    speed: 0.2,
  }),
  methods: {
    isCurrent(index) {
      return index === this.activeIndex
    },
    isPrevious(index) {
      const previousIndex =
        this.activeIndex > 0 ? this.activeIndex - 1 : this.data.length - 1

      return index === previousIndex
    },
    isNext(index) {
      const nextIndex =
        this.activeIndex < this.data.length - 1 ? this.activeIndex + 1 : 0

      return index === nextIndex
    },
    isVisible(index) {
      return (
        this.isCurrent(index) || this.isPrevious(index) || this.isNext(index)
      )
    },
    onChange(id) {
      this.isDragging = false
      this.activeIndex = this.data.findIndex(item => id === item.id)
    },
    getYPosition(index) {
      if (!this.isDragging) {
        if (this.isPrevious(index)) {
          return -this.offset
        } else if (this.isNext(index)) {
          return this.offset
        } else {
          return 0
        }
      }

      if (this.isCurrent(index)) {
        return 1 - this.factor * this.offset * 2
      } else if (this.isPrevious(index)) {
        return -this.offset + this.factor * -this.offset
      } else if (this.isNext(index)) {
        return this.offset - this.factor * this.offset
      } else {
        return 0
      }
    },
    getOpacity(index) {
      if (!this.isDragging) {
        if (this.isCurrent(index)) {
          return 1
        } else {
          return 0
        }
      } else if (this.factor >= 0) {
        if (this.isCurrent(index)) {
          return 1 - this.factor * 2
        } else if (this.isNext(index)) {
          return this.factor
        } else {
          return 0
        }
      } else if (this.factor < 0) {
        if (this.isCurrent(index)) {
          return 1 + this.factor * 2
        } else if (this.isPrevious(index)) {
          return this.factor * -1
        } else {
          return 0
        }
      }
    },
    onMove(factor) {
      this.isDragging = true
      this.factor = factor
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
