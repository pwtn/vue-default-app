<template>
  <v-app>
    <the-app-bar />

    <v-content>
      <router-view />
      <the-snackbar />
    </v-content>
  </v-app>
</template>

<script>
import TheAppBar from "./layout/TheAppBar";
import TheSnackbar from "./layout/TheSnackbar";

export default {
  name: "App",

  components: {
    TheAppBar,
    TheSnackbar
  }
};
</script>
