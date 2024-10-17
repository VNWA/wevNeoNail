    <template>
        <div class="container mx-auto">
            <div class="lg:col-span-7 col-span-12">
                <div class="">
                    <div class="mt-8">
                        <swiper :pagination="false" @swiper="setThumbsSwiper" :loop="true" :spaceBetween="10"
                            :slidesPerView="slideShow" :freeMode="true" :watchSlidesProgress="true" :modules="modules"
                            class="mySwiper">
                            <swiper-slide v-for="(item, index) in steps" :key="index">
                                <span @click="setActive(index)" :class="{
                                    'active': activeIndex === index,
                                    'border-primary text-primary': activeIndex === index,
                                    'border-gray-400 text-black': activeIndex !== index
                                }"
                                    class="border w-full lg:text-base text-xs  lg:mr-2 bg-white lg:px-4 py-2 transition duration-300 cursor-pointer">
                                    {{ item.name }}
                                </span>
                            </swiper-slide>
                        </swiper>
                    </div>
                    <swiper :pagination="false"
                        :style="{ '--swiper-navigation-color': '#feb2be', '--swiper-pagination-color': '#feb2be' }"
                        :loop="true" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }"
                        :modules="modules" class="mySwiper2">
                        <swiper-slide v-for="(item, index) in steps" :key="index">
                            <div class="lg:px-10 px-12 py-4">
                                <div class="grid lg:grid-cols-2 gap-8">
                                    <div>
                                        <NuxtImg width="800" height="450" alt="product" :src="item.image" />
                                    </div>
                                    <div class="text-left lg:text-base text-2xl">
                                        <div class="font-semibold text-2xl py-3">
                                            {{ item.name }}
                                        </div>
                                        <div class="py-3 lg:text-base text-xl">
                                            {{ item.desc }}
                                        </div>
                                        <div>
                                            <div class="font-semibold lg:text-lg text-2xl py-4">Productos:</div>
                                            <ul v-if="item.products.length">
                                                <li v-for="(product, pIndex) in item.products" :key="pIndex">
                                                    <div class="grid grid-cols-12">
                                                        <div class="col-span-2">
                                                            <NuxtImg :src="product.image" alt="product" width="100"
                                                                height="100" />
                                                        </div>
                                                        <div class="text-left col-span-10 pl-3">
                                                            <div class="lg:text-base text-xl">
                                                                {{ product.title }}
                                                            </div>
                                                            <div class="text-primary lg:text-base text-xl">
                                                                {{ product.price }} $
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div v-else>Không có sản phẩm nào.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </template>


    <script setup>
    import { ref } from 'vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';

    const activeIndex = ref(0); // Khởi tạo activeIndex bằng 0 để trang số 1 luôn active
    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
        thumbsSwiper.value = swiper;
    };

    // Cập nhật activeIndex khi click vào trang khác
    const setActive = (index) => {
        activeIndex.value = index; 
    };

    defineProps({
        name: {
            type: String,
            default: ""
        },
        steps: {
            type: Array,
            default: () => []
        },
        slideShow :{
            type: Number,
            default: 5
        }
    });

    const modules = [FreeMode, Navigation, Thumbs, Pagination];
    </script>


    <style scoped>
    .active {
        color: #feb2be;
        border-color: #feb2be;
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
    /* CSS cho cuộn ngang */
    .overflow-x-auto {
        overflow-x: auto; /* Bật cuộn ngang */
        white-space: nowrap; /* Ngăn không cho các phần tử bên trong bị xuống dòng */
    }

    .flex {
        display: flex; /* Thiết lập chế độ hiển thị thành flex */
    }
    </style>
