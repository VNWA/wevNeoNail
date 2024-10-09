<template>
    <div class="custom-underline my-7 ">
        Bestseller
    </div>
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
        <SwiperSlide class="px-10" v-for="(item, index) in data" :key="index">
            <NuxtLink to="/">
                <NuxtImg :src="item.image" />
                <div class="hover:opacity-50">
                    <div class="text-sm uppercase">
                        {{ item.name }}
                    </div>
                    <div class="text-sm uppercase">
                        {{ item.price }}
                    </div>
                </div>
            </NuxtLink>
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
