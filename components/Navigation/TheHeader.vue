<template>
  <header class="flex pl-[24px] justify-between shadow-[0px_1px_0px_#E2E6E9] bg-white">
    <div class="flex  space-x-[48px] items-center ">
      <nuxt-link to="/"><the-logo/></nuxt-link>
      <the-nav/>
    </div>
    <div class="flex justify-center items-center">
      <div class="flex justify-center items-center w-[64px] h-[100%] border-l-2 border-gray-200">
        <font-awesome-icon class="w-[15px] h-[15px] icon" icon="fa-heart" />
      </div>
      <div class="flex justify-center items-center w-[64px] h-[100%] border-l-2 border-gray-200">
        <font-awesome-icon class="w-[15px] h-[15px] icon" icon="fa-bag-shopping" />
      </div>
    </div>


  </header>
</template>

<script>
import TheNav from "~/components/Navigation/TheNav.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "TheHeader",
  components: {FontAwesomeIcon, TheNav}
}
</script>

<style scoped>

</style>
