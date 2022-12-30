<template>
  <v-layout>
    <PCMRoot/>
  </v-layout>
</template>

<script>
import PCMRoot from './components/PCMRoot';

export default {
  name: 'App',

  components: {
    PCMRoot,
  },

  data: () => ({
    //
  }),
}
</script>