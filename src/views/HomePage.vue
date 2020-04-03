<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to yet another default
          <br />Vue.js web application
        </h1>
      </v-col>

      <v-col cols="12">
        <p>These are the principal technologies (plugins, frameworks, librairies) used for the development of this application.</p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h3 class="headline font-weight-bold mb-3">Frontend Technologies</h3>

        <v-row justify="center">
          <a
            v-for="(tech, i) in frontendTechnologies"
            :key="i"
            :href="tech.href"
            class="subheading mx-3"
            target="_blank"
          >{{ tech.text }}</a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h3 class="headline font-weight-bold mb-3">Backend Technologies</h3>

        <v-row justify="center">
          <a
            v-for="(tech, i) in backendTechnologies"
            :key="i"
            :href="tech.href"
            class="subheading mx-3"
            target="_blank"
          >{{ tech.text }}</a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h3 class="headline font-weight-bold mb-3">Other Technologies</h3>

        <v-row justify="center">
          <a
            v-for="(tech, i) in otherTechnologies"
            :key="i"
            :href="tech.href"
            class="subheading mx-3"
            target="_blank"
          >{{ tech.text }}</a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      frontendTechnologies: [
        { href: "https://router.vuejs.org/", text: "Vue Router" },
        { href: "https://vuex.vuejs.org", text: "Vuex" },
        { href: "https://vuetifyjs.com/en/", text: "Vuetify" },
        { href: "https://github.com/axios/axios", text: "Axios" }
      ],
      backendTechnologies: [
        { href: "https://expressjs.com/", text: "Express" },
        { href: "https://mongoosejs.com/", text: "Mongoose" },
        { href: "http://www.passportjs.org/", text: "Passport.js" },
        { href: "http://nodemailer.com/app/", text: "Nodemailer" }
      ],
      otherTechnologies: [{ href: "https://mailtrap.io/", text: "Mailtrap" }]
    };
  }
};
</script>