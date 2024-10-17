<template>
  <main>
    <div class="container mx-auto">
      <!-- Desktop Banner -->
      <div class="w-full hidden lg:block">
        <NuxtLink aria-label="VNWA Link" to="/products" class="flex justify-center items-center">
          <NuxtImg
            :alt="'Banner chính - Desktop'"
            :width="1600"
            :height="480"
            class="cursor-pointer mb-2"
            :src="images.bannerDesktop"
          />
        </NuxtLink>
      </div>

      <!-- Mobile Banner -->
      <div class="lg:hidden mt-1">
        <NuxtLink aria-label="VNWA Link" to="/products">
          <NuxtImg
            :alt="'Banner chính - Mobile'"
            :width="410"
            :height="270"
            class="cursor-pointer mb-2 w-full h-full object-cover"
            :src="images.bannerMobile"
          />
        </NuxtLink>
      </div>

      <!-- Product Slider -->
      <div>
        <Swiper
          :modules="[SwiperEffectCreative, SwiperPagination]"
          :spaceBetween="5"
          :breakpoints="{
            '640': { slidesPerView: 1, spaceBetween: 20 },
            '768': { slidesPerView: 2, spaceBetween: 40 },
            '1024': { slidesPerView: 3, spaceBetween: 10 },
          }"
        >
          <SwiperSlide v-for="(image, index) in images.productImages" :key="index">
            <NuxtLink aria-label="VNWA Link" class="w-full h-full" to="/products">
              <NuxtImg
                :alt="'Hình ảnh sản phẩm ' + (index + 1)"
                class="w-full h-auto object-cover"
                :width="526"
                :height="175"
                :src="image"
              />
            </NuxtLink>
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- Category List -->
      <div class="grid lg:grid-cols-6 grid-cols-3 lg:gap-5 gap-2 py-5">
        <div v-for="(item, index) in CateList" :key="index">
          <HomeCateItem :name="item.name" :image="item.image" />
        </div>
      </div>

      <!-- Desktop Specific Content -->
      <div class="hidden lg:grid grid-cols-2 my-6">
        <div>
          <div class="custom-underline">Kits with lamp for beginners</div>
          <div>
            Start your adventure with semi-permanent nail polishes with our kit and create your beauty salon at home.
          </div>
          <HomeSlideOne :data="SliderList" />
        </div>
        <div>
          <NuxtLink aria-label="VNWA Link" to="/products">
            <NuxtImg
              :alt="'Hình ảnh sản phẩm chủ đạo'"
              :width="800"
              :height="450"
              src="images/23.webp"
            />
          </NuxtLink>
        </div>
      </div>
      
      <div class="lg:hidden grid grid-cols-1">
        <HomeSlideOne :data="SliderList" />
      </div>

      <!-- Additional Components -->
      <HomeAboutProducts />
      <HomeSlideTwo :data="SliderList2" />
      <HomeCommit />

      <!-- Instagram Section -->
      <div class="custom-underline mt-4">Follow @neonailespana on the Instagram Community</div>
      <div class="flex mt-3 mb-5">
        <NuxtLink aria-label="VNWA Link" v-for="(icon, index) in instagramLinks" :key="index" class="mx-1" to="/">
          <div class="w-10 h-10 cursor-pointer border border-black bg-white text-black rounded-full flex justify-center items-center text-lg font-bold hover:bg-black hover:text-white transition-colors duration-300">
            <Icon name="bi:instagram"></Icon>
          </div>
        </NuxtLink>
      </div>

      <!-- Product Picture Slider -->
      <div>
        <Swiper
          :style="{ '--swiper-navigation-color': 'black', '--swiper-pagination-color': 'black' }"
          :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination, SwiperNavigation]"
          :slides-per-view="2"
          :autoplay="true"
          :loop="true"
          :breakpoints="{
            640: { slidesPerView: 2, navigation: false },
            1024: { slidesPerView: 5, navigation: true },
          }"
        >
          <SwiperSlide v-for="(item, index) in ProductPicture" :key="index">
            <HomeProductPicture :image="item.image" />
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- Meta Information -->
      <title>Home</title>
      <meta name="title" content="Home" />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const images = {
  bannerDesktop: 'images/fotob-719.webp',
  bannerMobile: 'images/fotos-text-719.webp',
  productImages: [
    'images/fotos-725.webp',
    'images/fotos-726.webp',
    'images/fotos-727.webp',
  ],
  // Add other images here...
};

const CateList = [
  { name: 'Essential and Premium', image: 'images/16.webp' },
  { name: 'Advanced Care', image: 'images/17.webp' },
  { name: 'Nail Strengthener', image: 'images/18.webp' },
  { name: 'UV Protection', image: 'images/19.webp' },
  { name: 'Moisturizing Base', image: 'images/20.webp' },
  { name: 'Gel Finish', image: 'images/21.webp' },
];

const SliderList = [
  { image: 'images/22.webp', title: '21 Days Starter Set', price: '55$' },
  { image: 'images/22.webp', title: '21 Days Starter Set', price: '55$' },
  { image: 'images/22.webp', title: '21 Days Starter Set', price: '55$' },
  { image: 'images/22.webp', title: '21 Days Starter Set', price: '55$' },
  { image: 'images/22.webp', title: '21 Days Starter Set', price: '55$' },
  // Add other sliders here...
];

const SliderList2 = [
  { name: 'Essential and Premium', image: 'images/01.webp', price: '69$', discount: '90$' },
  { name: 'Essential and Premium', image: 'images/01.webp', price: '69$', discount: '90$' },
  { name: 'Essential and Premium', image: 'images/01.webp', price: '69$', discount: '90$' },
  { name: 'Essential and Premium', image: 'images/01.webp', price: '69$', discount: '90$' },
  { name: 'Essential and Premium', image: 'images/01.webp', price: '69$', discount: '90$' },
  // Add other sliders here...
];

const ProductPicture = [
  { image: 'images/27.webp' },
  { image: 'images/27.webp' },
  { image: 'images/27.webp' },
  { image: 'images/27.webp' },
  { image: 'images/27.webp' },  
  // Add other product pictures here...
];

const instagramLinks = new Array(4).fill(null); // Placeholder for Instagram links

useSeoMeta({
  title: 'Home',
});
</script>

<style>
.locale {
  display: none;
}

.locale.active {
  display: block;
}

.mySwiper {
  width: 100%;
  height: auto;
}
</style>
