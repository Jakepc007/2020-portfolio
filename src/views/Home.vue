<template>
  <div>
    <div class="splash">
      <div>
        <transition name="left-slide" appear>
          <h1 class="primary--text">
            Hey, I'm
            <router-link to="/about">Jake.</router-link>
          </h1>
        </transition>
        <transition name="left-slide-slow-1" appear>
          <h2 class="primary--text text--lighten-2">
            A Full Stack Developer,
            <br />Studying Software Engineering. 👨‍🎓
          </h2>
        </transition>
        <div class="mt-6">
          <transition name="left-slide-slow-3" appear>
            <v-btn to="/portfolio" color="primary" class="background--text mr-3 mb-3">What Can I do?</v-btn>
          </transition>
          <transition name="left-slide-slow-2" appear>
            <v-btn to="/contact" color="primary lighten-2" class="mb-3 background--text">
              Contact Me
              <v-icon class="ml-2">mdi-phone</v-icon>
            </v-btn>
          </transition>
        </div>
      </div>
    </div>
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
  min-height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.splash-cont {
  height: 30vh;
  overflow: hidden;
  margin-left: 2rem;
  margin-right: 2rem;

  @media screen and (min-width: 600px) {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
}

.left-slide {
  &-enter {
    transform: translateX(-100px);
    opacity: 0;
  }

  &-enter-active {
    transition: all 0.8s;
  }
}

.left-slide-slow-1 {
  &-enter {
    transform: translateX(-100px);
    opacity: 0;
  }

  &-enter-active {
    transition: all 0.8s;
  }
}

.left-slide-slow-2 {
  &-enter {
    transform: translateX(-100px);
    opacity: 0;
  }

  &-enter-active {
    transition: all 0.8s;
  }
}

.left-slide-slow-3 {
  &-enter {
    transform: translateX(-150px);
    opacity: 0;
  }

  &-enter-active {
    transition: all 0.8s;
  }
}

.right-slide {
  &-enter {
    transform: translateX(100px);
    opacity: 0;
  }

  &-enter-active {
    transition: all 1s cubic-bezier(0.51, 0.11, 0.78, 1.04);
  }
}

.upward-slide {
  &-enter {
    opacity: 0;
  }

  &-enter-active {
    transition: all 1s cubic-bezier(0.51, 0.11, 0.78, 1.04);
  }
}
</style>
