<template>
  <div>
   <NuxtLayout>
      <NuxtPage></NuxtPage>
   </NuxtLayout>
  </div>
</template>

<script setup>
 import '@/assets/css/main.css'
 import GET_PHONES_QUERY from "@/graphql/getPhones.query.gql";

     const {loading, data, error} = useAsyncQuery(
         GET_PHONES_QUERY,
         {
           pagination:{
             offset: 2,
             limit: 10
           }
         }
     )

</script>

<style>
  * {
    font-family: 'Montserrat', sans-serif;
  }
</style>