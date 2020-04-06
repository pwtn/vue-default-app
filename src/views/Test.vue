<template>
  <v-container>
    <p>{{ message }}</p>

    <v-btn @click="$store.dispatch('login')">Call /login/login</v-btn>
  </v-container>
</template>

<script>
export default {
  computed: {
    message() {
      return this.$store.state.login.testMessage;
    }
  }
};
</script>
