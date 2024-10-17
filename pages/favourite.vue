<template>
    <div class="container mx-auto mt-10">
        <div class="step-name relative flex justify-center items-center my-8">
            <span class=" text-4xl bg-white px-8">País de entrega</span>
        </div>
        <div class="relative overflow-x-auto lg:block hidden">
            <table class="w-full text-left rtl:text-right">
                <thead class=" uppercase border-b  ">
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
                    <div class="border border-gray-400 flex justify-center items-center py-2">
                        <Icon name="ic:round-close" class=" cursor-pointer text-2xl text-black/60 " />
                    </div>
                    <div class="border border-gray-400 flex justify-center items-center py-2 mt-4 ">
                        <Icon class=" text-2xl text-black/60" name="ph:handbag-simple-light" />
                    </div>
                    
                </div>
            </div>
            <div class=" mt-8">
                <div class="grid grid-cols-3 lg:hidden pb-2 justify-center items-center">
                    <div class="grid justify-center items-center">
                        <span class="font-medium">Price :</span>
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

            <div class="flex justify-center items-center py-3 border-t border-gray-300 bg-gray-100">
                <span class="mr-2 font-medium text-xl">Total de pedido:</span>
            </div>
            <div
                class="flex justify-center items-center py-3 border-b border-t border-gray-300 border-dashed  bg-gray-100">
                <p class="text-xl">28,39 $</p>
            </div>
        </div>

        <div class="flex justify-between items-center mt-10">
            <div class="">
                <div to="/"
                    class="border cursor-pointer text-xl border-gray-400 mr-2 text-black bg-white px-5 py-3 transition duration-300 hover:border-primary hover:text-primary">
                    Continuar compra
                </div>
            </div>
            <div class="">
                <div to="/"
                    class=" text-xl mr-2 text-white cursor-pointer bg-primary px-5 py-3 transition duration-300 hover:bg-rose-400 ">
                    Continuar compra
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        const isDropdownOpen = ref(false);

        const toggleDropdown = () => {
            isDropdownOpen.value = !isDropdownOpen.value;
        };

        const handleClickOutside = (event) => {
            const dropdownElement = document.querySelector('.dropdown');
            if (dropdownElement && !dropdownElement.contains(event.target)) {
                isDropdownOpen.value = false;
            }
        };

        onMounted(() => {
            document.addEventListener('click', handleClickOutside);
        });

        onBeforeUnmount(() => {
            document.removeEventListener('click', handleClickOutside);
        });

        return {
            isDropdownOpen,
            toggleDropdown
        };
    },
    data() {
        return {
            quantity: 1, // Giá trị khởi đầu của số lượng
            selectedOption: null, // Dùng để lưu trạng thái radio đã chọn
            selectedOption1: null, // Dùng để lưu trạng thái radio đã chọn
            someNumber: 2,
        };
    },
    methods: {
        // Hàm cộng số lượng
        increment() {
            this.quantity++;
        },
        // Hàm trừ số lượng
        decrement() {
            if (this.quantity > 1) {
                this.quantity--;
            }
        },
    },
};
</script>

<style></style>