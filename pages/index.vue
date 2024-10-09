<template>
  <main>
    <div class="container mx-auto">
      <div class="w-full hidden lg:block">
        <NuxtLink class="flex justify-center items-center" to="/products">
          <NuxtImg width="100%" class="cursor-pointer mb-2" src="/images/fotob-719.webp" />
        </NuxtLink>
      </div>
      <div class="lg:hidden mt-1">
        <NuxtLink to="/products">
          <NuxtImg width="410" height="270" class="cursor-pointer mb-2 w-full h-full object-cover" src="/images/fotos-text-719.webp" />
        </NuxtLink>
      </div>

      <div class="">
        <Swiper :modules="[SwiperEffectCreative, SwiperPagination]" :spaceBetween="5" :breakpoints="{
          '640': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }">
          <SwiperSlide>
            <NuxtLink class="w-full h-full" to="/">
              <NuxtImg class="w-full h-auto object-cover " width="526" height="175" src="/images/fotos-709.webp" />
            </NuxtLink>
          </SwiperSlide>
          <SwiperSlide>
            <NuxtLink class="w-full h-full" to="/">
              <NuxtImg width="526" height="175" src="/images/fotos-709.webp" />
            </NuxtLink>
          </SwiperSlide>
          <SwiperSlide>
            <NuxtLink class="w-full h-full" to="/">
              <NuxtImg class="mr-0" width="526" height="175" src="/images/fotos-709.webp" />
            </NuxtLink>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="grid lg:grid-cols-6 grid-cols-3 lg:gap-5 gap-2 py-5 ">
        <div v-for="(item, index) in CateList " :key="index">
          <HomeCateItem :name="item.name" :image="item.image" />
        </div>
      </div>
      <div class="hidden lg:grid grid-cols-2 my-6">
        <div>
          <div class="custom-underline">
            Kits with lamp for beginners
          </div>
          <div>
            Start your adventure with semi-permanent nail polishes with our kit and create your beauty salon at home
          </div>
          <HomeSlideOne :data="SliderList" />
        </div>
        <div>
          <NuxtLink to="/">
            <NuxtImg width="800" height="450" src="images/23.webp" />
          </NuxtLink>
        </div>
      </div>
      <HomeAboutProducts />
      <HomeSlideTwo :data="SliderList2" />
      <HomeCommit />
      <div class="custom-underline mt-4 ">
        Follow @neonailespana on the Instagram Community
      </div>
      <div class="flex mt-3 mb-5">
        <NuxtLink class="mx-1" to="/">
          <div
            class="w-10 h-10 cursor-pointer border border-black bg-white text-black rounded-full flex justify-center items-center text-lg	 font-bold hover:bg-black hover:text-white transition-colors duration-300">
            <Icon name="bi:instagram"></Icon>
          </div>
        </NuxtLink>
        <NuxtLink class="mx-1" to="/">
          <div
            class="w-10 h-10 cursor-pointer border border-black bg-white text-black rounded-full flex justify-center items-center text-lg	 font-bold hover:bg-black hover:text-white transition-colors duration-300">
            <Icon name="bi:instagram"></Icon>
          </div>
        </NuxtLink>
        <NuxtLink class="mx-1" to="/">
          <div
            class="w-10 h-10 cursor-pointer border border-black bg-white text-black rounded-full flex justify-center items-center text-lg	 font-bold hover:bg-black hover:text-white transition-colors duration-300">
            <Icon name="bi:instagram"></Icon>
          </div>
        </NuxtLink>
        <NuxtLink class="mx-1" to="/">
          <div
            class="w-10 h-10 cursor-pointer border border-black bg-white text-black rounded-full flex justify-center items-center text-lg	 font-bold hover:bg-black hover:text-white transition-colors duration-300">
            <Icon name="bi:instagram"></Icon>
          </div>
        </NuxtLink>

      </div>
      <div>
        <Swiper :style="{
          '--swiper-navigation-color': 'black',
          '--swiper-pagination-color': 'black',
        }" :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination, SwiperNavigation]" :slides-per-view="2"
          :autoplay="true" :loop="true" :breakpoints="{
            640: {  // Từ 640px trở xuống (màn hình di động)
              slidesPerView: 2,  // Hiển thị 2 cột
              navigation: false  // Ẩn nút điều hướng
            },
            1024: {  // Từ 1024px trở lên
              slidesPerView: 5,  // Hiển thị 5 cột
              navigation: true   // Hiện nút điều hướng
            }
          }">
          <SwiperSlide v-for="(item, index) in ProductPicture " :key="index">
            <HomeProductPicture :image="item.image" />
          </SwiperSlide>
        </Swiper>

      </div>
      <title></title>
      <meta name="title" content="">
    </div>
  </main>
</template>

<script lang="ts" setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css/navigation';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

useSeoMeta({
  title: 'Home',
})
const CateList = [
  {
    name: 'Essential and Premium',
    image: 'images/16.webp'
  },
  {
    name: 'Advanced Care',
    image: 'images/17.webp'
  },
  {
    name: 'Nail Strengthener',
    image: 'images/18.webp'
  },
  {
    name: 'UV Protection',
    image: 'images/19.webp'
  },
  {
    name: 'Moisturizing Base',
    image: 'images/20.webp'
  },
  {
    name: 'Gel Finish',
    image: 'images/21.webp'
  },
]
const SliderList = [
  {
    image: 'images/22.webp',
    title: '21 Days Starter Set',
    price: '55$'
  },
  {
    image: 'images/17.webp',
    title: '21 Days Starter Set',
    price: '55$'
  },
  {
    image: 'images/18.webp',
    title: '21 Days Starter Set',
    price: '55$'
  },
  {
    image: 'images/19.webp',
    title: '21 Days Starter Set',
    price: '55$'
  },
  {
    image: 'images/20.webp',
    title: '21 Days Starter Set',
    price: '55$'
  },
  {
    image: 'images/21.webp',
    title: '21 Days Starter Set',
    price: '55$'
  },
]
const SliderList2 = [
  {
    name: 'Essential and Premium',
    image: 'images/16.webp',
    price: '69$'
  },
  {
    name: 'Advanced Care',
    image: 'images/17.webp',
    price: '69$'

  },
  {
    name: 'Nail Strengthener',
    image: 'images/18.webp',
    price: '69$'

  },
  {
    name: 'UV Protection',
    image: 'images/19.webp',
    price: '69$'

  },
  {
    name: 'Moisturizing Base',
    image: 'images/20.webp',
    price: '69$'

  },
  {
    name: 'Gel Finish',
    image: 'images/21.webp',
    price: '69$'

  },
]

const ProductPicture = [
  {
    image: 'images/27.webp'
  },
  {
    image: 'images/27.webp'
  },
  {
    image: 'images/27.webp'
  },
  {
    image: 'images/27.webp'
  },
  {
    image: 'images/27.webp'
  },

]

</script>

<style>
.locale {
  display: none;
}

.locale.active {
  display: block;
}
</style>

<style>
.mySwiper {
  width: 100%;
  height: auto;
}
</style>
