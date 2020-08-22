<template>
  <div>
    <div class="splash">
      <div>
        <h1 class="primary--text">Contact Me</h1>
        <h2>
          Get in touch.
          <span class="secondary--text">Let's Chat! 🤗</span>
        </h2>
      </div>
    </div>
    <div class="splash-cont">
      <h2>
        Phone Number
        <v-icon class="primary--text">mdi-phone</v-icon>
      </h2>
      <h4 class="secondary--text">(+##) ##### ######</h4>
      <v-btn class="mt-2 primary white--text">Call Me</v-btn>
      <h2 class="mt-6">
        Email
        <v-icon class="primary--text">mdi-email</v-icon>
      </h2>
      <h4 class="secondary--text">jakemorrishello@gmail.com</h4>
      <v-btn href="mailto:jakemorrishello@gmail.com" class="mt-2 primary white--text">Send an Email</v-btn>
    </div>
  </div>
</template>

<script>
export default {};
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