<template>
  <div>
    <div class="venue">{{ grid.venue.name }}</div>
    <div class="performances">
      <Show :show="show" v-for="show in grid.performances" :key="show.band"/>
    </div>
  </div>
</template>

<script>
import Show from "./Show";

export default {
  name: "Grid",
  props: ["grid"],
  components: {
    Show
  }
};
</script>

<style scoped>
.venue {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 5px;
}
.performances {
  flex: 3;
  /* text-align: left; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>

