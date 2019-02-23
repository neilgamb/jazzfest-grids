<template>
  <div>
    <div class="venue">{{ grid.venue.name }}</div>
    <div class="performances">
      <Show
        v-for="show in grid.performances"
        :showDetailsOpen="showDetailsOpen"
        :show="show"
        :key="show.band"
      />
    </div>
  </div>
</template>

<script>
import Show from "./Show";

export default {
  name: "Grid",
  props: ["grid", "showDetailsOpen"],
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
  flex: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-left: 1px solid #f0f0f0;
}
</style>

