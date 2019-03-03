export default {
    maxVisibleCards() {
        return this.$props.maxVisible
    },
    totalCards() {
        return this.$props.cards.length + 2
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
    elementOffsetXPos() {
        return this.$el.getBoundingClientRect().x
    },
    activeCardMaxTravelDistance() {
        return this.cardWidth + this.stackGutter
    },
}