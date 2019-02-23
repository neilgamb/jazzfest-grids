<template>
  <div class="showDetailsContainer">
    <div class="showDetails">{{ show.band }}</div>
    <button @click="$emit('close'); showDetailsClose()" class="closeButton">Close</button>
  </div>
</template>

<script>
export default {
  name: "ShowDetailsModal",
  props: ["show", "showDetailsClose"]
};
</script>

<style scoped>
.showDetailsContainer {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.showDetails {
  flex: 12;
}

.closeButton {
  border-top: 2px solid white;
  background: white;
  flex: 1;
}
</style>

