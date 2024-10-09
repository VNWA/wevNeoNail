<template>
    <div class="relative group w-full  product_item border px-1 py-3 h-full hover:cursor-pointer">
        <!-- Link đến trang sản phẩm -->
        <div class="tags">
            <div class="flex items-center justify-end gap-1 text-xs">
                <span class="px-1 border uppercase bg-primary text-white">
                    new
                </span>
                <span class="px-1 border uppercase">
                    bestseller
                </span>
            </div>
        </div>
        <div class="content relative">
            <div class=" block group-hover:hidden">
                <NuxtLink to="/p/teo-dep-trai">
                    <NuxtImg :src="dataPro.image[0]" class="w-full h-full object-cover default-image"
                        v-if="dataPro.image.length > 0" />
                    <p class="text-center text-sm ">{{ dataPro.title }}</p> <!-- Tên sản phẩm -->

                    <!-- Giá cũ, chỉ hiển thị nếu có giá mới, và ẩn khi hover -->
                    <div class="text-xl text-gray-500 line-through text-center " v-if="dataPro.price_new">
                        {{ dataPro.price }}
                    </div>
                    <!-- Giá mới, chỉ hiển thị nếu có giá mới, và ẩn khi hover -->
                    <div class="text-2xl text-center font-bold " v-if="dataPro.price_new">
                        {{ dataPro.price_new }}
                    </div>
                    <!-- Nút hiển thị giảm giá, sẽ bị ẩn khi hover -->
                    <div class="text-center ">
                        <button class="py-1 px-2 me-2 mb-2 text-xs text-white bg-red-700 rounded-full">
                            AHORRAS 10%
                        </button>
                    </div>
                    <div class="flex items-center justify-center my-4 lg:hidden ">
                        <button class="flex text-white bg-black px-10 py-2 items-center justify-center">
                            <Icon class="mr-1" name="ph:handbag-simple-light" />
                            <div class="tracking-wider">
                                COMPRAR
                            </div>
                        </button>
                    </div>

                </NuxtLink>
            </div>
            <div class="  w-full h-full hidden group-hover:block ">

                <Swiper :style="{
                    '--swiper-navigation-color': 'black',
                    '--swiper-pagination-color': 'black',
                }" :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination, SwiperEffectFade]"
                    :slides-per-view="1" :autoplay="true" :loop="true" :navigation="true" effect="fade">
                    <!-- Lướt qua các ảnh trong mảng (bắt đầu từ phần tử thứ 2 để khác ảnh mặc định) -->
                    <SwiperSlide v-for="(image, index) in dataPro.image.slice(1)" :key="index">
                        <NuxtLink  to="/p/teo-dep-trai">
                            <div class="relative">
                                <div class="absolute top-0 left-0 w-full h-full z-10"></div>
                                <NuxtPicture :src="image"
                                    :imgAttrs="{ width: '280', height: '140', class: 'w-auto h-36 max-h-36 object-cover' }" />
                            </div>
                        </NuxtLink>
                    </SwiperSlide>
                </Swiper>

                <!-- Đặt phần nút và biểu tượng vào bên trong cùng div với swiper -->
                <div>
                    <div class="flex items-center justify-center my-4 ">
                        <button class="flex text-white bg-black px-10 py-2 items-center justify-center">
                            <Icon class="mr-1" name="ph:handbag-simple-light" />
                            <div class="tracking-wider">
                                COMPRAR
                            </div>
                        </button>
                    </div>
                    <div class="flex items-center justify-center my-2">
                        <Icon name="fa6-regular:heart" class="w-6 h-6" />
                    </div>
                </div>
            </div>
        </div>
        <!-- Ảnh mặc định được hiển thị trước khi hover -->



        <!-- Thông tin sản phẩm, sẽ bị ẩn khi hover -->


    </div>
</template>

<script setup lang="ts">
// Import các file CSS của Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Import các module cần thiết của Swiper


// Định nghĩa props để nhận dữ liệu từ component cha
defineProps({
    dataPro: {
        type: Object,
        default: () => ({}) // Nếu không có dataPro thì dùng object rỗng
    }
});
</script>

<style scoped>
.product_item .content {
    height: 70%;
}

/* Định dạng Swiper */
.swiper {
    width: 100%;
    height: 100%;
}

/* Căn giữa nội dung của Swiper slide */
.swiper-slide {
    text-align: center;
    background: #fff;

    /* Căn giữa hình ảnh trong slide */
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Căn chỉnh kích thước ảnh trong Swiper */
.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Khi hover vào, ẩn ảnh mặc định */
.group-hover .default-image {
    opacity: 0;
}
</style>
