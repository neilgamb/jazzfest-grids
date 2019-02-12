<template>
    <carousel 
      :navigateTo="currentDay"
      :per-page="1" 
      :mouse-drag="false"
			:paginationEnabled="false"
      @pageChange="handleSlideChange"
    >
      <slide>
        Section 1
      </slide>
      <slide>
        Section 2
      </slide>
    </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'GridContainer',
  props: ['currentDay', 'setCurrentDay'],
  components: {
    Carousel,
    Slide
  },
  methods: {
    handleSlideChange: function(current){
      this.setCurrentDay(current)
    }
  }
}
</script>
