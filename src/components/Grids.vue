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
      <div v-for="grid in grids" :key="grid.venue.name" class="grid">
        <div class="venue">{{ grid.venue.name }}</div>
        <div class="show">Show Details</div>
      </div>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Grids",
  props: ["currentDay", "setCurrentDay", "dates", "grids"],
  components: {
    Carousel,
    Slide
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
  height: 100px;
  border-bottom: 1px solid #f0f0f0;
}

.venue {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 5px;
}

.show {
  flex: 3;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
}

.grids >>> .VueCarousel-wrapper {
  overflow-y: auto;
}
</style>

