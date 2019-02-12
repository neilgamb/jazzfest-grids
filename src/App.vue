<template>
  <div id="app">
    <Navigation :currentDay="currentDay" :setCurrentDay="setCurrentDay" />
    <GridContainer :currentDay="currentDay" :setCurrentDay="setCurrentDay" />
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
      currentDay: 1
    }
  },
  methods: {
    setCurrentDay: function(current){
      this.currentDay = current;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
