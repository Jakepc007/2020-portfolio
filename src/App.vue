<template>
  <v-app>
    <v-app-bar app color="background" flat>
      <div class="d-flex align-center">
        <router-link to="/">
          <h3
            class="primary--text"
            :style="
            $vuetify.breakpoint.name === 'xs'
              ? 'font-size: 30px'
              : 'font-size: 30px'
          "
          >
            Jake Morris
            <span v-if="$vuetify.breakpoint.name !== 'xs'">| Full Stack Developer</span>
          </h3>
        </router-link>
      </div>

      <template v-slot:extension v-if="$vuetify.breakpoint.name !== 'xs'">
        <transition name="left-slide" appear>
          <v-tabs>
            <v-tab v-for="tab in tabs" :key="tab.title" :to="tab.link" class="primary--text">
              {{ tab.title }}
              <v-icon class="ml-2" color="primary">mdi-{{ tab.icon }}</v-icon>
            </v-tab>
          </v-tabs>
        </transition>
      </template>

      <v-spacer></v-spacer>
      <transition name="right-slide" appear>
        <v-chip color="primary">
          <v-switch ripple v-model="$vuetify.theme.dark" hide-details color="secondary"></v-switch>
          <v-icon
            @click="toggleDarkMode"
            color="white"
            v-if="$vuetify.breakpoint.name !== 'xs'"
          >{{ $vuetify.theme.dark ? "mdi-brightness-2" : "mdi-brightness-5" }}</v-icon>
        </v-chip>
      </transition>
    </v-app-bar>

    <v-main class="background">
      <transition appear name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
    <v-footer
      v-if="$vuetify.breakpoint.name === 'xs'"
      fixed
      class="pa-0 elevation-16"
      color="secondary darken-2"
    >
      <v-tabs>
        <v-tab v-for="tab in tabs" :key="tab.title" :to="tab.link" class="primary--text">
          <v-icon class="ml-2" color="primary">mdi-{{ tab.icon }}</v-icon>
        </v-tab>
      </v-tabs>
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
      {
        title: "Portfolio",
        link: "/portfolio",
        icon: "view-dashboard",
      },
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

<style scoped lang="scss">
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
    transition: all 0.5s;
  }

  &-leave {
    opacity: 0;
  }
}
</style>
