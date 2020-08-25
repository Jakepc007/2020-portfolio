<template>
  <div>
    <div class="splash">
      <div>
        <div>
          <h1 class="primary--text">{{p.title}}</h1>
          <h2>{{p.subtitle}}</h2>
          <h3 class="primary--text text--lighten-2" v-if="p.link">
            <a href="https://www.engintrac.com">{{p.link}}</a>
          </h3>
        </div>
      </div>
    </div>
    <div class="splash-cont">
      <v-tabs v-model="list" background-color="primary" class="primary">
        <v-tab v-for="technology in p.technologies" :key="technology.name" class="background--text">
          <v-icon color="background" class="mr-2">mdi-{{technology.icon}}</v-icon>
          {{technology.name}}
        </v-tab>
      </v-tabs>
      <div class="pa-4 primary background--text list-desc">{{p.technologies[list].desc}}</div>
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
      list: 0,
      dialogs: [],
      p: {},
      portfolio: [
        {
          url: "research-application-tracking-system",
          title: "Research Application Tracking System",
          subtitle: "Cardiff University",
          link: "https://www.engintrac.com",
          images: [
            "https://i.imgur.com/B0XFxHg.jpg",
            "https://i.imgur.com/B0XFxHg.jpg",
            "https://i.imgur.com/B0XFxHg.jpg",
            "https://i.imgur.com/B0XFxHg.jpg",
          ],
          technologies: [
            {
              name: "Vue",
              desc:
                "Using Vue, I created a fast, interactive and responsive web application.",
              icon: "vuejs",
            },
            {
              name: "Vuetify",
              desc: `Vuetify allowed me to quickly and efficiently prototype designs from a feature rich component 
                library which follows the design principles established by Google's material design documentation`,
              icon: "vuejs",
            },
          ],
        },
        {
          url: "case-a-day",
          title: "Case a Day",
          subtitle: "Cardiff University Medical Student (Academic Purposes)",
          link: null,
          images: [
            "https://i.imgur.com/B0XFxHg.jpg",
            "https://i.imgur.com/B0XFxHg.jpg",
            "https://i.imgur.com/B0XFxHg.jpg",
            "https://i.imgur.com/B0XFxHg.jpg",
          ],
          technologies: [
            {
              name: "HTML",
              desc:
                "HTML is the foundation of the web, and in this project I learned and utilised key concepts which delivered a reliable website.",
              icon: "language-html5",
            },
            {
              name: "CSS",
              desc:
                "To customise the website theme and colours, I learnt a lot about CSS. I assigned psuedo classes to elements to give the application a consistent natural feel.",
              icon: "language-css3",
            },
            {
              name: "Materialize",
              desc:
                "Using Materialize gave access to pre-created JS driven psuedo-components that could be customised to fit the theme, and work on any device resolution.",
              icon: "material-design",
            },
            {
              name: "JavaScript",
              desc:
                "Using Materialize gave access to pre-created JS driven psuedo-components that could be customised to fit the theme, and work on any device resolution.",
              icon: "language-javascript",
            },
            {
              name: "Java",
              desc:
                "Using Materialize gave access to pre-created JS driven psuedo-components that could be customised to fit the theme, and work on any device resolution.",
              icon: "language-java",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.splash {
  display: flex;
  align-items: center;

  min-height: 20vh;
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

.list-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
}
</style>