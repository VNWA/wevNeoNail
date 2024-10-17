<template>
    <div class="container mx-auto">
        <div class="">
            <swiper :pagination="false"
                :style="{ '--swiper-navigation-color': 'black', '--swiper-pagination-color': 'black' }" :loop="true"
                :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" :modules="modules"
                class="mySwiper2">
                <swiper-slide v-for="(item, index) in data" :key="index">
                    <NuxtImg width="500" height="500" alt="product" :src="item.image" />
                </swiper-slide>
            </swiper>
            <div class="">
                <swiper :pagination="false" @swiper="setThumbsSwiper" :loop="true" :spaceBetween="10" :slidesPerView="5"
                    :freeMode="true" :watchSlidesProgress="true" :modules="modules" class=" mySwiper">
                    <swiper-slide v-for="(item, index) in data" :key="index">
                        <div class="my-2 flex space-x-1 overflow-x-auto whitespace-nowrap relative pt-2">
                            <div class="pb-5">
                                <button to="/"
                                    class="border border-gray-400 mr-2 text-black bg-white px-4 py-2 transition duration-300 hover:border-primary hover:text-primary">
                                    Esmaltes
                                </button>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    name: {
        type: String,
        default: ""
    },
    steps: {
        type: Object,
        default: {}
    }
})
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

const modules = [FreeMode, Navigation, Thumbs, Pagination];



</script>

<style></style>