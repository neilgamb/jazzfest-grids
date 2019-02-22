<template>
  <carousel
    :navigateTo="currentDay"
    :per-page="1"
    :mouse-drag="false"
    :paginationEnabled="false"
    :scrollPerPage="true"
    :perPageCustom="[[0, 1], [480, 2]]"
    @pageChange="handleSlideChange"
  >
    <slide v-for="date in dates" :key="date.date.toString()" class="day">
      <Grid :grid="grid" v-for="grid in grids" :key="grid.venue.name" class="grid"/>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import Grid from "./Grid";

export default {
  name: "Grids",
  props: ["currentDay", "setCurrentDay", "dates", "grids"],
  components: {
    Carousel,
    Slide,
    Grid
  },
  methods: {
    handleSlideChange: function(current) {
      this.setCurrentDay(current);
    }
  }
};
</script>

<style scoped>
.day {
  box-sizing: border-box;
}

.grid {
  display: flex;
  /* height: 100px; */
  border-bottom: 1px solid #f0f0f0;
}

.grids >>> .VueCarousel-wrapper {
  overflow-y: auto;
}
</style>

