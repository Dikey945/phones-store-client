<template>
  <section>
  <h2>
    Tech specs
  </h2>
  <div class="h-0 w-[560px] border-[1px] border-[#E2E6E9] mt-[16px]"></div>
   <section class="flex flex-col space-y-[8px] mt-[24px]">
     <div class="flex items-center justify-between">
       <span class="text-[#89939A]">Screen</span>
       <span>{{ product.screen }}</span>
     </div>

     <div class="flex items-center justify-between">
       <span class="text-[#89939A]">Resolution</span>
       <span>{{ product.resolution }}</span>
     </div>

     <div class="flex items-ce class=text-[#89939A]nter justify-between">
       <span class="text-[#89939A]">Processor</span>
       <span>{{ product.processor }}</span>
     </div>

     <div class="flex items-center justify-between">
       <span class="text-[#89939A]">RAM</span>
       <span>{{ product.ram }}</span>
     </div>

     <div class="flex items-center justify-between">
       <span class="text-[#89939A]">Built in memory</span>
       <span>{{ product.capacity }}</span>
     </div>

     <div class="flex items-center justify-between">
       <span class="text-[#89939A]">Camera</span>
       <span>{{ product.camera }}</span>
     </div>

     <div class="flex items-center justify-between">
       <span class="text-[#89939A]">Zoom</span>
       <span>{{ product.zoom }}</span>
     </div>

     <div class="flex items-center justify-between">
       <span class="text-[#89939A]">Cell</span>
       <div class="flex items-center space-x-[4px]">
         <span v-for="(cell, idx) in product.cell" :key="idx" >{{ cell }}</span>
       </div>
     </div>
   </section>
 </section>
</template>

<script>
export default {
  props: ['product'],
  name: "TechSpec",
  setup(props) {
    const product = computed(() => props.product)
    return {
      product
    }
  }
}
</script>

<style scoped>

</style>