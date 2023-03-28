<template>
  <div class="ml-[152px] mt-[24px] ">
    <base-route :route="route"></base-route>
  </div>
  <section class="container">
    <div class="mt-[40px]">
      <h2>
        Mobile Phones
      </h2>
      <p class="mt-[4px] text-[#89939A]">70 models</p>
    </div>

    <div class="flex space-x-[16px] mt-[40px]">
      <div class="flex flex-col">
        <span class="text-[#89939A] text-[12px]"> Sort by</span>
        <select
            class="w-[176px] h-[40px] px-[12px] text-[#89939A] border-gray-400 border-[1px] rounded-[8px]"
            v-model="sort">
          <option selected value="newest">Newest</option>
          <option value="cheapest">Cheapest</option>
          <option value="discount">Discount</option>
        </select>
      </div>
      <div class="flex flex-col">
        <span
          class="text-[#89939A] text-[12px]"
        >Per page</span>
        <select
            class="w-[128px] h-[40px] px-[12px] text-[#89939A] border-gray-400 border-[1px] rounded-[8px]"
        >
          <option value="12"></option>
          <option value="16"></option>
          <option value="20"></option>
        </select>
      </div>
    </div>
  </section>
</template>
<script setup>
  import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
  import BaseRoute from "~/components/UI/BaseRoute.vue";
  const sort = ref('newest')

  console.log(sort.value)

  const route = useRoute()
      .name.split('/')
  console.log(route)
</script>