<template>
  <v-menu bottom offset-y>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" color="primary" dark depressed class="px-0">
        {{user.firstname.substring(0, 1) + user.lastname.substring(0, 1)}}
        <v-icon small>mdi-menu-down</v-icon>
      </v-btn>
    </template>
    <v-list dense>
      <router-link to="hompage" v-if="$store.state.login.user.isAdmin">
        <v-list-item link>
          <v-list-item-action>
            <v-icon small>mdi-at</v-icon>
          </v-list-item-action>
          <v-list-item-content>Admin</v-list-item-content>
        </v-list-item>
      </router-link>
      <router-link to="homepage">
        <v-list-item link>
          <v-list-item-action>
            <v-icon small>mdi-account-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content>User Profile</v-list-item-content>
        </v-list-item>
      </router-link>
      <v-list-item link @click.stop="$store.commit('logout')">
        <v-list-item-action>
          <v-icon small>mdi-logout</v-icon>
        </v-list-item-action>
        <v-list-item-content>Logout</v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>



<script>
export default {
  computed: {
    user() {
      return this.$store.state.login.user;
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
