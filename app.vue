<template>
  <div>
   <NuxtLayout >
     <NuxtLoadingIndicator />
      <NuxtPage></NuxtPage>
   </NuxtLayout>
  </div>
</template>

<script setup>
 import '@/assets/css/main.css'

 const {clients, getToken} = useApollo()

 console.log(clients)

</script>

<style>
  * {
    font-family: 'Montserrat', sans-serif;
  }
  .page-enter-active,
  .page-leave-active {
    transition: all 0.4s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
</style>