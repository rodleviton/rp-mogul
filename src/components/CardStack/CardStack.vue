<template>
  <div class="container">
    <Card
      v-for="(item, index) in stack"
      :src="item.cover"
      :scale="item.imageScale"
      :isDragging="isDragging"
      :opacity="item.imageOpacity"
      :key="item._uuid"
      :style="{
        top: `${item.yPos}px`,
        width: `${item.width}px`,
        height: `${item.height}px`,
        opacity: item.opacity,
        display: index > maxVisibleCards + 2 ? 'none' : 'flex',
        zIndex: item.zIndex,
        position: 'absolute',
        transition: `transform ${isDragging ? 0 : speed}s ease 0s`,
        transform: `scale(${item.scale}, ${item.scale}) translate(${
          item.xPos
        }px, 0)`,
        transformOrigin: 0,
      }"
    />
  </div>
</template>

<script>
import Vue from "vue"
import Card from "@/components/CardStack/Card.vue"
import { debounce } from "@/utils/debounce"
import uuid from "uuid/v4"

export default Vue.extend({
  props: {
    onMove: {
      type: Function,
      required: true,
    },
    onChange: {
      type: Function,
      required: true,
    },
    maxVisible: {
      type: Number,
      default: () => 3,
    },
    cards: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      activeCardIndex: 1,
      activeCardOffset: 0,
      cardWidth: 286,
      cardHeight: 458,
      debounceRate: 10,
      dragging: false,
      dragStartX: 0,
      isTouch: "ontouchstart" in window,
      isDragging: false,
      isDraggingLeft: false,
      isDraggingRight: false,
      opacityMultiplier: 0.35,
      stackRestPoints: [],
      scaleMultiplier: 0.075,
      stack: [],
      stackGutter: 24,
      speed: 0.2,
    }
  },
  components: {
    Card,
  },
  methods: {
    updateStack() {
      const activeCard = this.$data.stack[this.activeCardIndex]
      const activeCardRestPoint = this.stackRestPoints[this.activeCardIndex]
      const distanceTravelled = activeCard.xPos - activeCardRestPoint

      if (this.isDraggingRight) {
        if (distanceTravelled > this.activeCardMaxTravelDistance / 3) {
          const cardToMoveToBottomOfStack = this.$data.stack.shift()
          this.$data.stack.push(cardToMoveToBottomOfStack)
        }
      } else {
        if (distanceTravelled * -1 > this.activeCardMaxTravelDistance / 3) {
          const cardToMoveToTopOfStack = this.$data.stack.pop()
          this.$data.stack.unshift(cardToMoveToTopOfStack)
        }
      }

      this.$data.stack = this.$data.stack.map((card, index) => {
        return {
          _uuid: card._uuid,
          ...this.getDefaultCardProps(card, index),
        }
      })

      this.onStackUpdate()
    },
    moveStack(dragXPos) {
      this.$data.stack = this.$data.stack.map((card, index) => {
        const defaults = this.getDefaultCardProps(card, index)
        const cardPosition = this.getCardStackPosition(index)

        this.activeCardOffset = dragXPos - this.dragStartX
        this.isDraggingLeft = dragXPos < this.dragStartX
        this.isDraggingRight = dragXPos > this.dragStartX

        if (this.isDraggingRight) {
          this.activeCardIndex = 1
        } else {
          this.activeCardIndex = 0
        }

        const isActiveCard = index === this.activeCardIndex

        if (isActiveCard) {
          this.onMove(this.activeCardOffset / this.activeCardMaxTravelDistance)
        }

        return {
          ...defaults,
          _uuid: card._uuid,
          xPos: this.calculateCardProp(
            defaults.xPos,
            this.cardXPosOffset,
            1,
            isActiveCard
          ),
          opacity: this.isCardVisible(cardPosition) ? 1 : 0,
          imageOpacity: this.isCardVisible(cardPosition)
            ? this.calculateCardProp(
                defaults.imageOpacity,
                this.opacityMultiplier,
                0,
                isActiveCard
              )
            : 0,
          scale: this.calculateCardProp(
            defaults.scale,
            this.scaleMultiplier,
            0,
            isActiveCard
          ),
          imageScale: this.calculateCardProp(
            defaults.imageScale,
            this.scaleMultiplier * 4,
            0,
            isActiveCard
          ),
        }
      })
    },
    calculateCardProp(prop, multiplier, defaultMultiplier, isActiveCard) {
      const offset = isActiveCard
        ? defaultMultiplier
        : multiplier / this.activeCardMaxTravelDistance

      return prop + offset * this.activeCardOffset
    },
    getDragXPos(e) {
      return this.isTouch ? e.touches[0].clientX : e.clientX
    },
    onTouchStart(e) {
      const dragXPos = this.getDragXPos(e)

      this.isDragging = true
      this.dragStartX = dragXPos - this.elementXPosOffset
      this.$el.addEventListener(
        this.isTouch ? "touchmove" : "mousemove",
        this.onDrag
      )
    },
    onTouchEnd() {
      this.isDragging = false
      this.dragStartX = 0
      this.$el.removeEventListener(
        this.isTouch ? "touchmove" : "mousemove",
        this.onDrag
      )
      this.updateStack()
    },
    onDrag(e) {
      const dragXPos = this.getDragXPos(e)

      this.moveStack(dragXPos - this.elementXPosOffset)
    },
    getCardStackPosition(index) {
      return index - 1 // this is the first card that is positioned offScreen
    },
    getCardProp(index, multiplier) {
      const prop = 1 - index * multiplier

      return prop <= 1 ? (prop < 0 ? 0 : prop) : 1
    },
    isCardVisible(index) {
      return index < this.$props.maxVisible
    },
    getDefaultCardProps(card, index) {
      const cardPosition = this.getCardStackPosition(index)

      return {
        id: card.id,
        background: "#fff",
        title: card.title,
        height: this.cardHeight,
        width: this.cardWidth,
        xPos: this.stackRestPoints[index],
        yPos: 0,
        zIndex: this.totalCards - index,
        opacity: this.isCardVisible(cardPosition) ? 1 : 0,
        imageOpacity: this.isCardVisible(cardPosition)
          ? this.getCardProp(cardPosition, this.opacityMultiplier)
          : 0,
        scale: this.getCardProp(cardPosition, this.scaleMultiplier),
        imageScale: this.getCardProp(cardPosition, this.scaleMultiplier * 4),
        cover: card.cover,
        isVisible: this.isCardVisible(cardPosition),
      }
    },
    getStackRestPoints() {
      return new Array(this.totalCards).fill("").map((item, index) => {
        if (index === 0) {
          return this.stackWidth
        }

        const cardPosition = this.getCardStackPosition(index)
        const offset = this.cardXPosOffset * cardPosition

        return this.stackWidth - this.cardWidth - offset - this.stackGutter
      })
    },
    onStackMove(percentage) {
      this.$props.onMove(percentage)
    },
    onStackUpdate() {
      this.$props.onChange(this.$data.stack[1].id)
    },
  },
  computed: {
    maxVisibleCards() {
      return this.$props.maxVisible
    },
    totalCards() {
      return this.$props.cards.length
    },
    cardXPosOffset() {
      return (
        (this.stackWidth - this.stackGutter * 2 - this.cardWidth) /
        (this.maxVisibleCards - 1)
      )
    },
    stackWidth() {
      return this.$el.clientWidth
    },
    stackHeight() {
      return this.$el.clientHeight
    },
    elementXPosOffset() {
      return this.$el.getBoundingClientRect().x
    },
    activeCardMaxTravelDistance() {
      return this.cardWidth + this.stackGutter
    },
  },
  mounted() {
    const debouncedOnTouchStart = debounce(this.onTouchStart, this.debounceRate)
    document.addEventListener(
      this.isTouch ? "touchstart" : "mousedown",
      debouncedOnTouchStart
    )

    const debouncedOnTouchEnd = debounce(this.onTouchEnd, this.debounceRate)
    document.addEventListener(
      this.isTouch ? "touchend" : "mouseup",
      debouncedOnTouchEnd
    )

    const clonedCards = [].concat(this.$props.cards)
    const lastCard = clonedCards.pop()
    clonedCards.unshift(lastCard)

    this.$data.stackRestPoints = this.getStackRestPoints()
    this.$data.stack = clonedCards.map((card, index) => ({
      _uuid: uuid(),
      ...this.getDefaultCardProps(card, index),
    }))

    this.onStackUpdate()
  },
})
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 458px;
  position: relative;
  cursor: grab;
}
</style>
