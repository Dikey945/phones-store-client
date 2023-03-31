<template>
  <nuxt-link :to="phoneLink">
    <div class="w-[272px] h-[506px] flex flex-col p-[32px] border-[1px] border-gray-200 rounded-[10px] bg-white text-[12px] relative">
      <img :src="url" class="w-[208px] h-[196px] object-contain" alt="Product Image" />
      <div class="mt-[24px] h-[42px]">
        <p class="text-[14px]">{{ product.name }}</p>
      </div>
      <div class="flex" v-if="!discount">
        <p class="text-[22px] font-bold">${{ product.price }}</p>
      </div>
      <div class="flex" v-else>
        <p class="text-[22px] font-bold text-[#89939A] mr-[5px] line-through">${{ product.fullPrice }}</p>
        <p class="text-[22px] font-bold">${{ product.price }}</p>
      </div>
      <div class="h-0 border-[1px] rounded-[8px] border-gray-200"></div>
      <div class="mt-[16px] flex flex-col space-y-[8px]">
        <div class="flex justify-between">
          <p>Screen</p>
          <p>{{ product.screen }}</p>
        </div>
        <div class="flex justify-between">
          <p>Capacity</p>
          <p>{{ product.capacity }}</p>
        </div>
        <div class="flex justify-between">
          <p class="">RAM</p>
          <p>{{ product.ram }}</p>
        </div>
      </div>
      <div class="absolute bottom-[32px]">
        <base-button>Add to cart</base-button>
        <button></button>
      </div>

    </div>
  </nuxt-link>
</template>

<script>
import BaseButton from "~/components/UI/BaseButton.vue";
import {computed} from "vue";

export default {
  name: "Base",
  components: {BaseButton},
  props: ['product', 'discount'],
  setup(props) {
    const product = computed(() => props.product);
    const discount = computed(() => props.discount);
    console.log(product.value)
    const phoneLink = computed(() => "/phones/" + product.value.phoneId);
    const url = computed(() => 'https://comments-db.herokuapp.com/' + product.value.image);
    return {
      product,
      url,
      discount,
      phoneLink
    }
  }
}
</script>

<style scoped>
</style>