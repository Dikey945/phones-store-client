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
          :pagination="pagination"
          effect="fade"
          fade-effect="{
            crossFade: true
          }"
          :slides-per-view="1"
          :loop="true"
      >
        <slider-button direction="left" />
        <swiper-slide class="mx-auto w-[1040px] h-[400px]">
          <img src="@/assets/imgs/Banner.png" alt="logo">
        </swiper-slide>
        <swiper-slide >
          <img src="@/assets/imgs/category-accessories.png" alt="logo">
        </swiper-slide>
        <slider-button direction="right" />
      </swiper>
    </section>

    <section class="h-[580px]">
      <product-slider title="Brand new models" :products="data"></product-slider>
    </section>

    <section class="mt-[80px]">
      <h2>Shop by category</h2>
      <div class="flex space-x-[16px] mt-[24px]">
        <nuxt-link to="/phones">
          <div class="flex flex-col ">
            <div class="w-[368px] h-[368px] bg-[#6D6474] rounded-[10px] relative overflow-hidden">
              <img class="absolute bottom-[-15%] right-[-15%] " src="@/assets/imgs/category-phones.png" alt="phone">
            </div>
            <h4 class="block mt-[24px]"> Mobile Phones</h4>
            <p class="block mt-[4px] text-[#89939A]">96 models</p>
          </div>
        </nuxt-link>

        <nuxt-link to="/tablets">
          <div class="flex flex-col ">
            <div class="w-[368px] h-[368px] bg-[#89939A] rounded-[10px] relative overflow-hidden">
              <img class="w-[368px] h-[368px] object-contain absolute bottom-[-10%] right-[-10%]" src="@/assets/imgs/category-tablets.png" alt="tablets">
            </div>
            <h4 class="block mt-[24px]"> Tablets</h4>
            <p class="block mt-[4px] text-[#89939A]">34 models</p>
          </div>
        </nuxt-link>

        <nuxt-link to="/accessories">
          <div class="flex flex-col">
            <div class="w-[368px] h-[368px] bg-[#D53C51] rounded-[10px] overflow-hidden relative">
              <img class="object-contain absolute bottom-0 right-[-70%] scale-[2.5]" src="@/assets/imgs/category-accessories.png" alt="phone">
            </div>
            <h4 class="block mt-[24px]"> Accessories</h4>
            <p class="block mt-[4px] text-[#89939A]">100 models</p>
          </div>
        </nuxt-link>
      </div>
    </section>

    <section class="h-[580px]">
      <product-slider title="Hot prices" :products="data" discount="true"></product-slider>
    </section>
  </section>
</template>

<script setup>
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/effect-fade';
  import 'swiper/css/pagination';
  import { EffectFade, Navigation, Pagination} from 'swiper';
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
  const modules = [Navigation, Pagination, EffectFade];
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    }
  }
</script>

<style scoped>
::v-global(.swiper-pagination) {
  height: 10px;
}
::v-global(.swiper-pagination-bullet) {
  width: 14px;
  height: 4px;
  border-radius: 0;
  background-color: #B4BDC4;
}

::v-global(.swiper-pagination-bullet-active) {
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
