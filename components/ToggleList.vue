<template>
    <div class="relative container mx-auto">
      <div @click="toggleList" class="cursor-pointer flex items-center justify-center">
        <Icon name="emojione:flag-england" class="mr-2"/>
        <Icon name="fa6-solid:angle-down" />
      </div>
      <transition name="fade">
        <ul v-show="isVisible" style="z-index: 41;" class=" absolute mt-2 bg-white border border-gray-300 rounded shadow">
          <li class="py-2">Item 1</li>
          <li class="py-2">Item 2</li>
          <li class="py-2">Item 3</li>
        </ul>
      </transition>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  const isVisible = ref(false);
  
  const toggleList = () => {
    isVisible.value = !isVisible.value;
  };
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s ease;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  </style>
  