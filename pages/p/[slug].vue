<template>
  <div class="container mx-auto">
    <Breadcrumb />
    <div class="flex items-center justify-center"></div>
    <div class="grid grid-cols-12 gap-10">
      <!-- Swiper lớn -->
      <div class="lg:col-span-7 col-span-12">
        <div class="lg:block hidden ">
          <swiper :pagination="false"
            :style="{ '--swiper-navigation-color': 'black', '--swiper-pagination-color': 'black' }" :loop="true"
            :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" :modules="modules"
            class="mySwiper2">
            <swiper-slide v-for="(image, index) in mainImages" :key="index">
              <NuxtImg width="500" height="500" alt="product" :src="image" />
            </swiper-slide>
          </swiper>
          <div class="">
            <swiper :pagination="false" @swiper="setThumbsSwiper" :loop="true" :spaceBetween="10" :slidesPerView="5"
              :freeMode="true" :watchSlidesProgress="true" :modules="modules" class=" mySwiper">
              <swiper-slide v-for="(image, index) in thumbnailImages" :key="index">
                <NuxtImg width="200" height="200" alt="product" :src="image" />
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="lg:hidden block">
          <swiper :style="{
            '--swiper-navigation-color': 'black',
            '--swiper-pagination-color': 'black',
          }" :pagination="true" :modules="modules" class="mySwiper2">
            <swiper-slide v-for="(image, index) in mainImages" :key="index">
              <NuxtImg width="500" height="500" alt="product" class="pt-5 px-5" :src="image" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- Thông tin sản phẩm -->
      <div class="lg:col-span-5 col-span-12 lg:ml-8">
        <h2 class="text-3xl font-bold">Quần suông Black Tuysi khuy kiểu</h2>
        <div class="lg:my-6 my-3">SKU: 22M8897</div>
        <div class="lg:my-6 my-3">
          <div class="text-base text-gray-400 line-through">60$</div>
          <div class="flex lg:jutify justify-between">
            <div class="text-3xl font-bold mr-8 py-1">85$</div>
            <div class="flex justify-center items-center rounded-md border">
              <button @click="decrement" class="text-gray-800 px-4 py-2 hover:bg-primary">-</button>
              <span class="border-r border-l px-4 py-2">{{ quantity }}</span>
              <button @click="increment" class="text-gray-800 px-4 py-2 hover:bg-primary">+</button>
            </div>
          </div>
        </div>

        <div class="lg:my-6 my-3 lg:block hidden">
          <span class="text-gray-500 text-sm">Đã bao gồm VAT</span>
          <br />
          El precio más bajo durante los 30 días anteriores a la introducción de la promoción: 20,99 €
        </div>
        <div class="flex lg:my-6 my-3 items-center">
          <button
            class="bg-black w-full lg:w-auto py-4 lg:px-16 text-white flex lg:mr-6 justify-center text-3xl lg:text-base items-center uppercase">
            <Icon name="ph:handbag-simple-light" class="hover:opacity-70 w-6 h-6 mr-4" />
            A la cesta
          </button>
          <Icon class="hover:opacity-70 w-16 h-16 cursor-pointer hidden lg:block"
            name="material-symbols-light:favorite-outline" />
        </div>
        <div class="lg:my-6 my-3 lg:hidden block">
          <span class="text-gray-500 text-sm">Đã bao gồm VAT</span>
          <br />
          El precio más bajo durante los 30 días anteriores a la introducción de la promoción: 20,99 €
        </div>
        <div class="lg:my-6 my-3 flex">
          <NuxtImg width="42" height="22" class="mr-3" src="/images/icon_free_delivery_info.png" />
          Plazo de envío del almacén: <b class="pl-1">48h</b>
        </div>
      </div>
    </div>
    <div class="lg:block hidden mt-4">
      <div class="flex ">
        <div v-for="(tab, index) in tabs" :key="index" class="mr-2">
          <button
            :class="['py-4 px-6 text-xl', { 'bg-primary hover:bg-rose-300 text-white': currentTab === index, 'bg-gray-200 hover:bg-gray-300': currentTab !== index }]"
            @click="currentTab = index">
            {{ tab.name }}
          </button>
        </div>
      </div>
      <div v-for="(tab, index) in tabs" :key="index" v-show="currentTab === index" class="mt-4 ">
        <p>{{ tab.content }}</p>
      </div>

    </div>
    <div class="block lg:hidden mt-4">
      <div>
        <!-- Nút kích hoạt dropdown 1 -->
        <div class="border-b dropdown" @click="toggleDropdown(1)" tabindex="0" @keydown.enter="toggleDropdown(1)">
          <div class="py-5 pr-5 flex justify-between items-center uppercase">
            <span class="text-xl">Descripción 1</span>
            <div class="flex justify-center items-center">
              <Icon class="text-2xl" name="ph:caret-down" />
            </div>
          </div>
        </div>
        <div v-show="isDropdownOpen && currentDropdown === 1" class="">
          <div class="py-3 pr-3">
            Nội dung 1
          </div>
        </div>
      </div>
      <div>
        <!-- Nút kích hoạt dropdown 2 -->
        <div class="border-b dropdown" @click="toggleDropdown(2)" tabindex="0" @keydown.enter="toggleDropdown(2)">
          <div class="py-5 pr-5 flex justify-between items-center uppercase">
            <span class="text-xl">Descripción 2</span>
            <div class="flex justify-center items-center">
              <Icon class="text-2xl" name="ph:caret-down" />
            </div>
          </div>
        </div>
        <div v-show="isDropdownOpen && currentDropdown === 2" class="">
          <div class="py-3 pr-3">
            Nội dung 2
          </div>
        </div>
      </div>
      <div>
        <!-- Nút kích hoạt dropdown 2 -->
        <div class="border-b dropdown" @click="toggleDropdown(3)" tabindex="0" @keydown.enter="toggleDropdown(3)">
          <div class="py-5 pr-5 flex justify-between items-center uppercase">
            <span class="text-xl">Descripción 3</span>
            <div class="flex justify-center items-center">
              <Icon class="text-2xl" name="ph:caret-down" />
            </div>
          </div>
        </div>
        <div v-show="isDropdownOpen && currentDropdown === 3" class="">
          <div class="py-3 pr-3">
            Nội dung 3
          </div>
        </div>
      </div>
      <div>
        <!-- Nút kích hoạt dropdown 2 -->
        <div class="border-b dropdown" @click="toggleDropdown(4)" tabindex="0" @keydown.enter="toggleDropdown(4)">
          <div class="py-5 pr-5 flex justify-between items-center uppercase">
            <span class="text-xl">Descripción 4</span>
            <div class="flex justify-center items-center">
              <Icon class="text-2xl" name="ph:caret-down" />
            </div>
          </div>
        </div>
        <div v-show="isDropdownOpen && currentDropdown === 4" class="">
          <div class="py-3 pr-3">
            Nội dung 4
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const isDropdownOpen = ref(false);
    const currentDropdown = ref(null); // Thêm biến để theo dõi dropdown nào đang mở

    const toggleDropdown = (dropdownNumber) => {
      if (currentDropdown.value === dropdownNumber) {
        isDropdownOpen.value = !isDropdownOpen.value; // Đổi trạng thái
      } else {
        isDropdownOpen.value = true; // Mở dropdown mới
        currentDropdown.value = dropdownNumber; // Cập nhật dropdown hiện tại
      }
    };

    const handleClickOutside = (event) => {
      const dropdownElements = document.querySelectorAll('.dropdown');
      const isClickOutside = Array.from(dropdownElements).every(
        (dropdownElement) => !dropdownElement.contains(event.target)
      );
      if (isClickOutside) {
        isDropdownOpen.value = false;
        currentDropdown.value = null; // Đặt lại dropdown hiện tại
      }
    };

    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
    });

    onBeforeUnmount(() => {
      document.removeEventListener('click', handleClickOutside);
    });

    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    const modules = [FreeMode, Navigation, Thumbs, Pagination];

    // Images for the main swiper
    const mainImages = [
      '/images/0esmalte-semipermanente-72-ml-charca-de-rana (1).webp',
      '/images/0esmalte-semipermanente-72-ml-charca-de-rana (1).webp',
      '/images/0esmalte-semipermanente-72-ml-charca-de-rana (1).webp',
      '/images/0esmalte-semipermanente-72-ml-charca-de-rana (1).webp',
      '/images/0esmalte-semipermanente-72-ml-charca-de-rana (1).webp',
      // Add more image URLs as needed
    ];

    // Images for the thumbnail swiper
    const thumbnailImages = [
      '/images/0esmalte-semipermanente-72-ml-charca-de-rana (1).webp',
      '/images/0esmalte-semipermanente-72-ml-charca-de-rana (1).webp',
      '/images/0esmalte-semipermanente-72-ml-charca-de-rana (1).webp',
      '/images/0esmalte-semipermanente-72-ml-charca-de-rana (1).webp',
      '/images/0esmalte-semipermanente-72-ml-charca-de-rana (1).webp',
      '/images/0esmalte-semipermanente-72-ml-charca-de-rana (1).webp',
      // Add more image URLs as needed
    ];

    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules,
      mainImages,
      thumbnailImages,
      isDropdownOpen,
      currentDropdown,
      toggleDropdown,
    };
  },
  data() {
    return {
      quantity: 1,
      currentTab: 0,
      tabs: [
        { name: 'Descripción 1', content: 'Contenido 1...' },
        { name: 'Descripción 2', content: 'Contenido 2...' },
        { name: 'Descripción 3', content: 'Contenido 3...' },
        { name: 'Descripción 4', content: 'Contenido 4...' },
      ],
    };
  },
  methods: {
    increment() {
      this.quantity++;
    },
    decrement() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
  },
};
</script>

<style scoped>
.active {
  display: block;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.7;
  cursor: pointer;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide NuxtImg {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-pagination-bullet {
  opacity: 1;
}

.swiper-pagination-bullet-active {
  background: #feb2be;
  border: 1px solid black;
}
</style>
