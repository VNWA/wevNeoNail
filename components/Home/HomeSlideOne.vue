<template>
    <Swiper :style="{
        '--swiper-navigation-color': 'black',
        '--swiper-pagination-color': 'black',
    }" :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation, SwiperPagination]" 
        :autoplay="true" :loop="true" :navigation="true"
        :breakpoints="{
            640: {  // Màn hình dưới 640px (điện thoại)
                slidesPerView: 2,  // Hiển thị 2 slide
                spaceBetween: 10,  // Khoảng cách giữa các slide
                navigation : false
            },
            1024: {  // Màn hình từ 1024px trở lên (desktop)
                slidesPerView: 3,  // Hiển thị 3 slide
                spaceBetween: 30,  // Khoảng cách giữa các slide
            }
        }">
        <SwiperSlide class="lg:mt-16" v-for="(item, index) in data" :key="index">
            <div class="lg:px-6 py-2 lg:my-0 my-6">
                <NuxtImg  loading="lazy" alt="image" width="270" height="270" class="lg:px-4" :src="item.image" />
                <div class="hover:opacity-60">
                    <div class="lg:text-sm text-3xl">
                        {{ item.title }}
                    </div>
                    <h4 class="text-3xl lg:text-base font-semibold">
                        {{ item.price }}
                    </h4>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
</template>

<script setup>
defineProps({
    data: Object
})

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
</script>

<style>
.swiper {
    width: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
