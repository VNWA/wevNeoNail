<template>
  <div class="container mx-auto">
    <div class="step-name relative flex justify-center items-center mt-8">
      <span style="font-size: 3rem;" class=" bg-white px-8">FAQ</span>
    </div>
    <div class="text-3xl text-center">
      Aquí encontrarás respuestas a las preguntas más frecuentes
    </div>
    <div class="mt-8">
      <div class="bg-primary uppercase text-2xl text-center py-3 font-semibold mx-auto max-w-5xl">
        Productos
      </div>
    </div>
    <div class="grid grid-cols-2">
      <div class="col-span-1">
        <ul class="mt-5 ml-5">
      <li v-for="(item, index) in menuItems" :key="index" class="pb-2 cursor-pointer w-1/2">
        <div @click.prevent="toggleMenu(index)" :class="{
          'text-black': selectedMenu !== index
        }"
          class="flex items-center justify-between bg-rose-200 uppercase text-2xl p-3 font-semibold mx-auto max-w-5xl">
          <NuxtLink class="block py-2 text-2xl transition duration-300 ease-in- w-full text-center ">
            {{ item.name }}
          </NuxtLink>
          <!-- Menu con hiển thị khi click -->
          <div class="mr-5">
            <Icon class="text-3xl" name="ph:caret-down" />
          </div>
        </div>
        <div v-if="selectedMenu === index" class="">
          <ul class="p-0">
            <li v-for="(subItem, subIndex) in item.submenu" :key="subIndex"
              class="text-sm text-gray-600 hover:text-gray-800 transition duration-200">
              {{ subItem }}
            </li>
          </ul>
        </div>
      </li>
    </ul>
      </div>
      <div class="col-span-1">
        <ul class="mt-5 ml-5">
      <li v-for="(item, index) in menuItems" :key="index" class="pb-2 cursor-pointer w-1/2">
        <div @click.prevent="toggleMenu(index)" :class="{
          'text-black': selectedMenu !== index
        }"
          class="flex items-center justify-between bg-rose-200 uppercase text-2xl p-3 font-semibold mx-auto max-w-5xl">
          <NuxtLink class="block py-2 text-2xl transition duration-300 ease-in- w-full text-center ">
            {{ item.name }}
          </NuxtLink>
          <!-- Menu con hiển thị khi click -->
          <div class="mr-5">
            <Icon class="text-3xl" name="ph:caret-down" />
          </div>
        </div>
        <div v-if="selectedMenu === index" class="">
          <ul class="p-0">
            <li v-for="(subItem, subIndex) in item.submenu" :key="subIndex"
              class="text-sm text-gray-600 hover:text-gray-800 transition duration-200">
              {{ subItem }}
            </li>
          </ul>
        </div>
      </li>
    </ul>
      </div>
    </div>
    <ul class="mt-5 ml-5">
      <li v-for="(item, index) in menuItems" :key="index" class="pb-2 cursor-pointer w-1/2">
        <div @click.prevent="toggleMenu(index)" :class="{
          'text-black': selectedMenu !== index
        }"
          class="flex items-center justify-between bg-rose-200 uppercase text-2xl p-3 font-semibold mx-auto max-w-5xl">
          <NuxtLink class="block py-2 text-2xl transition duration-300 ease-in- w-full text-center ">
            {{ item.name }}
          </NuxtLink>
          <!-- Menu con hiển thị khi click -->
          <div class="mr-5">
            <Icon class="text-3xl" name="ph:caret-down" />
          </div>
        </div>
        <div v-if="selectedMenu === index" class="">
          <ul class="p-0">
            <li v-for="(subItem, subIndex) in item.submenu" :key="subIndex"
              class="text-sm text-gray-600 hover:text-gray-800 transition duration-200">
              {{ subItem }}
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
interface MenuItem {
  name: string;
  submenu: string[];
}

const toggleMenu = (index: number) => {
  selectedMenu.value = selectedMenu.value === index ? null : index
}
const selectedMenu = ref<number | null>(null)
const menuItems: MenuItem[] = [
  {
    name: 'Home',
    submenu: ['Submenu 1', 'Submenu 2', 'Submenu 3']
  },
  {
    name: 'Nail Polishes',
    submenu: ['Nail Color 1', 'Nail Color 2', 'Nail Color 3']
  },
  {
    name: 'Manicure',
    submenu: ['Manicure 1', 'Manicure 2']
  },
  {
    name: 'Kits',
    submenu: ['Kit 1', 'Kit 2', 'Kit 3']
  },
  {
    name: 'Outlet',
    submenu: ['Outlet 1', 'Outlet 2']
  },
  {
    name: 'Learn With Us',
    submenu: ['Lesson 1', 'Lesson 2']
  }
]
</script>

<style></style>