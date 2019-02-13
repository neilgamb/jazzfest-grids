<template>
  <div id="app">
    <Navigation :currentDay="currentDay" :setCurrentDay="setCurrentDay" class="navigation"/>
    <GridContainer :currentDay="currentDay" :setCurrentDay="setCurrentDay" class="grid-container" />
    <WeekendSwitch :activeTab="activeTab" :setActiveTab="setActiveTab" class="weekend-switch-container" />
  </div>
</template>

<script>
import GridContainer from './components/GridContainer';
import Navigation from './components/Navigation';
import WeekendSwitch from './components/WeekendSwitch';

export default {
  name: 'app',
  components: {
    Navigation,
    GridContainer,
    WeekendSwitch,
  },
  data(){
    return {
      currentDay: 0,
      activeTab: 0
    }
  },
  methods: {
    setCurrentDay: function(current){
      this.currentDay = current;
    },
    setActiveTab: function(tab){
      this.activeTab = tab;
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: black;
  color: white;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.navigation {
  padding: 10px 5px 5px 5px;
  box-sizing: border-box;
}

.grid-container {
  flex: 1;
}

.weekend-switch-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
