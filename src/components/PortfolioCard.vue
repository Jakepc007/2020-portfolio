<template>
  <v-card tile @mouseenter="hover = true" @mouseleave="hover = false">
    <v-img
      class="align-end"
      :src="img"
      style="position: relative; transition: 1s"
      gradient="to bottom, #00000044, #00000044"
      :aspect-ratio="16/9"
    >
      <h2 style="text-shadow: 0 2px 3px #00000077; color: white" class="pa-4">{{title}}</h2>
      <v-chip class="primary" style="position: absolute; right: 16px; top: 16px" v-if="url" ripple>
        <span class="font-weight-bold background--text">Deployed</span>
        <v-icon color="background" class="ml-2">mdi-check</v-icon>
      </v-chip>
    </v-img>
    <v-card-actions>
      <v-btn text :to="`/portfolio/${link}`">
        More Info
        <v-icon class="ml-2">mdi-eye</v-icon>
      </v-btn>
      <a :href="url" v-if="url">
        <v-btn text>
          Link
          <v-icon class="ml-2">mdi-link</v-icon>
        </v-btn>
      </a>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
    };
  },
  props: ["img", "title", "link", "url"],
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>