<template>
  <div >
    <ul class="flex list-none space-x-[64px] h-[64px]">
      <li class="nav-item">
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/phones">Phones</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/tablets">Tablets</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/accessories">Accessories</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheNav"
}
</script>

<style scoped>
.nav-item {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.router-link-active{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid #0F0F11;
}
</style>