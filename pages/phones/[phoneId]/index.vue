<template>
  <section class="mt-[25px] container">
    <base-route :route="route"></base-route>
    <back-button class="mt-[40px]" :route="backRoute"/>
    <h2 class="mt-[16px]">{{ phone?.name }}</h2>
    <section v-if="!isLoading" class="mt-[40px] grid grid-cols-2 gap-x-[64px] gap-y-[80px]">
      <photo-block :images="phone?.images" :mainImage="phone?.images[0]"></photo-block>
      <configuration-block v-if="configData" :product-data="configData"></configuration-block>
      <about-block :description="description"></about-block>
      <tech-spec :product="configData"></tech-spec>
    </section>
    <section>
      <product-slider title="You may also like" :products="sliderPhones"></product-slider>
    </section>



  </section>
</template>

<script setup>
import BaseRoute from "~/components/UI/BaseRoute.vue";
import BackButton from "~/components/phonePage/BackButton.vue";
import GET_EXTENDED_PHONE from "~/graphql/getExtendedPhone.query.gql";
import PhotoBlock from "~/components/phonePage/PhotoBlock.vue";
import {onBeforeMount, watch} from "vue";
import {transformColor} from "~/helpers/handlers";
import ConfigurationBlock from "~/components/phonePage/ConfigurationBlock.vue";
import AboutBlock from "~/components/phonePage/AboutBlock.vue";
import TechSpec from "~/components/phonePage/TechSpec.vue";
import ProductSlider from "~/components/UI/ProductSlider.vue";
import GET_PHONES_QUERY from "~/graphql/getPhones.query.gql";

const route = useRoute()
    .path.split('/').filter(el => el !== '')
const phoneId = useRoute().params
const backRoute = '/' + route.slice(0, -1).join('/')
const phone = ref(null)
const isLoading = ref(true)
const {data: sliderPhones} = await useAsyncQuery(
    GET_PHONES_QUERY,
    {
      first: 10
    }
)

const configData = ref(null)
const description= ref(null)
watch(phone, () => {
  configData.value = phone.value
  description.value = phone.value.description
} )


const fetchExtendedPhone = async (id) => {
  const {loading, data} = await useAsyncQuery(
      GET_EXTENDED_PHONE,
      {id},
  )
  isLoading.value = true
  phone.value = data.value.getExtendedPhone
  isLoading.value = false
}

  onMounted(async () => {
    await fetchExtendedPhone(phoneId.phoneId)
  })
  onBeforeMount(async() => {
    await fetchExtendedPhone(phoneId.phoneId)

  })


</script>

<style scoped>

</style>