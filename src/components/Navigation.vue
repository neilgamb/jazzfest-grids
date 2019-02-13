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
      <slide class="day">
        Thursday
      </slide>
      <slide class="day">
        Friday
      </slide>
    </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'Navigation',
  props: ['currentDay', 'setCurrentDay'],
  components: {
    Carousel,
    Slide
  },
  methods: {
    handleSlideChange: function(current){
      this.setCurrentDay(current);
    }
  }
}
</script>

<style scoped>
.day {
	/* padding: 0px 2px; */
	box-sizing: border-box;
    text-align: right;
}
</style>