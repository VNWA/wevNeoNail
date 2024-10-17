<template>
  <h2 class="text-lg font-extrabold hover:opacity-70">{{ name }}</h2>
  <ul>
    <!-- Lặp qua từng phần tử trong subCategories -->
    <li v-for="(subItem, index) in subCategories" :key="index"
      class="text-sm hover:opacity-70 py-1 text-gray-950 font-extralight">
      <NuxtLink aria-label="VNWA Link" to ="/">
        {{ subItem }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
defineProps({
  name: String,
  subCategories: Array
})
</script>