<template>
  <div class="ml-[152px] mt-[24px] ">
    <base-route :route="route"></base-route>
  </div>
  <section class="container">
    <div class="mt-[40px]">
      <h2>
        Mobile Phones
      </h2>
      <p class="mt-[4px] text-[#89939A]">{{ phonesQuantity?.getPhonesCount }} models</p>
    </div>

    <div class="flex space-x-[16px] mt-[40px]">
      <div class="flex flex-col">
        <span class="text-[#89939A] text-[12px]"> Sort by</span>
        <select
            class="w-[176px] h-[40px] px-[12px] text-[#89939A] border-gray-400 border-[1px] rounded-[8px]"
            v-model="sort">
          <option selected value="newest">Newest</option>
          <option value="cheapest">Cheapest</option>
          <option value="discount">Best Price</option>
        </select>
      </div>
      <div class="flex flex-col">
        <span
          class="text-[#89939A] text-[12px]"
        >Per page</span>
        <select
            v-model="perPage"
            class="w-[128px] h-[40px] px-[12px] text-[#89939A] border-gray-400 border-[1px] rounded-[8px]"
        >
          <option value="12">12</option>
          <option selected value="16">16</option>
          <option value="20">20</option>
          <option value="24">24</option>

        </select>
      </div>
    </div>
  </section>
  <section class="container">
    <base-list class="mt-[24px]" :products="products?.getPhones"></base-list>
  </section>
  <section class="flex justify-center mt-[40px]">
    <the-pagination
        :sort="sort"
        :total="phonesQuantity?.getPhonesCount"
        :per-page="perPage"
        @changePage="changePageValue"
    >

    </the-pagination>
  </section>
</template>
<script setup>
  import BaseRoute from "~/components/UI/BaseRoute.vue";
  import BaseList from "~/components/UI/BaseList.vue";
  import GET_PHONES_QUERY from "~/graphql/getPhones.query.gql";
  import GET_PHONES_COUNT_QUERY from "~/graphql/getPhonesCount.query.gql";
  import ThePagination from "~/components/Navigation/ThePagination.vue";
  import {useAsyncData} from "#app";

  const page = ref(0)
  const sort = ref('newest')
  const perPage = ref(16)
  watch([page, sort, perPage], ([newPage, newSort, newPerPage]) => {
    fetchPhones(newPage, +newPerPage, newSort);
  });


  const changePageValue = (newValue) => {
    page.value = newValue
  }

  const products = ref([]);
  watch(products, () => {
    fetchCount();
  });
  const fetchPhones = async (offset, limit, sort) => {
    const { loading, data } = await useAsyncQuery(GET_PHONES_QUERY, {
      pagination: {
        offset,
        limit,
      },
      sort,
    })
    products.value = data.value;
  };
  fetchPhones(page.value, perPage.value, sort.value);

  const phonesQuantity = ref({getPhonesCount: 1});
  const fetchCount = async () => {
    const { loading, data } = await useAsyncQuery(GET_PHONES_COUNT_QUERY);
    phonesQuantity.value = data.value;
  };
  fetchCount();

  onMounted(async () => {
    await fetchPhones(+page.value, +perPage.value, sort.value);
    await fetchCount();
  });


  const route = useRoute()
      .name.split('/')

</script>