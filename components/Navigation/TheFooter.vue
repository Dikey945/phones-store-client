<template>
  <footer
    class="
      flex
      justify-between
      sticky
      bottom-0
      shadow-[0px_-1px_0px_#E2E6E9]
      h-[96px]
      items-center
      px-[152px]
      bg-white
      z-50
      mt-[80px]
    "
  >
    <div>
      <the-logo />
    </div>
    <div>
      <ul class="flex space-x-[107px]">
        <li>GitHub</li>
        <li>Contacts</li>
        <li>Contacts</li>
      </ul>
    </div>
    <div>
      <div @click="scrollToTop" class="flex items-center space-x-[16px] cursor-pointer">
        <span >Back to top</span>
        <div class="rounded-[100%] w-[32px] h-[32px] border-[1px] flex justify-center items-center">
          <svg class="w-[16px] h-[16px]" fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.256 23.481c0 0.269 0.106 0.544 0.313 0.75 0.412 0.413 1.087 0.413 1.5 0l14.119-14.119 13.913 13.912c0.413 0.413 1.087 0.413 1.5 0s0.413-1.087 0-1.5l-14.663-14.669c-0.413-0.412-1.088-0.412-1.5 0l-14.869 14.869c-0.213 0.212-0.313 0.481-0.313 0.756z"></path>
          </svg>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  setup() {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    return {
      scrollToTop,
    };
  }
}
</script>

<style scoped>

</style>