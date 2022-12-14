<template>
  <div>
    <v-navigation-drawer permanent>
      <v-list nav>
        <v-list-item v-for="item in sidebarItems" :prepend-icon="item.icon" :title="item.value" :value="item.value" :key="item.value" @click="itemOnClick(item.value)"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar>{{ appBarTitle }}</v-app-bar>
    <v-main>
      <v-card height="200px"></v-card>
    </v-main>
  </div>
</template>
<style scoped>
</style>

<script>

export default {
  name: "PCMRoot",
  components: {
  },
  data() {
    return {
      appBarTitle: "",
      sidebarItems: [
        { icon: 'mdi-home', value: 'Home'},
        { icon: 'mdi-pickaxe', value: 'Minning'},
        { icon: 'mdi-swap-horizontal', value: 'Transactions'},
        { icon: 'mdi-chart-bell-curve', value: 'Plotting'},
        { icon: 'mdi-view-list', value: 'Commitment'},
        { icon: 'mdi-cog-outline', value: 'Settings'},
      ],
    };
  },
  methods: {
    itemOnClick(value) {
      this.appBarTitle = value;
    }
  },
  mounted: function() {
  }
};
</script>