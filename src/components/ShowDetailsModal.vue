<template>
  <div class="showDetails">
    <button @click="$emit('close'); showDetailsClose()"> ❌ </button>
    <div>{{ show.band }}</div>
  </div>
</template>

<script>
export default {
  name: "ShowDetailsModal",
  props: ["show", "showDetailsClose"]
};
</script>

<style scoped>

</style>

