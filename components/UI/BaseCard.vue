<template>
  <div class="flex flex-col">
    <img :src="product.image" class="w-[208px] h-[196px] object-cover" alt="Product Image" />
    <div>
      <p>product.name</p>
    </div>
    <div class="flex">
      <p>product.fullPrice</p>
      <p>product.price</p>
    </div>
    <br/>
    <div>
      <div class="flex justify-between">
        <p>Screen</p>
        <p>product.screen</p>
      </div>
      <div class="flex justify-between">
        <p>Capacity</p>
        <p>product.capacity</p>
      </div>
      <div class="flex justify-between">
        <p class="">RAM</p>
        <p>product.ram</p>
      </div>
    </div>
    <div>
      <base-button>Add to cart</base-button>
      <button></button>
    </div>

  </div>
</template>

<script>
import BaseButton from "~/components/UI/BaseButton.vue";

export default {
  name: "Base",
  components: {BaseButton},
  props: ['product'],
  setup(props) {
    const product = props.product;
    return {
      product
    }
  }
}
</script>

<style scoped>

</style>