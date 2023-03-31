<template>
  <section>
    <h2>About</h2>
    <div class="h-0 w-[560px] border-[1px] border-[#E2E6E9] mt-[16px]"></div>
    <article
        v-for="(descr, idx) in description"
        :key="idx"
        class="flex flex-col space-y-[16px] mt-[32px]"
    >
      <h3 class="font-[400]">{{descr.title}}</h3>
      <div class="flex flex-col space-y-[16px] mt-[32px]">
        <p
            v-for="(text, idx) in descr.text"
            :key="idx"
            class="text-[#89939A]"
        >{{text}}</p>
      </div>

    </article>
  </section>
</template>

<script>
export default {
  props: ['description'],
  name: "AboutBlock",
  setup(props) {
    const description = computed(() => props.description)
    return {
      description
    }
  }
}
</script>

<style scoped>

</style>