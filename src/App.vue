<template>
  <v-app id="app" style="position: relative">
    <v-app-bar app color="background" flat>
      <div class="d-flex align-center">
        <router-link to="/">
          <h3 class="primary--text" style="font-size: 30px">
            Jake Morris
            <span v-if="$vuetify.breakpoint.name !== 'xs'">| Full Stack Developer</span>
          </h3>
        </router-link>
      </div>

      <template v-slot:extension v-if="$vuetify.breakpoint.name !== 'xs'">
        <v-tabs>
          <v-tab
            v-for="tab in tabs"
            :key="tab.title"
            :to="tab.link"
            class="primary--text font-weight-bold"
          >
            {{ tab.title }}
            <v-icon class="ml-2" color="primary">mdi-{{ tab.icon }}</v-icon>
          </v-tab>
        </v-tabs>
      </template>

      <v-spacer></v-spacer>
      <v-chip color="primary">
        <v-switch ripple v-model="$vuetify.theme.dark" hide-details color="background"></v-switch>
        <v-icon
          @click="toggleDarkMode"
          color="background"
          v-if="$vuetify.breakpoint.name !== 'xs'"
        >{{ $vuetify.theme.dark ? "mdi-brightness-2" : "mdi-brightness-5" }}</v-icon>
      </v-chip>
    </v-app-bar>

    <v-main class="background pb-16">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>

    <v-footer
      class="pa-0"
      v-if="$vuetify.breakpoint.name === 'xs'"
      fixed
      color
      style="transition-duration: 0.2s"
    >
      <div class="d-flex justify-space-between" style="width: 100%; transition-duration: 0.2s">
        <router-link
          :to="tab.link"
          v-for="tab in tabs"
          :key="tab.title"
          class="pa-2 d-flex flex-grow-1 justify-center align-center"
          :class="$route.path === tab.link ? 'primary lighten-2' : 'primary'"
        >
          <v-icon :color="`background`" large>mdi-{{tab.icon}}</v-icon>
        </router-link>
      </div>
    </v-footer>
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
      // {
      //   title: "Portfolio",
      //   link: "/portfolio",
      //   icon: "view-dashboard",
      // },
      {
        title: "About",
        link: "/about",
        icon: "account",
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

<style lang="scss">
#app {
  font-family: "Poppins", sans-serif;
  font-weight: 800;
}

a {
  text-decoration: none !important;
}

.left-slide {
  &-enter {
    transform: translateX(-200px);
    opacity: 0;
  }

  &-enter-active {
    transition: all 0.5s;
  }
}

.right-slide {
  &-enter {
    transform: translateX(200px);
    opacity: 0;
  }

  &-enter-active {
    transition: all 0.5s;
  }
}

.fade {
  &-enter {
    opacity: 0;
  }

  &-enter-active,
  &-leave-active {
    transition: all 0.8s;
  }

  &-leave {
    opacity: 0;
  }
}
</style>
