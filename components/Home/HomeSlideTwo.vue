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
        <SwiperSlide v-for="(item, index) in data" :key="index">
            <div class="lg:p-12 p-2">
                <NuxtLink aria-label="VNWA Link" alt="product" to="/" class="group">
                    <NuxtImg alt="image" width="750" height="750" :src="item.image" />
                    <div class="mt-4 group-hover:opacity-70">
                        <div class="text-base uppercase">
                            {{ item.name }}
                        </div>
                        <div class="flex justify-center items-center gap-2">
                            <div class="text-sm uppercase line-through">
                                {{ item.discount }}
                            </div>
                            <div class="text-base uppercase">
                                {{ item.price }}
                            </div>
                        </div>
                    </div>
                </NuxtLink>
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
