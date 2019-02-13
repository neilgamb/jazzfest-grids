<template>
    <carousel 
      :navigateTo="currentDay"
      :per-page="1" 
      :mouse-drag="false"
			:paginationEnabled="false"
			:scrollPerPage="true"
			:perPageCustom="[[0, 1], [480, 2]]"
      @pageChange="handleSlideChange"
			class="grid-container"
    >
      <slide class="day">
				<div class="event">
					<div class="venue">Venue</div>
					<div class="show">Show Details</div>
				</div>
				<div class="event">
					<div class="venue">Venue</div>
					<div class="show">Show Details</div>
				</div>
				<div class="event">
					<div class="venue">Venue</div>
					<div class="show">Show Details</div>
				</div>
				<div class="event">
					<div class="venue">Venue</div>
					<div class="show">Show Details</div>
				</div>
				<div class="event">
					<div class="venue">Venue</div>
					<div class="show">Show Details</div>
				</div>
				<div class="event">
					<div class="venue">Venue</div>
					<div class="show">Show Details</div>
				</div>
				<div class="event">
					<div class="venue">Venue</div>
					<div class="show">Show Details</div>
				</div>
				<div class="event">
					<div class="venue">Venue</div>
					<div class="show">Show Details</div>
				</div>
				<div class="event">
					<div class="venue">Venue</div>
					<div class="show">Show Details</div>
				</div>
				<div class="event">
					<div class="venue">Venue</div>
					<div class="show">Show Details</div>
				</div>
				<div class="event">
					<div class="venue">Venue</div>
					<div class="show">Show Details</div>
				</div>
				<div class="event">
					<div class="venue">Venue</div>
					<div class="show">Show Details</div>
				</div>
				<div class="event">
					<div class="venue">Venue</div>
					<div class="show">Show Details</div>
				</div>
				<div class="event">
					<div class="venue">Venue</div>
					<div class="show">Show Details</div>
				</div>				
      </slide>
      <slide class="day">
				<div class="event">
					<div class="venue">Venue</div>
					<div class="show">Show Details</div>
				</div>
				<div class="event">
					<div class="venue">Venue</div>
					<div class="show">Show Details</div>
				</div>
				<div class="event">
					<div class="venue">Venue</div>
					<div class="show">Show Details</div>
				</div>
				<div class="event">
					<div class="venue">Venue</div>
					<div class="show">Show Details</div>
				</div>
				<div class="event">
					<div class="venue">Venue</div>
					<div class="show">Show Details</div>
				</div>
				<div class="event">
					<div class="venue">Venue</div>
					<div class="show">Show Details</div>
				</div>
				<div class="event">
					<div class="venue">Venue</div>
					<div class="show">Show Details</div>
				</div>
				<div class="event">
					<div class="venue">Venue</div>
					<div class="show">Show Details</div>
				</div>
				<div class="event">
					<div class="venue">Venue</div>
					<div class="show">Show Details</div>
				</div>
				<div class="event">
					<div class="venue">Venue</div>
					<div class="show">Show Details</div>
				</div>
				<div class="event">
					<div class="venue">Venue</div>
					<div class="show">Show Details</div>
				</div>
				<div class="event">
					<div class="venue">Venue</div>
					<div class="show">Show Details</div>
				</div>
				<div class="event">
					<div class="venue">Venue</div>
					<div class="show">Show Details</div>
				</div>
				<div class="event">
					<div class="venue">Venue</div>
					<div class="show">Show Details</div>
				</div>	
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

<style scoped>
.day {
	/* padding: 0px 2px; */
	box-sizing: border-box;
}

.event {
	display: flex;
	padding: 20px 5px;
	margin-top: 5px;
	background: #666;
	color: white;
}

.venue {
	flex: 1;
}

.show {
	flex: 3;
	text-align: left;
	margin-left: 10px;
}

.grid-container >>> .VueCarousel-wrapper {
	overflow-y: auto;
}
</style>

