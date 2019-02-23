<template>
  <div class="show" v-on:click="showDetailsOpen(show)">
    <div class="time">{{ showTime(show.dateShow) }}</div>
    <div class="band-container">
      <div class="band">{{ show.band }}</div>
      <div v-if="show.featuring.length > 0" class="featuring">
        <div>
          <i>featuring</i>
        </div>
        <div v-for="feature in show.featuring" :key="feature" class="feature">{{ feature }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Show",
  props: ["show", "showDetailsOpen"],
  methods: {
    showTime: function(dateShow) {
      return moment(dateShow).format("h:mm a");
    }
  }
};
</script>

<style scoped>
.show {
  display: flex;
  width: 100%;
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

.show .band-container {
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.featuring {
  font-size: 12px;
  margin-top: 5px;
}

.feature {
  font-size: 14px;
  margin-top: 3px;
}
</style>

