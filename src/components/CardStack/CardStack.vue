<template>
  <div class="container">
    <Card
      v-for="(item) in stack"
      :key="item.id"
      :style="{ 
          background: item.background,
          top: `${item.yPos}px`, 
          width: `${item.width}px`,
          height: `${item.height}px`,
          zIndex: item.zIndex, 
          opacity: item.opacity,
          position: 'absolute',
          transition: `transform ${isDragging ? 0 : speed}s ease 0s`,
          transform: `scale(${item.scale}, ${item.scale}) translate(${item.xPos}px, 0)`,
          transformOrigin: 0
        }"
    >{{item.title}}</Card>
  </div>
</template>

<script>
import Vue from "vue"
import Card from "@/components/Card.vue"
import { debounce } from "@/utils/debounce"
import methods from "./methods"
import computed from "./computed"
import uuid from "uuid/v4"

export default Vue.extend({
  props: {
    maxVisible: {
      type: Number,
      default: 3,
    },
    cards: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      activeCardIndex: 0,
      activeCardOffset: 0,
      cardWidth: 286,
      cardHeight: 458,
      debounceRate: 50,
      dragging: false,
      dragStartX: 0,
      isTouch: typeof window !== "undefined" && "ontouchstart" in window,
      dragStartTime: 0,
      dragEndTime: 0,
      isDragging: false,
      isDraggingLeft: false,
      isDraggingRight: false,
      opacityFactor: 0.2,
      restPoints: [],
      scaleFactor: 0.1,
      stack: [],
      stackGutter: 24,
      speed: 0.2,
    }
  },
  components: {
    Card,
  },
  methods,
  computed,
  mounted() {
    const debouncedOnTouchStart = debounce(this.onTouchStart, this.debounceRate)
    document.addEventListener(
      this.isTouch ? "touchstart" : "mousedown",
      debouncedOnTouchStart,
    )

    const debouncedOnTouchEnd = debounce(this.onTouchEnd, this.debounceRate)
    document.addEventListener(
      this.isTouch ? "touchend" : "mouseup",
      debouncedOnTouchEnd,
    )

    const clonedCards = [].concat(this.$props.cards)
    const firstCard = clonedCards[0]
    const lastCard = clonedCards[clonedCards.length - 1]
    clonedCards.unshift(lastCard)
    clonedCards.push(firstCard)

    this.$data.restPoints = this.getInitialStackRestPoints()
    this.$data.stack = clonedCards.map((card, index) => ({
      _uuid: uuid(),
      ...this.getDefaultCardProps(card, index),
    }))
  },
})
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 458px;
  position: relative;
}
</style>