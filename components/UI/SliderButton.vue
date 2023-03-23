<template>
  <button
      @click="nextSlide"
      :class="[direction === 'left' ? 'button-left' : 'button-right', mode === 'round' ? 'button-round' : 'button-rect']"
  >
    <svg
        v-if="direction === 'right'"
        fill="#B4BDC4" width="800px"
        height="800px" viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg">
      <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"></path>
    </svg>
    <svg v-else fill="#B4BDC4" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         viewBox="0 0 404.258 404.258" xml:space="preserve">
      <polygon points="289.927,18 265.927,0 114.331,202.129 265.927,404.258 289.927,386.258 151.831,202.129 "/>
    </svg>
  </button>
</template>

<script>
import { useSwiper } from 'swiper/vue';

export default {
  name: "SliderButton",
  props: ['direction', 'mode'],
  setup(props) {
    const direction = props.direction;
    const swiper = useSwiper();
    console.log(swiper.value)
    const nextSlide = () => {
      if(direction === 'left') {
        swiper.value.slidePrev();
      }
      else {
        swiper.value.slideNext();
      }
    }
    return {
      nextSlide,
      direction
    }
  }
}
</script>

<style scoped>
  .button-rect {
    position: absolute;
    z-index: 100;
    top: 0;

    background-color: transparent;
    width: 32px;
    height: 400px;
    border: 1px solid #B4BDC4;
    border-radius: 48px;
  }

  .button-round {
    background-color: transparent;
    width: 32px;
    height: 32px;
    border: 1px solid #B4BDC4;
    border-radius: 100%;
  }
  .button-left:hover, .button-right:hover {
    border-color: black;
  }


  .button-left:hover svg, .button-right:hover svg {
    fill: black;
  }
  .button-left{
    left: 0;
  }
  .button-right {
    right: 0;
  }

  svg {
    display: block;
    margin: 0 auto;
    width: 16px;
    height: 16px;
    fill: #B4BDC4;
  }
</style>