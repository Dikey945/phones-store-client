<template>
  <div class="flex justify-center mt-[50px]">
    <form class="w-[400px]" @submit.prevent="onSubmit">
      <AppControlInput type="email" @inputValue="onEmailChange">E-Mail Address</AppControlInput>
      <AppControlInput type="password" @inputValue="onPasswordChange">Password</AppControlInput>
      <BaseButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</BaseButton>
      <BaseButton
          type="button"
          btn-style="inverted"
          mode="flat"
          style="margin-left: 10px"
          @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</BaseButton>
    </form>
    <div>
      <p>{{email.value}}</p>
    </div>
  </div>


</template>

<script setup>
definePageMeta({
  layout: "auth",
});
import AppControlInput from "~/components/UI/AppControllInput";
import REGISTER_MUTATION from "~/graphql/register.mutation.gql";
import BaseButton from "~/components/UI/BaseButton.vue";
const password = ref("");
const email = ref("");

const { mutate } = useMutation(REGISTER_MUTATION, () =>
  ({
    variables: {
      email: email.value,
      password: password.value,
    }})
);
console.log(mutate)
function onEmailChange(eventData) {
  email.value = eventData;
}
function onPasswordChange(eventData) {
  password.value = eventData;
}

async function onSubmit() {
  if (isLogin) {
    await mutate();
  }

}

const isLogin = ref(true);

</script>

<style scoped>


</style>