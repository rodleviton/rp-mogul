<template>
  <div class="container">
    <Card
      v-for="(item, index) in stack"
      :src="item.cover"
      :scale="item.imageScale"
      :speed="speed"
      :isDragging="isDragging"
      :isSelected="index === 1 && isDetailView"
      :opacity="item.imageOpacity"
      :key="item._uuid"
      :style="{
        borderRadius: item.borderRadius,
        top: `${item.yPos}px`,
        width: `${item.width}px`,
        height: `${item.height}px`,
        opacity: item.opacity,
        display: index > maxVisibleCards + 2 ? 'none' : 'flex',
        zIndex: item.zIndex,
        position: 'absolute',
        transition: `all ${isDragging ? 0 : speed}s ease`,
        transform: `
          scale(${item.scale}, ${item.scale}) 
          translate(${item.xPos}px, 0)
        `,
        transformOrigin: item.transformOrigin,
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
    onDetailViewMove: {
      type: Function,
      required: true,
    },
    onChange: {
      type: Function,
      required: true,
    },
    onSelect: {
      type: Function,
      required: true,
    },
    onDeselect: {
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
      debounceRate: 25,
      dragging: false,
      dragStartX: 0,
      dragStartY: 0,
      isTouch: "ontouchstart" in window,
      isDetailView: false,
      isDragging: false,
      isDraggingLeft: false,
      isDraggingRight: false,
      isDraggingDown: false,
      isDraggingUp: false,
      opacityMultiplier: 0.35,
      scaleMultiplier: 0.075,
      speed: 0.2,
      stack: [],
      stackGutter: 24,
      stackRestPoints: [],
    }
  },
  components: {
    Card,
  },
  methods: {
    moveNext() {
      this.isDraggingRight = true
      this.isDraggingLeft = false
      this.activeCardIndex = 1
      this.$data.stack[
        this.activeCardIndex
      ].xPos = this.activeCardMaxTravelDistance

      this.updateStack()
    },
    movePrevious() {
      this.isDraggingRight = false
      this.isDraggingLeft = true
      this.activeCardIndex = 0
      this.$data.stack[this.activeCardIndex].xPos = -this
        .activeCardMaxTravelDistance

      this.updateStack()
    },
    updateStack() {
      const activeCard = this.$data.stack[this.activeCardIndex]
      const activeCardRestPoint = this.stackRestPoints[this.activeCardIndex]
      const distanceTravelled = activeCard.xPos - activeCardRestPoint

      if (this.isDraggingRight) {
        if (distanceTravelled > this.activeCardMaxTravelDistance / 4) {
          const cardToMoveToBottomOfStack = this.$data.stack.shift()
          this.$data.stack.push(cardToMoveToBottomOfStack)
        }
      } else {
        if (distanceTravelled * -1 > this.activeCardMaxTravelDistance / 4) {
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
          this.onStackMove(
            this.activeCardOffset / this.activeCardMaxTravelDistance
          )
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
    moveDetailView(currentYPos) {
      this.isDraggingDown = currentYPos - this.dragStartY > 0
      const MAX_CARD_TRAVEL_DISTANCE = 90
      const activeCard = this.$data.stack[this.activeCardIndex]

      if (this.isDraggingDown) {
        const defaultProps = this.getDefaultCardProps(
          activeCard,
          this.activeCardIndex
        )
        const widthOffset = this.stackWidth - defaultProps.width
        const widthFactor = widthOffset / MAX_CARD_TRAVEL_DISTANCE

        const imageScaleOffset = 0.6 - defaultProps.imageScale
        const imageScaleFactor = imageScaleOffset / MAX_CARD_TRAVEL_DISTANCE

        this.$data.stack = this.$data.stack.map((card, index) => {
          if (index === this.activeCardIndex) {
            return {
              _uuid: card._uuid,
              ...this.getDefaultCardProps(card, index),
              width: card.width - defaultProps.width / MAX_CARD_TRAVEL_DISTANCE,
              height: this.stackHeight,
              xPos: 0,
              imageScale: card.imageScale * imageScaleFactor,
              transformOrigin: `100% 100%`,
              borderRadius: 0,
            }
          }
          return {
            _uuid: card._uuid,
            ...this.getDefaultCardProps(card, index),
          }
        })

        this.onDetailViewMove(1 - widthFactor)
      }
    },
    handleDetailView() {
      this.isDetailView = true
      this.speed = 0.5

      this.$data.stack = this.$data.stack.map((card, index) => {
        if (index === this.activeCardIndex) {
          return {
            _uuid: card._uuid,
            ...this.getDefaultCardProps(card, index),
            width: this.stackWidth,
            height: this.stackHeight,
            xPos: 0,
            imageScale: 0.6,
            transformOrigin: `100% 100%`,
            borderRadius: 0,
          }
        }
        return {
          _uuid: card._uuid,
          ...this.getDefaultCardProps(card, index),
        }
      })

      this.$props.onSelect(this.$data.stack[1].id)
    },
    calculateCardProp(prop, multiplier, defaultMultiplier, isActiveCard) {
      const offset = isActiveCard
        ? defaultMultiplier
        : multiplier / this.activeCardMaxTravelDistance

      return prop + offset * this.activeCardOffset
    },
    getDragXPos(event) {
      return this.isTouch ? event.touches[0].clientX : event.clientX
    },
    getDragYPos(event) {
      return this.isTouch ? event.touches[0].clientY : event.clientY
    },
    onTouchStart(e) {
      this.isDragging = true
      this.dragStartX = this.getDragXPos(e) - this.elementXPosOffset
      this.dragStartY = this.getDragYPos(e)

      this.$el.addEventListener(this.drag, this.onDrag)
    },
    onTouchEnd() {
      this.isDragging = false
      this.dragStartX = 0
      this.dragStartY = 0

      this.$el.removeEventListener(this.drag, this.onDrag)

      if (!this.isDetailView) {
        const offset = this.activeCardOffset / this.activeCardMaxTravelDistance

        // Treat this like a click instead of the user dragging
        if (offset === 0) {
          // this.handleDetailView()
        } else {
          this.updateStack()
        }
      }
    },
    onDrag(event) {
      if (this.isDetailView) {
        this.moveDetailView(this.getDragYPos(event))
      } else {
        this.moveStack(this.getDragXPos(event) - this.elementXPosOffset)
      }
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
        borderRadius: "8px",
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
        transformOrigin: 0,
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
    /**
     * Callbacks
     */
    onStackDeselect() {
      this.isDetailView = false
      this.speed = 0.2

      this.$data.stack = this.$data.stack.map((card, index) => {
        if (index === 1) {
          return {
            _uuid: card._uuid,
            ...this.getDefaultCardProps(card, index),
          }
        }
        return {
          _uuid: card._uuid,
          ...this.getDefaultCardProps(card, index),
        }
      })

      this.$props.onDeselect(this.$data.stack[1].id)
    },
    onStackMove(factor) {
      this.$props.onMove(factor)
    },
    onStackUpdate() {
      this.$props.onChange(this.$data.stack[1].id)
      this.activeCardOffset = 0
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
    // Normalize events for touch devices and desktop
    drag() {
      return this.isTouch ? "touchmove" : "mousemove"
    },
    touchStart() {
      return this.isTouch ? "touchstart" : "mousedown"
    },
    touchEnd() {
      return this.isTouch ? "touchend" : "mouseup"
    },
  },
  mounted() {
    const debouncedOnTouchStart = debounce(this.onTouchStart, this.debounceRate)
    document.addEventListener(this.touchStart, debouncedOnTouchStart)

    const debouncedOnTouchEnd = debounce(this.onTouchEnd, this.debounceRate)
    document.addEventListener(this.touchEnd, debouncedOnTouchEnd)

    const clonedCards = [].concat(this.$props.cards)
    const lastCard = clonedCards.pop()
    clonedCards.unshift(lastCard)

    this.$data.stackRestPoints = this.getStackRestPoints()
    this.$data.stack = clonedCards.map((card, index) => ({
      _uuid: uuid(),
      ...this.getDefaultCardProps(card, index),
    }))

    const onKeyDown = e => {
      const LEFT_ARROW = 37
      const UP_ARROW = 38
      const RIGHT_ARROW = 39
      const DOWN_ARROW = 40

      if (e.which === LEFT_ARROW) {
        if (!this.isDetailView) {
          this.movePrevious()
        }
      } else if (e.which === RIGHT_ARROW) {
        if (!this.isDetailView) {
          this.moveNext()
        }
      } else if (e.which === UP_ARROW) {
        // this.handleDetailView()
      } else if (e.which === DOWN_ARROW) {
        // this.onStackDeselect()
      }
    }

    const debouncedOnKeyDown = debounce(onKeyDown, this.debounceRate)
    document.addEventListener("keydown", debouncedOnKeyDown)

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
