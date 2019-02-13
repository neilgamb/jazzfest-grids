<template>
  <div>
    <div v-on:click="handleTabClick(0)" v-bind:class="[ activeTab === 0 ? 'active' : '' ]" class="switch">Weekend<br>One</div>
    <div v-on:click="handleTabClick(1)" v-bind:class="[ activeTab === 1 ? 'active' : '' ]" class="switch">Daze<br>Between</div>
    <div v-on:click="handleTabClick(2)" v-bind:class="[ activeTab === 2 ? 'active' : '' ]" class="switch">Weekend<br>Two</div>
  </div>
</template>

<script>

export default {
  name: 'WeekendSwitch',
  props: ['activeTab', 'setActiveTab'],
  methods: {
    handleTabClick: function(tab){
      this.setActiveTab(tab);
    }
  }
}
</script>

 <style scoped>
  .switch {
    flex: 1;
    padding: 10px 0px;
  }

  .switch.active {
    background: #807600;
  }
 </style>
 
