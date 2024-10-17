<template>
    <div class="container mx-auto">
        <div>
            <Process :number="someNumber" />
        </div>
        <div class="block lg:hidden">
            <ProcessMobile :number="someNumber" />
        </div>
        <div>
            <NuxtImg  loading="lazy" alt="banner" width="1600" height="300" src="/images/banner-5.jpg" />
        </div>
        <div class="step-name relative flex justify-center items-center my-8">
            <span class=" text-4xl bg-white px-8">Cesta</span>
        </div>
        <div class="relative overflow-x-auto lg:block hidden">
            <table class="w-full text-left rtl:text-right">
                <thead class="uppercase border-b ">
                    <tr>
                        <th scope="col" class="px-6 py-3 font-light text-sm">
                            N
                        </th>
                        <th scope="col" class="pr-6 py-3 font-light text-sm">
                            Foto
                        </th>
                        <th scope="col" class="px-6 py-3 font-light text-sm">
                            Producto
                        </th>
                        <th scope="col" class="px-6 py-3 font-light text-sm">
                            Precio bruto
                        </th>
                        <th scope="col" class="px-6 py-3 font-light text-sm">
                            Cantidad
                        </th>
                        <th scope="col" class="px-6 py-3 font-light text-sm">
                            Descuento
                        </th>
                        <th scope="col" class="px-6 py-3 font-light text-sm">
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="pl-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            1
                        </th>
                        <td class="pr-6 py-4">
                            <NuxtLink aria-label="VNWA Link" to="/p/a">
                                <NuxtImg  loading="lazy" alt="product" width="100" height="100" src="/images/22.webp" />
                            </NuxtLink>
                        </td>
                        <td class="px-6 py-4">
                            <p class="mt-4">
                                <NuxtLink aria-label="VNWA Link" class="text-xl" to="/p/a">
                                    Datos de comprador
                                </NuxtLink>
                            </p>
                            <p>
                                <NuxtLink aria-label="VNWA Link" class="text-sm" to="/p/a">
                                    9926-7
                                </NuxtLink>
                            </p>

                        </td>
                        <td class="px-6 py-4">
                            <div class="text-sm text-gray-400 line-through  ">
                                50$
                            </div>
                            <!-- Giá mới, chỉ hiển thị nếu có giá mới, và ẩn khi hover -->
                            <div class="text-xl  font-bold text-primary">
                                69$
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center space-x-3">
                                <!-- Nút trừ số lượng -->
                                <button aria-label="VNWA Button" @click="decrement"
                                    class="bg-gray-200 text-gray-800 px-2 rounded-md hover:bg-primary">
                                    -
                                </button>
                                <!-- Hiển thị số lượng -->
                                <span class="text-lg">{{ quantity }}</span>
                                <!-- Nút cộng số lượng -->
                                <button aria-label="VNWA Button" @click="increment"
                                    class="bg-gray-200 text-gray-800 px-2 rounded-md hover:bg-primary">
                                    +
                                </button>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="text-base text-gray-400 line-through  ">
                                60$
                            </div>
                            <!-- Giá mới, chỉ hiển thị nếu có giá mới, và ẩn khi hover -->
                            <div class="text-2xl  font-bold text-primary">
                                85$
                            </div>
                        </td>
                        <td>
                            <Icon name="ion:ios-close-outline"
                                class=" cursor-pointer text-4xl text-gray-600 hover:bg-primary" />
                        </td>
                    </tr>
                    <tr>
                        <td class="px-6 py-4" colspan="5"></td>
                        <td class="px-6 py-4" colspan="2">60$</td>

                    </tr>
                    <tr class="bg-gray-100 border-t">
                        <td class="px-6 py-4 font-medium" colspan="5">Total de pedido:</td>
                        <td class="px-6 py-4" colspan="2">60$</td>
                    </tr>

                </tbody>
            </table>
        </div>
        <div>
            <div class="grid grid-cols-10 justify-center items-center lg:hidden">
                <div class="col-span-1 flex justify-center"><span class="text-xl">1</span></div>
                <div class="col-span-2 flex justify-center mr-4">
                    <NuxtLink aria-label="VNWA Link" to="/p/a">
                        <NuxtImg  loading="lazy" alt="product" width="100" height="100" src="/images/36.webp" />
                    </NuxtLink>
                </div>
                <div class="col-span-6">
                    <NuxtLink aria-label="VNWA Link" to="/p/a">
                        <h3 class="text-lg mb-1">Gel Polish - 7,2 ml - Crazy Idea</h3>
                        <p class="text-sm">9926-7</p>
                    </NuxtLink>
                </div>
                <div class="col-span-1">
                    <Icon name="ion:ios-close-outline" class=" cursor-pointer text-4xl text-gray-600 " />
                </div>
            </div>
            <div class="border-b-2 mt-8">
                <div class="grid grid-cols-3 lg:hidden pb-2 justify-center items-center">
                    <div class="grid justify-center items-center border-r border-dashed">
                        <span class="">Price :</span>
                        <div class="text-center">
                            <div class="text-sm text-gray-400 line-through my-1 ">
                                50$
                            </div>
                            <!-- Giá mới, chỉ hiển thị nếu có giá mới, và ẩn khi hover -->
                            <div class="text-xl font-bold text-primary mb-2">
                                69$
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-center items-center">
                            <!-- Nút trừ số lượng -->
                            <button aria-label="VNWA Button" @click="decrement" class="bg-gray-200 text-gray-800 px-4 py-2 hover:bg-primary">
                                -
                            </button>
                            <!-- Hiển thị số lượng -->
                            <button aria-label="VNWA Button" class=" border px-4 py-2 bg-gray-100">{{ quantity }}</button>
                            <!-- Nút cộng số lượng -->
                            <button aria-label="VNWA Button" @click="increment" class="bg-gray-200 text-gray-800 px-4 py-2 hover:bg-primary">
                                +
                            </button>
                        </div>
                    </div>

                    <div class="grid justify-center items-center border-l border-dashed">
                        <span class="">Price :</span>
                        <div class="text-center">
                            <div class="text-sm text-gray-400 line-through my-1 ">
                                50$
                            </div>
                            <!-- Giá mới, chỉ hiển thị nếu có giá mới, và ẩn khi hover -->
                            <div class="text-xl font-bold text-primary mb-2">
                                69$
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block lg:hidden">
            <div class="flex justify-center items-center my-4">
                <span class="mr-2 font-medium text-lg">Total de pedido:</span>
                <p class="text-lg">28,39 $</p>
            </div>
            <div
                class="flex justify-center items-center py-3 border-t border-b border-gray-300 border-dashed bg-gray-100">
                <span class="mr-2 font-medium text-xl">Total de pedido:</span>
            </div>
            <div class="flex justify-center items-center py-3 border-b border-gray-300 border-dashed  bg-gray-100">
                <p class="text-xl">28,39 $</p>
            </div>
        </div>
        <div>
        </div>
        <div class="flex items-center justify-center mt-10 mb-5 border-b pb-4">
            <NuxtImg  loading="lazy" alt="ship" width="42" height="22" class="mr-3" src="/images/icon_free_delivery_info.png" />
            <div class="uppercase text-lg font-medium text-gray-800">
                Te falta para el envío gratuito 64,60 €
            </div>
        </div>
        <div class="flex items-center justify-center my-5 ">
            <div class="mr-2">
                <input class="border pr-9 pl-3 py-3  focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Introducir el código" type="text">
            </div>
            <div>
                <input
                    class="border cursor-pointer border-black text-black pr-9 pl-3 py-3 hover:border-primary hover:text-primary hover:duration-500"
                    value="Calcula el descuento" type="submit">
            </div>
        </div>
        <div class="block lg:hidden">
            <div class="step-name relative flex justify-center items-center my-8">
                <span class=" text-4xl bg-white px-8">País de entrega</span>
            </div>
            <div>
                <!-- Nút kích hoạt dropdown -->
                <div class="border dropdown" @click="toggleDropdown" tabindex="0" @keydown.enter="toggleDropdown">
                    <div class="p-3 flex justify-between items-center">
                        <span>Penninsula</span>
                        <div class="flex justify-center items-center">
                            <Icon class="text-2xl" name="ph:caret-down" />
                        </div>
                    </div>
                </div>
                <div v-show="isDropdownOpen" class="bg-white border-b border-r border-l shadow-lg ">
                    <ul class="p-3">
                        <li class="py-2">Option 1</li>
                        <li class="py-2">Option 2</li>
                    </ul>
                </div>
            </div>

        </div>
        <div class="block lg:hidden">
            <div class="step-name relative flex justify-center items-center my-8">
                <span class=" text-4xl bg-white px-8">País de entrega</span>
            </div>
        </div>
        <div>
            <!-- Radio Button 1 -->
            <form action="/">
                <div :class="['grid grid-cols-8 gap-4 border justify-center items-center my-4 cursor-pointer', selectedOption === 'option1' ? 'border-primary' : 'border-gray-300']"
                    @click="selectedOption = 'option1'">
                    <div class="flex items-center justify-center">
                        <input type="radio" value="option1" v-model="selectedOption" class="radio-square" @click.stop />
                    </div>
                    <div class="col-span-2 flex items-center justify-center">
                        <NuxtImg  loading="lazy" alt="image" class="width-full h-auto" width="100" height="70"
                            src="/images/delivery-3.webp" />
                    </div>
                    <div class="col-span-4">
                        <span>Correos 1</span>
                    </div>
                    <div>
                        <div class="text-sm flex items-center justify-center">
                            50$
                        </div>
                    </div>
                </div>

                <!-- Radio Button 2 -->
                <div :class="['grid grid-cols-8 gap-4 border justify-center items-center cursor-pointer', selectedOption === 'option2' ? 'border-primary' : 'border-gray-300']"
                    @click="selectedOption = 'option2'">
                    <div class="flex items-center justify-center">
                        <input type="radio" value="option2" v-model="selectedOption" class="radio-square" @click.stop />
                    </div>
                    <div class="col-span-2 flex items-center justify-center">
                        <NuxtImg  loading="lazy" alt="image" class="width-full h-auto" width="100" height="70"
                            src="/images/delivery-3.webp" />
                    </div>
                    <div class="col-span-4">
                        <span>Correos 2</span>
                    </div>
                    <div>
                        <div class="text-sm flex items-center justify-center">
                            50$
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="step-name relative flex justify-center items-center my-8">
            <span class=" text-4xl bg-white px-8">Pago</span>
        </div>
        <div>
            <form action="/">
                <div class="flex justify-center items-center">
                    <div class="grid grid-cols-3 gap-4 text-center ">
                        <!-- Option 1 -->
                        <div :class="['border', 'cursor-pointer', selectedOption1 === 'option1' ? 'border-primary' : 'border-gray-300']"
                            @click="selectedOption1 = 'option1'">
                            <div class="m-8">
                                <div class="object-contain max-w-full">
                                    <NuxtImg  loading="lazy" alt="image" width="160" height="60" class="mb-3"
                                        src="/images/payment-18.webp" />
                                </div>
                                <div class="flex items-center justify-center">
                                    <input type="radio" value="option1" v-model="selectedOption1" class="radio-square"
                                        :class="selectedOption1 === 'option1' ? 'bg-primary' : 'bg-white'"
                                        @click.stop />
                                </div>
                                <div class="text-sm">pago con tarjeta</div>
                            </div>
                        </div>

                        <!-- Option 2 -->
                        <div :class="['border', 'cursor-pointer', selectedOption1 === 'option2' ? 'border-primary' : 'border-gray-300']"
                            @click="selectedOption1 = 'option2'">
                            <div class="m-8">
                                <div class="object-contain max-w-full">
                                    <NuxtImg  loading="lazy" alt="image" width="160" height="60" class="mb-3"
                                        src="/images/payment-3.webp" />
                                </div>
                                <div class="flex items-center justify-center">
                                    <input type="radio" value="option2" v-model="selectedOption1" class="radio-square"
                                        :class="selectedOption1 === 'option2' ? 'bg-pink-500' : 'bg-white'"
                                        @click.stop />
                                </div>
                                <div class="text-sm">pago con tarjeta</div>
                            </div>
                        </div>

                        <!-- Option 3 -->
                        <div :class="['border', 'cursor-pointer', selectedOption1 === 'option3' ? 'border-pink-500' : 'border-gray-300']"
                            @click="selectedOption1 = 'option3'">
                            <div class="m-8">
                                <div class="object-contain max-w-full">
                                    <NuxtImg  loading="lazy" alt="image" width="160" height="60" class="mb-3"
                                        src="/images/payment-21.webp" />
                                </div>
                                <div class="flex items-center justify-center">
                                    <input type="radio" value="option3" v-model="selectedOption1" class="radio-square"
                                        :class="selectedOption1 === 'option3' ? 'bg-pink-500' : 'bg-white'"
                                        @click.stop />
                                </div>
                                <div class="text-sm">pago con tarjeta</div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="bg-gray-100 mt-10">
            <div class="px-6 py-4 flex lg:justify-end justify-center items-center ">
                <div class="text-xl mr-2 mt-1">
                    TOTAL:
                </div>
                <div class="text-3xl  font-bold text-primary">
                    85$
                </div>
            </div>
        </div>
        <div class="flex justify-between items-center mt-10">
            <div class="">
                <NuxtLink aria-label="VNWA Link" to="/ask"
                    class="border text-xl border-gray-400 mr-2 text-black bg-white px-5 py-3 transition duration-300 hover:border-primary hover:text-primary">
                    Continuar compra
                </NuxtLink>
            </div>
            <div class="">
                <NuxtLink aria-label="VNWA Link" to="/order/info"
                    class=" text-xl mr-2 text-white bg-primary px-5 py-3 transition duration-300 hover:bg-rose-300 ">
                    Adelante
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Biến trạng thái
const isDropdownOpen = ref(true);
const quantity = ref(1); // Giá trị khởi đầu của số lượng
const selectedOption = ref(null); // Dùng để lưu trạng thái radio đã chọn
const selectedOption1 = ref(null); // Dùng để lưu trạng thái radio đã chọn
const someNumber = ref(2);

