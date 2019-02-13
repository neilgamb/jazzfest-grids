<template>
    <carousel 
      :navigateTo="currentDay"
      :per-page="1" 
      :mouse-drag="false"
      :paginationPadding="2"
      :paginationSize="6"
      :scrollPerPage="true"
      :perPageCustom="[[0, 1], [480, 2]]"
      paginationActiveColor="#f0f0f0"
      paginationColor="#666"
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

