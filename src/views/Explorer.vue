<template>
  <div>
    <Header
      class="header"
      :style="{
        transform: `scale(${this.getHeaderScale()}) translate(0, ${this.getHeaderOffset()}%)`,
        opacity: getHeaderOpacity(),
        transition: `opacity ${isDetailView ? 0.35 : speed}s, transform ${
          isDetailView ? 0.75 : speed
        }s ease`,
      }"
    >
      <Logo title="Movies" />
      <Avatar src="img/user/avatar.jpg" />
    </Header>
    <CardStack
      class="stack"
      :cards="data"
      :onChange="onChange"
      :onMove="onMove"
      :onSelect="onSelect"
      :onDeselect="onDeselect"
      :style="{
        transform: `translate(0, ${this.getStackYPosition()}px)`,
        transition: `all ${speed}s ease`,
      }"
    />
    <Panel :active="isDetailView" :speed="speed">
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
        <div>
          <h2 class="title">{{ item.title }}</h2>
          <h3 class="date">
            Coming in
            <span>{{ item.release }}</span>
          </h3>
          <div class="description" v-html="item.description" />
        </div>
      </div>
      <div class="rating">
        <Rating :rating="this.getActiveRating()" />
      </div>
    </Panel>
  </div>
</template>

<script>
import Vue from "vue"
import Avatar from "@/components/Avatar.vue"
import CardStack from "@/components/CardStack/CardStack.vue"
import Logo from "@/components/Logo.vue"
import Panel from "@/components/Panel.vue"
import Rating from "@/components/Rating/Rating.vue"
import Header from "@/components/Header.vue"

import { data } from "@/assets/data"

export default Vue.extend({
  components: {
    Avatar,
    CardStack,
    Header,
    Logo,
    Panel,
    Rating,
  },
  data: () => ({
    data,
    offset: 20,
    activeIndex: 0,
    factor: 0,
    isDragging: false,
    speed: 0.2,
    isDetailView: false,
  }),
  methods: {
    getStackYPosition() {
      return this.isDetailView ? 0 : 90
    },
    getHeaderOffset() {
      return this.isDetailView ? -100 : 0
    },
    getHeaderScale() {
      return this.isDetailView ? 1.25 : 1
    },
    getHeaderOpacity() {
      return this.isDetailView ? 0 : 1
    },
    getActiveRating() {
      return this.data[this.activeIndex].rating
    },
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
    onSelect() {
      this.speed = 0.75
      this.isDetailView = true
    },
    onDeselect() {
      this.speed = 0.2
      this.isDetailView = false
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

.header {
  position: absolute;
  height: 90px;
  width: 100%;
}

.date {
  font-size: 11px;
  line-height: 15px;
  color: #9ba7c6;
}

.rating {
  position: absolute;
  right: 12px;
  top: 15px;
}

.description {
  font-size: 16px;
  line-height: 21px;
  color: #b9bbc4;
  margin-top: 40px;
}

.stack {
  position: absolute;
}
</style>
