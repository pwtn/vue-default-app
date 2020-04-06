<template>
  <v-container class="fill-height grey lighten-4">
    <v-row align="center" justify="center">
      <v-col cols="4">
        <login-card v-if="login" @close="login = false"></login-card>
        <password-forgotten-card v-if="!login" @close="login = true"></password-forgotten-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginCard from "@/components/LoginCard";
import PasswordForgottenCard from "@/components/PasswordForgottenCard";

export default {
  components: {
    LoginCard,
    PasswordForgottenCard
  },
  data() {
    return {
      // login == true ? login-card : password-forgotten-card
      login: true
    };
  }
};
</script>