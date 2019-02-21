<template>
  <carousel
    :navigateTo="currentDay"
    :per-page="1"
    :mouse-drag="false"
    :paginationEnabled="false"
    :paginationPadding="2"
    :paginationSize="6"
    :scrollPerPage="true"
    :perPageCustom="[[0, 1], [480, 2]]"
    paginationActiveColor="#f0f0f0"
    paginationColor="#666"
    @pageChange="handleSlideChange"
  >
    <slide v-for="date in dates" class="date-container" :key="date">
      <div class="day-of-week">{{ dayOfWeek(date.date) }}</div>
      <div class="calendar-container">
        <div class="month">{{ monthOfYear(date.date) }}</div>
        <div class="day">{{ date.date.getDate() }}</div>
      </div>
    </slide>

  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import { dayOfWeek, monthOfYear } from '../helpers';

export default {
  name: "Masthead",
  props: ["currentDay", "setCurrentDay", "dates"],
  components: {
    Carousel,
    Slide
  },
  methods: {
    handleSlideChange: function(current) {
      this.setCurrentDay(current);
    },
    dayOfWeek: dayOfWeek,
    monthOfYear: monthOfYear,
  }
};
</script>

<style scoped>
.date-container {
  display: flex;
  justify-content: flex-end;
}

.day-of-week {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 15px;
  font-size: 20px;
}

.calendar-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.month {
  font-size: 10px;
}

.day {
  font-size: 20px;
}
</style>