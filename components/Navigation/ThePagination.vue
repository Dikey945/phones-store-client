<template>
  <section class="flex space-x-[16px]">
    <button
        class="flex justify-center items-center w-[32px] h-[32px] rounded-[100%] border border-[#E5E5E5]"
    >
      <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
           viewBox="0 0 404.258 404.258" xml:space="preserve">
        <polygon points="289.927,18 265.927,0 114.331,202.129 265.927,404.258 289.927,386.258 151.831,202.129 "/>
      </svg>
    </button>
    <div class="flex space-x-[8px]">
      <button
          class="w-[32px] h-[32px] rounded-[100%] border border-[#E5E5E5]"
          v-for="(_, idx) in pages"
          :key="idx"
          @click="activePage = idx"
          :class="{isActive: activePage === idx}"
      >
        {{idx + 1}}
      </button>
    </div>
    <button
        class="flex justify-center items-center w-[32px] h-[32px] rounded-[100%] border border-[#E5E5E5]"
    >
      <svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"></path>
      </svg>
    </button>
  </section>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  components: {FontAwesomeIcon},
  props: ['perPage', 'total'],
  name: "ThePagination",
  setup(props) {
    const activePage = ref(0);
    const perPage = computed(() => props.perPage);
    const total = computed(() => props.total);
    const pages = computed(() => Math.ceil(total.value / perPage.value));
    return {
      pages,
      activePage
    }
  }
}
</script>

<style scoped>
  .isActive {
    background-color: black;
    color: white;
  }
  svg {
    width: 16px;
    height: 16px;
  }
</style>