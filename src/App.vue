<template>
  <v-app>
    <v-app-bar app color="transparent" flat dark hide-on-scroll>
      <div class="d-flex align-center">
        <h3
          class="primary--text"
          :style="
            $vuetify.breakpoint.name === 'xs'
              ? 'font-size: 20px'
              : 'font-size: 30px'
          "
        >
          Jake Morris | Full Stack Developer
        </h3>
      </div>

      <template v-slot:extension v-if="$vuetify.breakpoint.name !== 'xs'">
        <v-tabs color="tertiary">
          <v-tab
            v-for="tab in tabs"
            :key="tab.title"
            :to="tab.link"
            class="tertiary--text"
          >
            {{ tab.title }}
            <v-icon class="ml-2" color="tertiary">mdi-{{ tab.icon }}</v-icon>
          </v-tab>
          <!-- <v-tab to="/">
            Home
            <v-icon class="ml-2">mdi-home</v-icon>
          </v-tab>
          <v-tab to="/about">
            About Me
            <v-icon class="ml-2">mdi-account</v-icon>
          </v-tab>
          <v-tab to="/portfolio">
            Portfolio
            <v-icon class="ml-2">mdi-view-dashboard</v-icon>
          </v-tab>
          <v-tab to="/contact">
            Contact
            <v-icon class="ml-2">mdi-phone</v-icon>
          </v-tab> -->
        </v-tabs>
      </template>

      <v-spacer></v-spacer>
      <v-chip color="primary">
        <v-switch
          ripple
          v-model="$vuetify.theme.dark"
          hide-details
          color="secondary"
        ></v-switch>
        <v-icon
          @click="toggleDarkMode"
          color="white"
          v-if="$vuetify.breakpoint.name !== 'xs'"
          >{{
            $vuetify.theme.dark ? "mdi-brightness-2" : "mdi-brightness-5"
          }}</v-icon
        >
      </v-chip>
    </v-app-bar>

    <v-main class="background">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  methods: {
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },

  data: () => ({
    tabs: [
      {
        title: "Home",
        link: "/",
        icon: "home",
      },
      {
        title: "About Me",
        link: "/about",
        icon: "account",
      },
      {
        title: "Portfolio",
        link: "/portfolio",
        icon: "view-dashboard",
      },
      {
        title: "Contact",
        link: "/contact",
        icon: "phone",
      },
    ],
  }),
};
</script>
