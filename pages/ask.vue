<template>
  <div class="container mx-auto">
    <div class="step-name relative flex justify-center items-center mt-8">
      <span style="font-size: 3rem;" class=" bg-white px-8">FAQ</span>
    </div>
    <div class="text-3xl text-center">
      Aquí encontrarás respuestas a las preguntas más frecuentes
    </div>
    <div class="mt-8 flex items-center justify-center">
      <div class="relative w-80 ">
        <input type="text" placeholder="Tìm kiếm..."
          class="border focus:outline-none w-full py-3 pl-4 pr-10 text-base" />
        <div class="absolute inset-y-0 right-0 flex items-center pr-3 pb-3 mt-3">
          <Icon name="ph:magnifying-glass" class="w-6 h-6" />
        </div>
      </div>
    </div>
    <div class="max-w-6xl mx-auto">
      <ul class="grid lg:grid-cols-2 mt-8 ml-5 gap-6">
        <li v-for="(item, index) in menuItems" :key="index" class="pb-2 border-b">
          <div class="flex items-center justify-between">
            <div class="block py-2 text-2xl transition duration-300 ease-in-out ">
              {{ item.name }}
            </div>
            <!-- Menu con hiển thị khi click -->
            <div class="mr-5" @click.prevent="toggleMenu(index)" :class="{
              'text-gray-400': selectedMenu !== index
            }">
              <Icon class="text-3xl" name="ph:caret-down" />
            </div>
          </div>
          
        </li>
      </ul>
    </div>



  </div>
</template>

<script setup>


const toggleMenu = (index) => {
  selectedMenu.value = selectedMenu.value === index ? null : index
}
const selectedMenu = ref(null)
const menuItems = [
  {
    'name': 'child1',
    'desc': 'noidung'
  },
  {
    'name': 'child2',
    'desc': 'noidung'
  },
  {
    'name': 'child3',
    'desc': 'noidung'
  },
  {
    'name': 'child4',
    'desc': 'noidung'
  },
  {
    'name': 'child5',
    'desc': 'noidung'
  },
  {
    'name': 'child6',
    'desc': 'noidung'
  },

]
</script>

<style></style>