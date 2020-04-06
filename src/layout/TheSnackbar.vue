<template>
  <div>
    <div v-for="(snack, i) in  snacks" :key="i">
      <!-- the snackbar type can be normal (dark), info (blue), success (green), error (red), warning (orange) -->
      <v-snackbar v-model="snack.value" :color="snack.type=='normal'?'':snack.type">
        {{snack.message}}
        <v-btn color="white" text icon @click="snack.value = false">
          <v-icon small>mdi-close-octagon-outline</v-icon>
        </v-btn>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    snacks() {
      return this.$store.state.snacks.list;
    }
  }
};
</script>