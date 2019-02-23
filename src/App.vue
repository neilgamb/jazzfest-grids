<template>
  <div id="app">
    <Masthead
      :currentDay="currentDay"
      :setCurrentDay="setCurrentDay"
      :dates="getDates(currentPeriod)"
      class="masthead"
    />
    <Grids
      :currentDay="currentDay"
      :setCurrentDay="setCurrentDay"
      :showDetailsOpen="showDetailsOpen"
      :dates="getDates(currentPeriod)"
      :grids="getGrids(currentPeriod)"
      class="grids"
    />
    <Tabs :activeTab="currentPeriod" :setActiveTab="setActiveTab" class="weekend-switch-container"/>

    <modals-container/>
  </div>
</template>

<script>
import Grids from "./components/Grids";
import Masthead from "./components/Masthead";
import Tabs from "./components/Tabs";
import ShowDetailsModal from "./components/ShowDetailsModal";
import { data } from "./assets/data.js";
import { collateGrids } from "./helpers.js";

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
      currentShowDetails: null,
      dates: data.dates,
      grids: collateGrids(data.grids)
    };
  },
  methods: {
    setCurrentDay: function(day) {
      this.currentDay = day;
    },
    setActiveTab: function(tab) {
      this.currentPeriod = tab;
      this.currentDay = 0;
    },
    showDetailsOpen: function(showDetails) {
      this.currentShowDetails = showDetails;
      this.$modal.show(
        ShowDetailsModal,
        {
          show: this.currentShowDetails,
          showDetailsClose: this.showDetailsClose
        },
        {
          adaptive: true,
          width: "100%",
          height: "100%"
        }
      );
    },
    showDetailsClose: function() {
      this.currentShowDetails = null;
    },
    getDates: function(period) {
      const { dates } = this;
      return dates.filter(date => date.period === period);
    },
    getGrids: function(period) {
      const { grids } = this;
      return grids.filter(
        grid => grid.period === period && grid.day === this.currentDay
      );
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
  background: rgb(15, 15, 15);
  color: white;
}

.masthead {
  border-bottom: 2px solid white;
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
