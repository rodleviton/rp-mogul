export default {
    checkStack() {
        const activeCard = this.$data.stack[this.activeCardIndex]
        const activeCardRestPoint = this.restPoints[this.activeCardIndex]
        const distanceTravelled = activeCard.xPos - activeCardRestPoint

        if (this.isDraggingRight) {
            if (distanceTravelled > this.activeCardMaxTravelDistance / 2) {
                activeCard.xPos = this.stackWidth

                const cardToMoveToBottomOfStack = this.$data.stack.shift()
                this.$data.stack.push(cardToMoveToBottomOfStack)
            }

            this.$data.stack = this.$data.stack.map((card, index) => {
                return {
                    _uuid: card._uuid,
                    ...this.getDefaultCardProps(card, index)
                }
            })
        } else {
            console.log("dragging left")
        }
    },
    updateStack(dragXPos) {
        this.$data.stack = this.$data.stack.map((card, index) => {
            const defaults = this.getDefaultCardProps(card, index)
            const isActiveCard = index === this.activeCardIndex

            this.activeCardOffset = dragXPos - this.dragStartX
            this.isDraggingLeft = dragXPos < this.dragStartX
            this.isDraggingRight = dragXPos > this.dragStartX

            return {
                ...defaults,
                _uuid: card._uuid,
                xPos: this.getCardProp(defaults.xPos, this.cardXPosOffset, 1, isActiveCard),
                opacity: this.getCardProp(defaults.opacity, this.opacityFactor, 0, isActiveCard),
                scale: this.getCardProp(defaults.scale, this.scaleFactor, 0, isActiveCard),
            }
        })
    },
    getCardProp(prop, multiplierFactor, defaultMultiplierValue, isActiveCard) {
        if (this.isDraggingRight) {
            const multiplier = isActiveCard ?
                defaultMultiplierValue :
                multiplierFactor / this.activeCardMaxTravelDistance

            return prop + multiplier * this.activeCardOffset
        }

        return prop
    },
    getDragXPos(e) {
        return this.isTouch ? e.touches[0].clientX : e.clientX
    },
    onTouchStart(e) {
        const dragXPos = this.getDragXPos(e)

        this.isDragging = true
        this.dragStartX = dragXPos - this.elementOffsetXPos
        this.dragStartTime = e.timeStamp

        this.$el.addEventListener(
            this.isTouch ? "touchmove" : "mousemove",
            this.onDrag
        )
    },
    onTouchEnd(e) {
        this.isDragging = false
        this.dragEndTime = e.timeStamp

        this.dragStartX = 0

        this.$el.removeEventListener(
            this.isTouch ? "touchmove" : "mousemove",
            this.onDrag
        )

        this.checkStack()
    },
    onDrag(e) {
        const dragXPos = this.getDragXPos(e)

        this.updateStack(dragXPos - this.elementOffsetXPos)
    },
    getDefaultCardProps(card, index) {
        return {
            id: card.id,
            background: "#fff",
            title: card.title,
            height: this.cardHeight,
            width: this.cardWidth,
            xPos: this.restPoints[index],
            yPos: 0,
            zIndex: this.totalCards - index,
            // opacity: index < this.$props.maxVisible ? 1 - index * this.opacityFactor : 0,
            opacity: 1 - index * this.opacityFactor,
            scale: 1 - index * this.scaleFactor,
        }
    },
    getInitialStackRestPoints() {
        return new Array(this.totalCards + 2)
            .fill("")
            .map(
                (item, index) =>
                this.stackWidth -
                this.cardWidth -
                this.cardXPosOffset * index -
                this.stackGutter
            )
    },
}