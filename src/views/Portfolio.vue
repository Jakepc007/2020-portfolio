<template>
  <div>
    <div class="splash">
      <div>
        <h1 class="primary--text">My Portfolio</h1>
        <h2>
          Some of my recent
          <span class="primary--text text--lighten-2">(and not so recent)</span>
          work.
        </h2>
      </div>
    </div>
    <div class="splash-cont">
      <div class="grid">
        <portfolio-card
          img="https://i.imgur.com/B0XFxHg.jpg"
          title="Research Application Tracking System"
          link="research-application-tracking-system"
          url="https://www.engintrac.com"
        />
        <portfolio-card img="https://i.imgur.com/1ZDnvPD.jpg" title="Case a Day" link="case-a-day" />
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

.grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
</style>  