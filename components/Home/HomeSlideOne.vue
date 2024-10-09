<template>
    <Swiper :style="{
        '--swiper-navigation-color': 'black',
        '--swiper-pagination-color': 'black',
    }" :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation, SwiperPagination]" :slides-per-view="3"
        :autoplay="true" :loop="true" :navigation="true">
        <SwiperSlide class="mt-16" v-for="(item, index) in data" :key="index">
            <div class="px-6">
                <NuxtImg class="px-4" :src="item.image" />
                <div class="hover:opacity-60">
                    <div class="text-sm	">
                        {{ item.title }}
                    </div>
                    <h4>
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