// Hàm chuyển đổi trạng thái dropdown
const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

// Hàm xử lý click bên ngoài dropdown
const handleClickOutside = (event) => {
    const dropdownElement = document.querySelector('.dropdown');
    if (dropdownElement && !dropdownElement.contains(event.target)) {
        isDropdownOpen.value = false;
    }
};

// Hàm cộng số lượng
const increment = () => {
    quantity.value++;
};

// Hàm trừ số lượng
const decrement = () => {
    if (quantity.value > 1) {
        quantity.value--;
    }
};

// Thêm sự kiện click khi component được mounted
onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

// Xóa sự kiện click khi component bị unmounted
onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

<style>
.step-name {
    width: 100%;
}

.step-name::before {
    width: 100%;
    height: 1px;
    background: #dfdfdf;
    display: block;
    position: absolute;
    content: '';
    left: 0;
    z-index: -1;
}

input[type="radio"] {
    appearance: none;
    /* Xóa bỏ giao diện mặc định */
    width: 1.25rem;
    /* Kích thước chiều rộng */
    height: 1.25rem;
    /* Kích thước chiều cao */
    border: 2px solid #ccc;
    /* Viền */
    border-radius: 0;
    /* Bỏ bo tròn để tạo hình vuông */
    display: inline-block;
    vertical-align: middle;
    border: 1px solid rgb(219, 219, 219);
}

/* Hiển thị dấu tick hoặc hiệu ứng khi radio được chọn */
input[type="radio"]:checked {
    background-color: #fff;
    /* Màu nền khi được chọn */
    border-color: gray;
    border: 1px solid rgb(219, 219, 219);
    position: relative;
}

/* Dấu chấm trong radio khi được chọn */
input[type="radio"]:checked::after {
    content: "";
    width: 0.7rem;
    height: 0.7rem;
    background-color: #feb2be;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>