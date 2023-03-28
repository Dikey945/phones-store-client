<template>
  <div class="grid grid-cols-4 gap-x-[16px] gap-y-[40px]">
    <base-card
      v-for="product in products"
      :key="product.id"
      :product="product"
      discount="true"
    >
    </base-card>
  </div>
</template>

<script>
  import BaseCard from "~/components/UI/BaseCard.vue";
export default {
  name: "BaseList",
  components: {BaseCard},
  props: ['products'],
  setup(props) {
    const products = computed(() => props.products);
    return {
      products
    }
  }
}
</script>

<style scoped>

</style>