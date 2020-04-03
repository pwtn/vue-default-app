<template>
  <v-app>
    <the-app-bar />

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import TheAppBar from "./layout/TheAppBar";

export default {
  name: "App",

  components: {
    TheAppBar
  }
};
</script>
