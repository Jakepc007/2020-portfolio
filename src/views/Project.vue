<template>
  <div>
    <div class="splash">
      <div>
        <div>
          <h1 class="primary--text">Research Application Tracking System</h1>
          <h2>Cardiff University</h2>
          <h3 class="primary--text text--lighten-2">
            <a href="https://www.engintrac.com">www.engintrac.com</a>
          </h3>
        </div>
      </div>
    </div>
    <div class="splash-cont">
      <h2 class="primary--text mt-4">Scenario</h2>
      <span>
        Cardiff University were previously using a shared excel spreadsheet
        for their academics to track their research records.
      </span>

      <h2 class="primary--text mt-4">
        Examples
        <span
          class="primary--text text--lighten-2"
        >(Click the images to expand and view additional info)</span>
      </h2>
      <div class="img-grid">
        <v-img v-for="(img, index) in p.images" :key="index" :src="img" />
        <!-- <v-dialog model="dialog1">
          <v-img src="https://i.imgur.com/B0XFxHg.jpg" :aspect-ratio="16/9" class="elevation-8"></v-img>
        </v-dialog>
        <v-btn @click="dialog1 = !dialog1">yo</v-btn>
        <v-img src="https://i.imgur.com/B0XFxHg.jpg" :aspect-ratio="16/9" class="elevation-8"></v-img>
        <v-img src="https://i.imgur.com/B0XFxHg.jpg" :aspect-ratio="16/9" class="elevation-8"></v-img>
        <v-img src="https://i.imgur.com/B0XFxHg.jpg" :aspect-ratio="16/9" class="elevation-8"></v-img>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.p = this.portfolio.find((p) => p.url === this.$route.params.project);
    const imageCount = this.p.images.length;
    for (let i = 0; i < imageCount; i++) {
      console.log(i);
      this.dialogs[i] = false;
    }
  },

  data() {
    return {
      dialogs: [],
      p: {},
      portfolio: [
        {
          url: "research-application-tracking-system",
          title: "Research Application Tracking System",
          subtitle: "Cardiff University",
          images: [
            "https://i.imgur.com/B0XFxHg.jpg",
            "https://i.imgur.com/B0XFxHg.jpg",
            "https://i.imgur.com/B0XFxHg.jpg",
            "https://i.imgur.com/B0XFxHg.jpg",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.splash {
  padding-left: 2rem;
  padding-right: 2rem;
  min-height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.splash-cont {
  min-height: 30vh;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 100%;

  @media screen and (min-width: 800px) {
    width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
}

.down {
  animation: move 3s;
  animation-iteration-count: 10;
}

@keyframes move {
  from {
    transform: translateY(10px);
  }
  to {
    transform: translateY(-10px);
  }
}

.img-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>