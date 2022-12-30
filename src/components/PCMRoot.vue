<template>
  <div>
    <v-navigation-drawer permanent>
      <v-list nav>

        <v-list-item
          lines="two"
          title="PETH-ETH3"
          subtitle="PC Minner"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="item in sidebarItems" :prepend-icon="item.icon" :title="item.value" :value="item.value" :key="item.value" 
                    @click="itemOnClick(item.value)" :active="currentPage == item.value"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar>
      <v-app-bar-title>{{ currentPage }}</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <HomeView />
    </v-main>
  </div>
</template>
<style>
  .v-layout {
    display: block;
  }
</style>

<script>

import HomeView from "./view/HomeView";

export default {
  name: "PCMRoot",
  components: {
    HomeView,
  },
  data() {
    return {
      currentPage: "Home",
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
      this.currentPage = value;
    }
  },
  mounted: function() {
    this.currentPage = "Home";
  }
};
</script>