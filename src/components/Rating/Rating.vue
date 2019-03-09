<template>
  <div class="rating">
    <Star v-for="n in 5" :key="n" :active="n <= rating" />
  </div>
</template>

<script>
import Vue from "vue"
import Star from "@/components/Rating/Star.vue"

export default Vue.extend({
  components: {
    Star,
  },
  props: {
    rating: {
      type: Number,
      default: () => 0,
    },
  },
})
</script>

<style scoped lang="scss">
.rating {
  display: flex;
  justify-content: space-between;
}
</style>
