<template>
  <div class="border lg:border-none w-full h-full">
    <NuxtLink to="/products" alt="product" class="flex items-center justify-center p-2">
      <NuxtImg alt="image" width="300" height="300" :src=" image " />
    </NuxtLink>
    <div class="text-center lg:text-xl text-xs py-3">
    {{name}} 
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  name:String,
  image:String
})
</script>

<style></style>