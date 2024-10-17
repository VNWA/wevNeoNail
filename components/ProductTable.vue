<template>
    <div>
        <table class="w-full text-left rtl:text-right">
            <thead class="uppercase border-b">
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
                <tr v-for="(item, index) in data" :key="index"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="pl-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        1
                    </th>
                    <td class="pr-6 py-4">
                        <NuxtLink to="/p/a">
                            <NuxtImg alt="product" width="100" height="100" :src="item.image" />
                        </NuxtLink>
                    </td>
                    <td class="px-6 py-4">
                        <p class="mt-4">
                            <NuxtLink class="text-xl" to="/p/a">
                                {{ item.name }}
                            </NuxtLink>
                        </p>
                        <p>
                            <NuxtLink class="text-sm" to="/p/a">
                                {{ item.code }}
                            </NuxtLink>
                        </p>
                    </td>
                    <td class="px-6 py-4">
                        <div class="text-sm text-gray-400 line-through">
                            {{ item.oldPrice }}
                        </div>
                        <div class="text-xl font-bold text-primary">
                            {{ item.newPrice }}
                        </div>
                    </td>
                    <td class="px-6 py-4">
                        <div class="flex items-center space-x-3">
                            {{ item.quanlity }}
                        </div>
                    </td>
                    <td class="px-6 py-4">
                        <div class="text-2xl font-bold text-primary">
                            {{ (item.newPrice) * (item.quanlity) }}
                        </div>
                    </td>
                    
                </tr>
                <tr class="bg-gray-100 border-t">
                    <td class="px-6 py-4 font-medium" colspan="5">Total de pedido:</td>
                    <td class="px-6 py-4" colspan="2">{{ totalPrice }}</td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script  setup>

const totalPrice = computed(() => {
    return props.data.reduce((sum, item) => {
        return sum + item.newPrice * item.quanlity;
    }, 0);
});
const props = defineProps({
    data: {
        type: Object,
        default: {}
    }
})


</script>

<style></style>