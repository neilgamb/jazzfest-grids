<template>
  <div id="app">
    <Masthead
      :currentDay="currentDay"
      :setCurrentDay="setCurrentDay"
      :dates="getDates(currentPeriod)"
      class="masthead"
    />
    <Grids :currentDay="currentDay" :setCurrentDay="setCurrentDay" class="grids"/>
    <Tabs :activeTab="currentPeriod" :setActiveTab="setActiveTab" class="weekend-switch-container"/>
  </div>
</template>

<script>
import Grids from "./components/Grids";
import Masthead from "./components/Masthead";
import Tabs from "./components/Tabs";
import { data } from "./assets/data.js";

export default {
  name: "app",
  components: {
    Masthead,
    Grids,
    Tabs
  },
  data() {
    return {
      currentDay: 0,
      currentPeriod: 0,
      initData: data
    };
  },
  mounted() {
    // this.initData = data;
  },
  methods: {
    setCurrentDay: function(day) {
      this.currentDay = day;
    },
    setActiveTab: function(tab) {
      this.currentPeriod = tab;
      this.currentDay = 0;
    },
    getDates: function(period) {
      const { dates } = this.initData;
      return dates.filter(date => date.period === period);
    }
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.masthead {
  border-bottom: 1px solid #f0f0f0;
  padding: 10px;
}

.grids {
  flex: 1;
}

.weekend-switch-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
