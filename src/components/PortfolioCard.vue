<template>
  <v-card tile>
    <v-img class="align-end" src="https://i.imgur.com/B0XFxHg.jpg" :aspect-ratio="16/9">
      <v-card-title style="color: white; text-shadow: 1px 1px 5px #00000033">
        <h1>Cardiff University</h1>
      </v-card-title>
    </v-img>
    <v-card-title>Research Application Tracking System</v-card-title>
    <v-card-actions>
      <v-btn text>
        More Info
        <v-icon class="ml-2">mdi-eye</v-icon>
      </v-btn>
      <v-btn text>
        Link
        <v-icon class="ml-2">mdi-link</v-icon>
      </v-btn>
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
};
</script>

<style>
</style>