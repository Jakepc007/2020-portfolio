<template>
  <div>
    <div class="splash">
      <div>
        <transition name="left-slide" appear>
          <h1 class="primary--text">Hey, I'm Jake.</h1>
        </transition>
        <transition name="left-slide-slow-1" appear>
          <h2 class="secondary--text">
            A Full Stack Developer,
            <br />Studying Software Engineering. 👨‍🎓
          </h2>
        </transition>
        <transition name="right-slide" appear>
          <div class="mt-6">
            <v-btn to="/portfolio" color="primary" class="white--text mr-3 mb-3">What Can I do?</v-btn>
            <v-btn to="/contact" color="secondary" class="darken-1 mb-3">
              Contact Me
              <v-icon class="ml-2">mdi-phone</v-icon>
            </v-btn>
          </div>
        </transition>
      </div>
    </div>
    <transition name="upward-slide" appear>
      <v-card class="splash-cont primary">
        <v-card-title class="white--text">
          About this website
          <v-icon color="white">mdi-chevron-down</v-icon>
        </v-card-title>
        <v-card-text class="white--text">This whole thing is a work in progress! Come back later :)</v-card-text>
      </v-card>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.splash {
  padding-left: 2rem;
  padding-right: 2rem;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.splash-cont {
  min-height: 30vh;
  margin-left: 2rem;
  margin-right: 2rem;

  @media screen and (min-width: 400px) {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
}

.left-slide {
  &-enter {
    transform: translateX(-50px);
    opacity: 0;
  }

  &-enter-active {
    transition: all 0.5s;
  }
}

.left-slide-slow-1 {
  &-enter {
    transform: translateX(-50px);
    opacity: 0;
  }

  &-enter-active {
    transition: all 0.8s;
  }
}

.right-slide {
  &-enter {
    transform: translateX(50px);
    opacity: 0;
  }

  &-enter-active {
    transition: all 0.5s;
  }
}

.upward-slide {
  &-enter {
    transform: translateY(2000px);
    opacity: 0;
  }

  &-enter-active {
    transition: all 1s;
  }
}
</style>
