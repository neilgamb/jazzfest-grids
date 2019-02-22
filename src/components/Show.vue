<template>
  <div class="show">
    <div class="band">{{ show.band }}</div>
    <div class="time">{{ showTime(show.dateShow) }}</div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Show",
  props: ["show"],
  methods: {
    showTime: function(dateShow) {
      return moment(dateShow).format("hh:mm a");
    }
  }
};
</script>

<style scoped>
.show {
  display: flex;
  /* flex: 1; */
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>

