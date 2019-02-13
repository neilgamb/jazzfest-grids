<template>
  <div id="app">
    <Navigation :currentDay="currentDay" :setCurrentDay="setCurrentDay" class="navigation"/>
    <GridContainer :currentDay="currentDay" :setCurrentDay="setCurrentDay" class="grid-container" />
  </div>
</template>

<script>
import GridContainer from './components/GridContainer';
import Navigation from './components/Navigation';

export default {
  name: 'app',
  components: {
    Navigation,
    GridContainer
  },
  data(){
    return {
      currentDay: 0
    }
  },
  methods: {
    setCurrentDay: function(current){
      this.currentDay = current;
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
  /* padding: 5px 0px; */
  box-sizing: border-box;
}

.navigation {
  padding: 5px;
}

.grid-container {
  flex: 1;
  margin-top: 5px;
}
</style>
