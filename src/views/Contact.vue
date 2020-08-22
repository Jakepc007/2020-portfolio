<template>
  <div>
    <div class="splash">
      <div>
        <h1 class="primary--text">Contact Me</h1>
        <h2>
          Get in touch.
          <span class="primary--text text--lighten-4">Let's Discuss Opportunities! 🤗</span>
        </h2>
      </div>
    </div>
    <div class="splash-cont">
      <h2>
        Phone Number
        <v-icon class="primary--text">mdi-phone</v-icon>
      </h2>
      <h4 class="primary--text text--lighten-4">(+##) ##### ######</h4>
      <custom-button href="tel:123-456-7890">Call Me</custom-button>
      <h2 class="mt-6">
        Email
        <v-icon class="primary--text">mdi-email</v-icon>
      </h2>
      <h4 class="primary--text text--lighten-4">jakemorrishello@gmail.com</h4>
      <custom-button href="mailto:jakemorrishello@gmail.com">Send an Email</custom-button>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton";
export default {
  components: {
    CustomButton,
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
  margin-left: 2rem;
  margin-right: 2rem;

  @media screen and (min-width: 400px) {
    width: 40%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>