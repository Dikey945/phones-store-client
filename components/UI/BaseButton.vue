<template>
  <button class="bg-[#F86800] rounded-[8px] w-[160px] h-[40px] text-white" :class="{flat: isFlat}">
    <slot></slot>
  </button>
</template>

<script>
import {ref} from "vue";
export default {
  name: "BaseButton",
  props: ['mode'],
  setup() {
    const isFlat = ref(false);
    return {
      isFlat
    }
  }
}
</script>

<style scoped>
  .flat {
    background-color: white;
    color: #F86800;
  }


</style>