<template>
  <v-btn :href="href" class="mt-2 primary background--text font-weight-bold">
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  props: ["href"],
};
</script>

<style>
</style>