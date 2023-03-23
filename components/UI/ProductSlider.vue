<template>
  <swiper
      :slides-per-view="4"
      class="flex flex-col"

  >
    <div class="flex justify-between">
      <h2>{{title}}</h2>
      <div class="flex space-x-[16px]">
        <slider-button direction="left" mode="round"></slider-button>
        <slider-button direction="right" mode="round"></slider-button>
      </div>
    </div>

    <swiper-slide v-for="product in products" :key="product.id">
      <base-card :product="product"></base-card>
    </swiper-slide>

  </swiper>
</template>

<script>
import BaseCard from "~/components/UI/BaseCard.vue";
import SliderButton from "~/components/UI/SliderButton.vue";

export default {
  name: "ProductSlider",
  components: {SliderButton, BaseCard},
  props: ['title', 'products'],
  setup(props) {
    const title = props.title;
    const products = props.products;
    return {
      title,
      products
    }
  }

}
</script>

<style scoped>

</style>