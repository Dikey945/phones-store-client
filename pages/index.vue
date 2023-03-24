<template>
  <section class="container">
    <div class="mt-[56px]">
      <h1>
        Welcome to Nice Gadgets store!
      </h1>
    </div>
    <section class="w-[100%] relative">

      <swiper
          class="h-[400px] w-[500px]"
          :modules="modules"
          :pagination="{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
          }"
          effect='fade'
          :fadeEffect="{
            crossFade: true
          }"
          :slides-per-view="1"
          :loop="true"
          :content="fill"
      >
        <slider-button direction="left" />
        <swiper-slide class="mx-auto w-[1040px] h-[400px]">
          <img src="@/assets/imgs/Banner.png" alt="logo">
        </swiper-slide>
        <swiper-slide >
          <img src="@/assets/imgs/Banner.png" alt="logo">
        </swiper-slide>
        <slider-button direction="right" />
      </swiper>
    </section>
    <section class="h-[580px]">
      <product-slider title="Brand new models" :products="data"></product-slider>
    </section>
  </section>
</template>

<script setup>
  import 'swiper/css';
  import 'swiper/css/navigation';
  import {EffectCreative, Navigation, Pagination} from 'swiper';
  import {ref} from "vue";
  import SliderButton from "~/components/UI/SliderButton.vue";
  import GET_PHONES_QUERY from "~/graphql/getPhones.query.gql";
  import ProductSlider from "~/components/UI/ProductSlider.vue";

  const {data} = useAsyncQuery(
      GET_PHONES_QUERY,
      {
        first: 10
      }
  )

  const navigation = {
    nextEl: 'swiper-button-next',
    prevEl: 'swiper-button-prev'
  };
  const modules = [Navigation, Pagination, EffectCreative];
</script>

<style scoped>
.swiper-pagination-bullet {
  width: 14px;
  height: 4px;
  border-radius: 0;
}
.swiper-pagination-bullet-active {
  background-color: black;
}
.swiper-button-next, .swiper-button-prev {
  position: absolute;
  z-index: 100;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  width: 32px;
  height: 400px;
  border: 1px solid #B4BDC4;
  border-radius: 48px;
}

.swiper-button-next::after {
  content: 'url(@/assets/imgs/icons/right-thin-chevron-svgrepo-com.svg)';
  width: 16px;
  height: 16px;

}

.swiper {
  margin-top: 50px;
  width: 1164px;
  height: 450px;
  background-color: #F9FAFC;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  height: 400px;
  background-color: #F9FAFC;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.swiper-slide img {
  display: block;
  width: 1040px;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
}
</style>
