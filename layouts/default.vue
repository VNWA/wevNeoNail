<template>
  <div>
    <!-- Header Section -->
    <div class=" bg-slate-100 hidden lg:block  ">
      <div class="container mx-auto grid grid-cols-2 justify-between items-center py-3">
        <div class="flex items-center">
          <div class="mr-2 pt-2">
            <Icon class="text-xl" name="solar:phone-outline" />
          </div>
          <div class="mr-8 z-50">
            <NuxtLink to="/" class="hover:opacity-75">
              +34931727651
            </NuxtLink>
          </div>
          <div class="">
            <ToggleList />
          </div>
        </div>
        <div class="text-right">
          <NuxtLink to="/ask" class=" uppercase hover:opacity-75">
            Questions & Answers
          </NuxtLink>
          <NuxtLink to="/gift" class="ml-16 uppercase hover:opacity-75">
            Gift ideas
          </NuxtLink>
        </div>

      </div>
    </div>
    <header class="sticky top-0 left-0 z-40">
      <div class="header">
        <div class="grid grid-cols-2 py-4 text-center container lg:mx-auto justify-center items-center">
          <!-- Logo Section -->
          <div class=" flex justify-center items-center w-full lg:w-3/4">
            <NuxtLink to="/">
              <NuxtImg alt="logo" width="260px" height="64px" class="bg-black" src="/images/logo.webp" />
            </NuxtLink>
          </div>
          <!-- Search Input and Icons Section -->
          <div class="flex items-center justify-between text-center ">
            <div class="relative w-auto flex-grow hidden lg:flex">
              <input @click=" isSearchOpen = !isSearchOpen" type="text"
                placeholder="Enter the phrase you are looking for"
                class="border-b focus:outline-none w-full pb-2 pl-5 pr-10 text-base" />
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pb-3 mt-3">
                <Icon name="ph:magnifying-glass" class="w-6 h-6" />
              </div>
              <div :class="{ 'search-menu_desktop': true, 'active': isSearchOpen }"
                class="absolute w-full h-auto bg-white top-8 z-50 border search-menu_desktop">
                <NuxtLink to="/p/a">
                  <div class="grid grid-cols-10 border-b">
                    <div class="col-span-2 flex items-center justify-center px-2 ">
                      <NuxtImg alt="product" width="80" height="80" src="/images/22.webp" />
                    </div>
                    <div class="col-span-8 flex flex-col justify-center items-start">
                      <div class="text-sm">ADORABLE Starter Set</div>
                      <b class="text-primary">90$</b>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
            <div class="flex justify-end items-center w-full mr-2 lg:hidden ">
              <button @click="  isSearchOpen = !isSearchOpen"
                class="flex items-center rounded-md text-black pl-4 text-center text-xl  ">
                <Icon name="ph:magnifying-glass" class="w-10 h-10 mr-2" />
              </button>
            </div>
            <div class="lg:flex items-center space-x-6 lg:ml-5 ml-20 hidden">
              <Icon name="ph:user-light" class="hover:opacity-70 w-6 h-6 cursor-pointer" />
              <NuxtLink class="relative" to="/favourite">
                <Icon class="hover:opacity-70 w-7 h-7 cursor-pointer hidden lg:block "
                  name="material-symbols-light:favorite-outline" />
                <span
                  class="w-4 h-4 flex items-center justify-center rounded-full bg-black text-white absolute -top-1 -right-1 text-xs">0</span>
              </NuxtLink>
              <div @click="isCartOpen = !isCartOpen" class="relative cursor-pointer">
                <div>
                  <Icon name="ph:handbag-simple-light" class="hover:opacity-70 w-6 h-6 flex" />
                </div>
                <span
                  class="w-4 h-4 flex items-center justify-center rounded-full bg-black text-white absolute -top-1 -right-1 text-xs">0</span>
              </div>
            </div>
          </div>
        </div>
        <hr class="border-t-1 border-gray-300 ">
        <!-- Navigation (Empty for now) -->
        <nav>
          <div class="nav-top relative hidden lg:block ">
            <ul class="flex w-full text-center justify-center align-center ">
              <li class="mx-12 py-2 my-2 text-white px-4 flex justify-center items-center "
                style="background-color: #640202;">Autumn Colors</li>
              <li class="mx-12 py-4 font-medium"> <span class="pb-4">
                  <NuxtLink to="/products" class="under-line">Nail Polishes</NuxtLink>
                </span>
                <div class="nav-dropdown absolute bg-white ">
                  <div class="container mx-auto py-5">
                    <div class="grid grid-cols-4 gap-4 text-lg font-black	 text-left mb-10">
                      <div v-for="(item, index) in CateDropdown " :key="index">
                        <NavCate :name="item.name" />
                      </div>
                    </div>
                    <div class="my-2 grid grid-cols-2 justify-between items-center mt-4">
                      <div class="flex">
                        <p class="uppercase flex justify-center items-center">Tone</p>
                        <div>
                          <ProductManicura />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="mx-12 py-4 font-medium"> <span class="pb-4">
                  <NuxtLink to="/products" class="under-line">Manicure</NuxtLink>
                </span>
                <div class="nav-dropdown absolute  bg-white ">
                  <div class="container mx-auto py-5">
                    <div class="grid grid-cols-4 gap-4	text-left mb-10 ">
                      <div v-for="(item, index) in CateDropdown " :key="index">
                        <NavCate :subCategories="item.subCategories" :name="item.name" />
                      </div>
                    </div>
                    <div class="my-2 grid grid-cols-2 justify-between items-center mt-4">
                      <div class="flex">
                        <p class="uppercase flex justify-center items-center">Tone</p>
                        <div>
                          <ProductManicura />
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </li>
              <li class="mx-12 py-4 font-medium"> <span class="pb-4">
                  <NuxtLink to="/products" class="under-line">Kits</NuxtLink>
                </span>
                <div class="nav-dropdown absolute  bg-white ">
                  <div class="container mx-auto py-5">
                    <div class="grid grid-cols-4 gap-4	text-left mb-10 ">
                      <div v-for="(item, index) in CateDropdown " :key="index">
                        <NavCate :subCategories="item.subCategories" :name="item.name" />
                      </div>
                    </div>
                    <div class="my-2 grid grid-cols-2 justify-between items-center mt-4">
                      <div class="flex">
                        <p class="uppercase flex justify-center items-center">Tone</p>
                        <div>
                          <ProductManicura />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="mx-12 py-4 font-medium"> <span class="pb-4">
                  <NuxtLink to="/products" class="under-line">Outlet
                  </NuxtLink>
                </span>
                <div class="nav-dropdown absolute  bg-white ">
                  <div class="container mx-auto py-5">
                    <div class="grid grid-cols-4 gap-4	text-left mb-10 ">
                      <div v-for="(item, index) in CateDropdown " :key="index">
                        <NavCate :subCategories="item.subCategories" :name="item.name" />
                      </div>
                    </div>
                    <div class="my-2 grid grid-cols-2 justify-between items-center mt-4">
                      <div class="flex">
                        <p class="uppercase flex justify-center items-center">Tone</p>
                        <div>
                          <ProductManicura />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="mx-12 py-4 font-medium"> <span class="pb-4">
                  <NuxtLink to="/about" class="under-line">APRENDE CON NOSOTROS</NuxtLink>
                </span>
                <div class="nav-dropdown absolute  bg-white ">
                  <div class="container mx-auto py-5">
                    <div class="grid grid-cols-4 gap-4	text-left mb-10 ">
                      <div v-for="(item, index) in CateDropdown " :key="index">
                        <NavCate :subCategories="item.subCategories" :name="item.name" />
                      </div>
                    </div>
                    <div class="my-2 grid grid-cols-2 justify-between items-center mt-4">
                      <div class="flex">
                        <p class="uppercase flex justify-center items-center">Tone</p>
                        <div>
                          <ProductManicura />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <div class="menu-cart" :class="{ 'active': isCartOpen }">
      <div class="border-b">
        <div class="p-5">
          <div class="flex justify-between items-center ">
            <span class="relative text-2xl font-medium">
              Giỏ hàng
              <span
                class="w-4 h-4 rounded-full bg-black text-white -top-1 flex justify-center items-center text-xs -right-4 absolute">0</span>
            </span>
            <div class="cursor-pointer">
              <Icon @click="  isCartOpen = !isCartOpen" name="majesticons:close" class="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
      <div class="p-5 pt-0">
        <div class="flex border-b py-5 w-full">
          <div class="lg:mr-2 mr-6">
            <NuxtImg alt="product" src="/images/0001.webp" width="64" height="96" />
          </div>
          <div>
            <div class="font-light text-gray-800 inline-block lg:text-base text-2xl">
              Quần suông Black Tuysi khuy kiểu
            </div>
            <div class="font-light text-gray-600 lg:text-sm text-xl lg:py-2 py-4">
              Color : <b class="lg:text-base text-xl">Black</b>
            </div>
            <div class="flex items-center justify-between">
              <div>
                <button @click="decrement" class="bg-gray-200 text-gray-800 lg:px-2 lg:py-1 px-4 py-2 hover:bg-primary">
                  -
                </button>
                <!-- Hiển thị số lượng -->
                <button class=" border lg:px-2 lg:py-1 px-4 py-2 bg-gray-100">{{ quantity }}</button>
                <!-- Nút cộng số lượng -->
                <button @click="increment" class="bg-gray-200 text-gray-800 lg:px-2 lg:py-1 px-4 py-2 hover:bg-primary">
                  +
                </button>
              </div>
              <div class="text-black font-bold lg:text-lg text-2xl">
                6999$
              </div>
              <!-- Nút trừ số lượng -->
            </div>
          </div>
        </div>
        <div class="flex border-b py-5 w-full">
          <div class="lg:mr-2 mr-6">
            <NuxtImg alt="product" src="/images/0001.webp" width="64" height="96" />
          </div>
          <div>
            <div class="font-light text-gray-800 inline-block lg:text-base text-2xl">
              Quần suông Black Tuysi khuy kiểu
            </div>
            <div class="font-light text-gray-600 lg:text-sm text-xl lg:py-2 py-4">
              Color : <b class="lg:text-base text-xl">Black</b>
            </div>
            <div class="flex items-center justify-between">
              <div>
                <button @click="decrement" class="bg-gray-200 text-gray-800 lg:px-2 lg:py-1 px-4 py-2 hover:bg-primary">
                  -
                </button>
                <!-- Hiển thị số lượng -->
                <button class=" border lg:px-2 lg:py-1 px-4 py-2 bg-gray-100">{{ quantity }}</button>
                <!-- Nút cộng số lượng -->
                <button @click="increment" class="bg-gray-200 text-gray-800 lg:px-2 lg:py-1 px-4 py-2 hover:bg-primary">
                  +
                </button>
              </div>
              <div class="text-black font-bold lg:text-lg text-2xl">
                6999$
              </div>
              <!-- Nút trừ số lượng -->
            </div>
          </div>
        </div>
        <div class="flex border-b py-5 w-full">
          <div class="lg:mr-2 mr-6">
            <NuxtImg alt="product" src="/images/0001.webp" width="64" height="96" />
          </div>
          <div>
            <div class="font-light text-gray-800 inline-block lg:text-base text-2xl">
              Quần suông Black Tuysi khuy kiểu
            </div>
            <div class="font-light text-gray-600 lg:text-sm text-xl lg:py-2 py-4">
              Color : <b class="lg:text-base text-xl">Black</b>
            </div>
            <div class="flex items-center justify-between">
              <div>
                <button @click="decrement" class="bg-gray-200 text-gray-800 lg:px-2 lg:py-1 px-4 py-2 hover:bg-primary">
                  -
                </button>
                <!-- Hiển thị số lượng -->
                <button class=" border lg:px-2 lg:py-1 px-4 py-2 bg-gray-100">{{ quantity }}</button>
                <!-- Nút cộng số lượng -->
                <button @click="increment" class="bg-gray-200 text-gray-800 lg:px-2 lg:py-1 px-4 py-2 hover:bg-primary">
                  +
                </button>
              </div>
              <div class="text-black font-bold lg:text-lg text-2xl">
                6999$
              </div>
              <!-- Nút trừ số lượng -->
            </div>
          </div>
        </div>
        <div class="flex border-b py-5 w-full">
          <div class="lg:mr-2 mr-6">
            <NuxtImg alt="product" src="/images/0001.webp" width="64" height="96" />
          </div>
          <div>
            <div class="font-light text-gray-800 inline-block lg:text-base text-2xl">
              Quần suông Black Tuysi khuy kiểu
            </div>
            <div class="font-light text-gray-600 lg:text-sm text-xl lg:py-2 py-4">
              Color : <b class="lg:text-base text-xl">Black</b>
            </div>
            <div class="flex items-center justify-between">
              <div>
                <button @click="decrement" class="bg-gray-200 text-gray-800 lg:px-2 lg:py-1 px-4 py-2 hover:bg-primary">
                  -
                </button>
                <!-- Hiển thị số lượng -->
                <button class=" border lg:px-2 lg:py-1 px-4 py-2 bg-gray-100">{{ quantity }}</button>
                <!-- Nút cộng số lượng -->
                <button @click="increment" class="bg-gray-200 text-gray-800 lg:px-2 lg:py-1 px-4 py-2 hover:bg-primary">
                  +
                </button>
              </div>
              <div class="text-black font-bold lg:text-lg text-2xl">
                6999$
              </div>
              <!-- Nút trừ số lượng -->
            </div>
          </div>
        </div>
        <div class="text-right lg:text-base text-2xl">
          Tổng cộng: <b class="lg:text-2xl text-3xl ">6999$</b>
        </div>
        <div>
          <NuxtLink to="/cart"
            class="w-full block text-center border-black py-3 text-white bg-black text-lg mt-3 font-medium hover:bg-white hover:text-black border-solid border duration-500">XEM
            GIỎ HÀNG</NuxtLink>
        </div>
      </div>
    </div>
    <div :class="{ 'nav-menu': true, 'active': isSearchOpen }"
      class="search-menu fixed z-50 top-0 left-0 w-full h-full block lg:hidden ">
      <div class="w-full h-full  bg-black/40">
        <div class="relative w-auto flex-growflex ">
          <input type="text" placeholder="Search..."
            class="border-b focus:outline-none focus:border-gray-600 w-full py-5 pl-10 pr-10 text-base" />
          <div class="absolute inset-y-0 left-2 flex items-center pr-3 pb-3 mt-3">
            <Icon name="ph:magnifying-glass" class="w-6 h-6" />
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-3 pb-3 mt-3">
            <Icon @click="  isSearchOpen = !isSearchOpen" name="majesticons:close" class="w-6 h-6" />
          </div>
        </div>
        <div class="w-screen h-screen bg-white block lg:hidden">
          <div class="grid grid-cols-10 border-b">
            <div class="col-span-3 p-4">
              <NuxtImg width="105" height="105" alt="product" src="/images/22.webp" />
            </div>
            <div class="col-span-7 flex flex-col justify-center">
              <div class="text-sm">ADORABLE Starter Set</div>
              <b class="text-primary">90$</b>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" sticky lg:hidden container">
      <div class="relative w-full flex-grow border-b lg:block hidden">
        <input type="text" placeholder="Enter the phrase you are looking for"
          class="border-b placeholder-gray-500 text-sm focus:outline-none  w-full py-2 pl-5 pr-10 " />
        <div class="absolute inset-y-0 right-0 flex items-center ">
          <Icon name="ph:magnifying-glass-thin" class="w-6 h-6" />
        </div>
      </div>
    </div>
    <nav :class="{ 'nav-menu': true, 'active': isMenuOpen }" class="lg:hidden z-50 bg-white w-screen h-screen">
      <div class="absolute inset-y-0 right-0 top-0 flex pr-2 pb-3 mt-3">
        <Icon @click="  isMenuOpen = !isMenuOpen" name="majesticons:close" class="w-10 h-10" />
      </div>
      <ul class="divide-y mt-20 ml-5 divide-gray-200">
        <li v-for="(item, index) in menuItems" :key="index" class="pb-2">
          <div class="flex items-center justify-between">
            <NuxtLink to="/" class="block py-2 text-2xl transition duration-300 ease-in-out ">
              {{ item.name }}
            </NuxtLink>
            <!-- Menu con hiển thị khi click -->
            <div class="mr-5" @click.prevent="toggleMenu(index)" :class="{
              'text-gray-400': selectedMenu !== index
            }">
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
    </nav>
    <div class="z-50 fixed bottom-0 left w-full  bg-white border-t lg:hidden">
      <div class="flex items-center justify-around py-2">
        <button @click="  isMenuOpen = !isMenuOpen" :class="{ 'text-primary': isMenuOpen }">
          <Icon class="text-3xl" name="gravity-ui:bars-unaligned" />
        </button>
        <NuxtLink to="">
          <Icon class="text-4xl" name="material-symbols-light:favorite-outline" />
        </NuxtLink>
        <NuxtLink to="">
          <Icon class="text-4xl" name="ph:house-thin" />
        </NuxtLink>
        <NuxtLink @click="isCartOpen = !isCartOpen" to="">
          <div class="relative">
            <Icon class="text-3xl" name="ph:handbag-simple-light" />
            <span
              class="w-5 h-5 flex items-center justify-center rounded-full bg-black text-white absolute -top-1 -right-1 text-xs">0</span>
          </div>
        </NuxtLink>
        <NuxtLink to="">
          <Icon class="text-4xl" name="ic:baseline-manage-accounts" />
        </NuxtLink>
      </div>
    </div>

    <!-- Main Content -->

    <slot />

    <!-- Footer Section -->
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script lang="ts" setup>

