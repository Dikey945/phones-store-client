<template class="super">
  <the-header></the-header>
  <slot></slot>
  <the-footer></the-footer>
</template>

<script>
import TheLogo from "~/components/TheLogo.vue";
import TheHeader from "~/components/Navigation/TheHeader.vue";
import TheFooter from "~/components/Navigation/TheFooter.vue";

export default {
  components: {TheFooter, TheHeader, TheLogo}
}
</script>

<style scoped>
</style>
