<template>
  <section class="flex flex-col">
    <div>
      <span class="text-[#89939A]">Available colors</span>
      <ul class="flex items-center space-x-[8px] mt-[8px]">
        <li
            v-for="(color, idx) in productData.colorsAvailable"
            :key="idx"
            class="
              flex
              justify-center
              items-center
              w-[34px]
              h-[34px]
              rounded-[100%]
              border-[0.5px]
              border-gray-200
              hover:border-black"
            :class="{activeColor: activeColor === color}"
            @click="changeColor(color)"
        >
          <div
              :style="{backgroundColor: transformColor(color)}"
              class="w-[28px] h-[28px] rounded-[100%] z-50"
          >
          </div>
        </li>
      </ul>
    </div>
    <div class="h-0 w-[320px] border-[1px] border-[#E2E6E9] mt-[24px]"></div>
    <div class="mt-[24px]">
      <span>Select capacity</span>
      <ul class="flex items-center space-x-[8px]">
        <li
            v-for="(capacity, idx) in productData.capacityAvailable"
            :key="idx"
            class="flex items-center p-[8px] border-[1px] border-[#E2E6E9] rounded-[8px] mt-[8px] hover:bg-[#F2F4F5] cursor-pointer"
            :class="{activeCapacity: activeCapacity === capacity}"
            @click="changeCapacity(capacity)"
        >
          {{capacity.toUpperCase()}}
        </li>
      </ul>
    </div>
    <div class="h-0 w-[320px] border-[1px] border-[#E2E6E9] mt-[24px]"></div>

    <section>
      <div class="flex space-x-[8px] items-center">
        <span class="text-black font-[700] text-[32px]">${{productData.priceDiscount}}</span>
        <span class="text-[#89939A] line-through text-[22px]">${{productData.priceRegular}}</span>
      </div>
      <div class="flex items-center mt-[16px] space-x-[16px]">
        <base-button>Add to cart</base-button>
        <div class="w-[48px] h-[48px] rounded-[100%] border-[1px] border-gray-200 flex items-center justify-center">
          <font-awesome-icon icon="heart" class="text-[#89939A] w-[16px] h-[16px]"/>
        </div>
      </div>
      <div class="flex-col mt-[32px] space-y-[8px] w-[320px]">
        <div class="flex items-center justify-between">
          <span class="text-[#89939A]">Screen</span>
          <span>{{ productData.screen }}</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-[#89939A]">Resolution</span>
          <span>{{ productData.resolution }}</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-[#89939A]">Processor</span>
          <span>{{ productData.processor }}</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-[#89939A]">Ram</span>
          <span>{{productData.ram}}</span>
        </div>
      </div>
    </section>
  </section>

</template>

<script>
import {transformColor} from "~/helpers/handlers";
import BaseButton from "~/components/UI/BaseButton.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  components: {FontAwesomeIcon, BaseButton},
  methods: {transformColor},
  props:['productData'],
  name: "ConfigurationBlock",
  setup(props) {
    const productData = computed(() => props.productData)
    const activeColor = computed(() => productData.value.color)
    const activeCapacity = computed(() => productData.value.capacity)
    const chosenColor = ref(activeColor.value)
    const chosenCapacity = ref(activeCapacity.value.toLowerCase())
    const route = useRoute()
    const router = useRouter()
    const params = Object.values(route.params)[0].split('-').slice(0,-2).join('-')
    const path = route.name.split('-').slice(0,-1).join('/')
    watch([chosenColor, chosenCapacity], ([newColor, newCapacity]) => {
      const capacity = newCapacity.toLowerCase()
      router.push(`/${path}/${params}-${capacity}-${newColor}`)
    })
    function changeColor(color) {
      chosenColor.value = color
    }
    function changeCapacity(capacity) {
      chosenCapacity.value = capacity
    }
    return {
      productData,
      activeColor,
      activeCapacity,
      changeColor,
      changeCapacity,
    }
  }
}
</script>

<style scoped>
  .activeColor {
    border: 1px solid black;
  }
  .activeCapacity {
    background-color: black;
    color: white;
  }
</style>