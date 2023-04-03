<template>
  <button class="bg-[#F86800] rounded-[8px] w-[160px] h-[40px] text-white" :class="{flat: isFlat, styleClass}" >
    <slot></slot>
  </button>
</template>

<script>
import {ref} from "vue";
export default {
  name: "BaseButton",
  props: ['mode', 'styleClass'],
  setup(props) {
    const isFlat = computed (() => props.mode === 'flat')
    return {
      isFlat,
    }
  }
}
</script>

<style scoped>
  .flat {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

</style>