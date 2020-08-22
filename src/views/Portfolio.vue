<template>
  <div>
    <div class="splash">
      <div>
        <h1 class="primary--text">My Portfolio</h1>
        <h2>
          Some of my recent
          <span class="primary--text text--lighten-4">(and not so recent)</span>
          work.
        </h2>
      </div>
    </div>
    <div class="splash-cont">
      <div class="grid">
        <portfolio-card></portfolio-card>

        <v-card>
          <v-img src="https://i.imgur.com/1ZDnvPD.jpg" :aspect-ratio="16/9" class="align-end"></v-img>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioCard from "@/components/PortfolioCard.vue";
export default {
  components: {
    PortfolioCard,
  },
};
</script>

<style lang="scss" scoped>
.splash {
  padding-left: 2rem;
  padding-right: 2rem;
  min-height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.splash-cont {
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 8rem;

  @media screen and (min-width: 1000px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
}

.grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>  