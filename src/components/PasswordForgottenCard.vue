<template>
  <v-card class="elevation-12">
    <v-card-title>Forgotten password</v-card-title>
    <v-card-text>
      <p>Please write the email adress attached to your account.</p>
      <v-form dense>
        <v-text-field label="Email" v-model="email"></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn
        :disabled="!email"
        @click="sendTriggered"
        @keyup.native.enter="sendTriggered"
      >Reset Password</v-btn>
      <v-btn @click="$emit('close')">Cancel</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      email: ""
    };
  },
  methods: {
    sendTriggered() {
      console.log("send triggered method");
      this.email = "";
      this.$emit("close");
    }
  }
};
</script>