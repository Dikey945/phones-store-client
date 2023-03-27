<template>
  <swiper
      data-slider
      :slides-per-view="4"
      class="flex flex-col mt-[30px]"
      :modules="modules"
      :loop="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: true
      }"

  >
    <div class="flex justify-between absolute w-[100%] top-[0px]">
      <h2>{{title}}</h2>
      <div class="flex space-x-[16px] ">
        <slider-button direction="left" mode="round"></slider-button>
        <slider-button direction="right" mode="round"></slider-button>
      </div>
    </div>

    <swiper-slide v-for="product in products" :key="product.id">
      <base-card :product="product" :discount="discount"></base-card>
    </swiper-slide>

  </swiper>
</template>

<script>
import 'swiper/css';
import 'swiper/css/navigation';
import BaseCard from "~/components/UI/BaseCard.vue";
import SliderButton from "~/components/UI/SliderButton.vue";
import {Navigation, Autoplay} from "swiper";
import { computed, ref, watchEffect } from 'vue';

export default {
  name: "ProductSlider",
  components: { SliderButton, BaseCard },
  props: ['title', 'products', 'discount'],
  setup(props) {
    const discount = computed(() => props.discount);
    const title = computed(() => props.title);
    const productsData = ref([]);

    watchEffect(() => {
      if (props.products && props.products.getPhones) {
        productsData.value = props.products.getPhones;
      }
    });

    const modules = [Navigation, Autoplay];
    return {
      title,
      products: productsData,
      modules,
      discount
    }
  }
}

</script>

<style scoped>
.swiper[data-slider] {
  margin-top: 50px;
  width: 1164px;
  height: 580px;
}

.swiper-wrapper {
  width: 1164px;
  min-height: 540px;
}

.swiper-slide {

  margin-top: 60px;

}
</style>