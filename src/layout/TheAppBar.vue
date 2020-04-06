<template>
  <v-app-bar app color="primary" dense dark>
    <div class="title">{{$store.state.applicationName}}</div>

    <v-spacer></v-spacer>

    <the-user-icon />
  </v-app-bar>
</template>

<script>
import TheUserIcon from "@/layout/TheUserIcon";
export default {
  components: {
    TheUserIcon
  }
};
</script>