// Sử dụng ref để quản lý số lượng
const quantity = ref(1);

// Hàm cộng số lượng
const increment = () => {
  quantity.value++;
};

// Hàm trừ số lượng
const decrement = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};
// Import cần thiết từ Vue

// Định nghĩa kiểu dữ liệu cho các item và submenu
interface MenuItem {
  name: string;
  submenu: string[];
}

// Khai báo biến và kiểu dữ liệu
const selectedMenu = ref<number | null>(null)

// Dữ liệu menu với kiểu MenuItem[]
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

// Hàm toggleMenu để thay đổi selectedMenu
const toggleMenu = (index: number) => {
  selectedMenu.value = selectedMenu.value === index ? null : index
}

import { ref } from 'vue'

// Tạo trạng thái phản ứng để theo dõi việc mở/đóng menu
const isMenuOpen = ref(false)
const isSearchOpen = ref(false)
const isCartOpen = ref(true)
// Hàm để bật/tắt trạng thái menu

import '@/assets/css/reset.css'
import '@/assets/css/styles.css'
import '@/assets/css/stylesheet.css'
import Footer from '~/components/Footer.vue';
const CateDropdown = [
  {
    name: 'Nail Polishes',
    subCategories: ['Transfer Papers',
      'Transfer Papers',
      'Semi-permanent Tops',
      'Paint Gel',
      'Vegan Classic Nail Polishes',
    ]
  },
  {
    name: 'Gels and Acrylics',
    subCategories: ['Transfer Papers',
      'Simple Xpress 3in1',
      'Transfer Gel',
      'Transfer Papers',
      'Transfer Papers',
    ]
  },
  {
    name: 'Nail Art',
    subCategories: ['Transfer Papers',
      'Transfer Papers',
      'Transfer Papers',
      'Transfer Papers',
      'Transfer Papers',
    ]
  },

  {
    name: 'Nail Polishes',
    subCategories: ['Transfer Papers',
      'Transfer Papers',
      'Semi-permanent Tops',
      'Paint Gel',
      'Vegan Classic Nail Polishes',
    ]
  },

]


</script>
