<template>
  <v-app>
    <v-app-bar app color="secondary" dense dark hide-on-scroll>
      <div class="d-flex align-center">
        <h2>Jake Morris | Full Stack Developer</h2>
      </div>

      <template v-slot:extension>
        <v-tabs>
          <v-tab>
            Home
            <v-icon class="ml-2">mdi-home</v-icon>
          </v-tab>
          <v-tab>
            About Me
            <v-icon class="ml-2">mdi-account</v-icon>
          </v-tab>
          <v-tab>
            Portfolio
            <v-icon class="ml-2">mdi-view-dashboard</v-icon>
          </v-tab>
          <v-tab>
            Contact
            <v-icon class="ml-2">mdi-phone</v-icon>
          </v-tab>
        </v-tabs>
      </template>

      <v-spacer></v-spacer>

      <v-switch
        v-model="$vuetify.theme.dark"
        hide-details
        inset
        color="secondary"
        :label="$vuetify.theme.dark ? 'Dark Mode'  : 'Light Mode'"
      ></v-switch>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
