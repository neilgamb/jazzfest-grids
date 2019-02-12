<template>
    <carousel 
      :navigateTo="currentDay"
      :per-page="1" 
      :mouse-drag="false"
      @pageChange="handleSlideChange"
    >
      <slide>
        Thursday
      </slide>
      <slide>
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
      this.setCurrentDay(current)
    }
  }
}
</script>
