<template>
  <section class="flex space-x-[16px]">
    <div class="flex flex-col space-y-[16px]">
      <div
          class="bg-white p-[5px] border-[0.5px] border-gray-200"
          :class="{activePhoto: isActive === idx}"
          v-for="(img, idx) in images"
          :key="idx"
          @click="makeActive(idx)"
      >

        <img
            class="w-[80px] h-[80px] object-contain"
             :src="baseURL + img"
            alt="product picture"
            @click="changeImage(img)"
        >
      </div>
    </div>
    <div>
      <img
          class="w-[442px] h-[442px] object-contain"
          :src="baseURL + activeImage"
          alt="product main picture"
      >
    </div>
  </section>
</template>

<script>
export default {
  props: ['images', 'mainImage'],
  name: "PhotoBlock",
  setup(props) {
    const images = computed(() => props.images)
    const isActive = ref(0)
    const activeImage = ref(props.mainImage)
    watch(images, (newVal) => {
      activeImage.value = newVal[0]
    })
    const baseURL = 'https://comments-db.herokuapp.com/'
    function changeImage(img) {
      activeImage.value = img
    }
    function makeActive(idx) {
      isActive.value = idx
    }
    return {
      images,
      baseURL,
      activeImage,
      isActive,
      changeImage,
      makeActive,
    }
  }
}
</script>

<style scoped>
  .activePhoto {
    border: 2px solid #000;
  }
</style>