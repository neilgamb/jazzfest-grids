<template>
  <div class="show" v-on:click="showDetailsOpen(show)">
    <div class="time">{{ showTime(show.dateShow) }}</div>
    <div class="band">{{ show.band }}</div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Show",
  props: ["show", "showDetailsOpen"],
  methods: {
    showTime: function(dateShow) {
      return moment(dateShow).format("h:mm");
    }
  }
};
</script>

<style scoped>
.show {
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  box-sizing: border-box;
}

.show:not(:first-child) {
  border-top: 1px solid #f0f0f0;
}

.show .time {
  flex: 1;
  font-size: 12px;
}

.show .band {
  flex: 5;
}
</style>

