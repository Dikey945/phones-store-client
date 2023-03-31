<template>
  <div class="flex space-x-[8px] items-center">
    <nuxt-link to="/">
      <font-awesome-icon class="cursor-pointer w-[24px] h-[24px]" :icon="['fas', 'house']" />
    </nuxt-link>
    <div class="flex space-x-[8px] items-center" v-for="link in route">
      <font-awesome-icon :icon="['fas', 'chevron-right']" />
      <nuxt-link class="cursor-pointer" :to="`/${link}`">{{ (link.charAt(0).toUpperCase() + link.slice(1)).split('-').join(' ') }}</nuxt-link>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  props: ['route'],
  name: "BaseRoute",
  components: {FontAwesomeIcon},
  setup(props) {
    const route = computed(() => props.route);
    return {
      route
    }
  }
}
</script>

<style scoped>

</style>