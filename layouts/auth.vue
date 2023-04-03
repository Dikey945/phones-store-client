<template>
  <the-header></the-header>
  <slot></slot>
</template>

<script>
import TheHeader from "~/components/Navigation/TheHeader.vue";

export default {
  name: "auth",
  components: {TheHeader}
}
</script>

<style scoped>

</style>