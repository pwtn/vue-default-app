<template>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat dense>
      <v-toolbar-title class="title ml-3 mr-5">Login</v-toolbar-title>
      <v-spacer />
    </v-toolbar>
    <v-card-text>
      <v-form v-model="valid" @keydown.native.enter="loginTriggered" dense>
        <v-text-field
          label="Login"
          name="Login"
          prepend-icon="mdi-account"
          type="text"
          v-model="login"
          :rules="loginRules"
        />

        <v-text-field
          id="password"
          label="Password"
          name="Password"
          prepend-icon="mdi-lock"
          type="password"
          v-model="password"
          :rules="passwordRules"
        />
      </v-form>

      <a @click="$emit('close')">Forgotten password ?</a>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn :disabled="!valid" color="primary" @click="loginTriggered" :loading="isLoading">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>
 
<script>
export default {
  data() {
    return {
      login: "",
      loginRules: [v => !!v || "Required."],
      password: "",
      passwordRules: [v => !!v || "Required."],
      valid: false,
      isLoading: false
    };
  },
  methods: {
    loginTriggered() {
      console.log("login triggered method");
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.$store.dispatch("dispatchSnack", {
          type: "error",
          message: "Login failed..."
        });
      }, 5000);
    }
  }
};
</script>