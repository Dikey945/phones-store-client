<template>
  <div>
   <NuxtLayout>
      <NuxtPage></NuxtPage>
   </NuxtLayout>
  </div>
</template>

<script>
 import '@/assets/css/main.css'
 export default {
   name: 'App',
   // setup() {
   //   // const {loading, data, error} = useQuery(GET_PHONES_QUERY)
   //   // console.log(data)
   //   return {}
   // }
 }
</script>

<style>
  * {
    font-family: 'Montserrat', sans-serif;
  }
</style>