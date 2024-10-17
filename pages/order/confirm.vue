<template>
  <div>
    <div class="container mx-auto">
      <div>
        <Process :number="someNumber" />
      </div>
      <div class="block lg:hidden">
        <ProcessMobile :number="someNumber" />
      </div>
      <div class="step-name relative flex justify-center items-center my-8">
        <span class="text-4xl bg-white px-8">Cesta</span>
      </div>
      <div class="relative overflow-x-auto lg:block hidden">
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
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="pl-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                1
              </th>
              <td class="pr-6 py-4">
                <NuxtLink to="/p/a">
                  <NuxtImg alt="product" width="100" height="100" src="/images/22.webp" />
                </NuxtLink>
              </td>
              <td class="px-6 py-4">
                <p class="mt-4">
                  <NuxtLink class="text-xl" to="/p/a">
                    Datos de comprador
                  </NuxtLink>
                </p>
                <p>
                  <NuxtLink class="text-sm" to="/p/a">
                    9926-7
                  </NuxtLink>
                </p>
              </td>
              <td class="px-6 py-4">
                <div class="text-sm text-gray-400 line-through">
                  50$
                </div>
                <div class="text-xl font-bold text-primary">
                  69$
                </div>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center space-x-3">
                  <button @click="decrement" class="bg-gray-200 text-gray-800 px-2 rounded-md hover:bg-primary">
                    -
                  </button>
                  <span class="text-lg">{{ quantity }}</span>
                  <button @click="increment" class="bg-gray-200 text-gray-800 px-2 rounded-md hover:bg-primary">
                    +
                  </button>
                </div>
              </td>
              <td class="px-6 py-4">
                <div class="text-base text-gray-400 line-through">
                  60$
                </div>
                <div class="text-2xl font-bold text-primary">
                  85$
                </div>
              </td>
              <td>
                <Icon name="ion:ios-close-outline" class="cursor-pointer text-4xl text-gray-600 hover:bg-primary" />
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
            <NuxtLink to="/p/a">
              <NuxtImg alt="product" width="100" height="100" src="/images/36.webp" />
            </NuxtLink>
          </div>
          <div class="col-span-6">
            <NuxtLink to="/p/a">
              <h3 class="text-lg mb-1">Gel Polish - 7,2 ml - Crazy Idea</h3>
              <p class="text-sm">9926-7</p>
            </NuxtLink>
          </div>
          <div class="col-span-1">
            <Icon name="ion:ios-close-outline" class="cursor-pointer text-4xl text-gray-600" />
          </div>
        </div>
        <div >
          <div class="grid grid-cols-3 lg:hidden pb-2 justify-center items-center">
            <div class="grid justify-center items-center border-r border-dashed">
              <span class="">Price :</span>
              <div class="text-center">
                <div class="text-sm text-gray-400 line-through my-1">
                  50$
                </div>
                <div class="text-xl font-bold text-primary mb-2">
                  69$
                </div>
              </div>
            </div>
            <div>
              <div class="flex justify-center items-center">
                <button @click="decrement" class="bg-gray-200 text-gray-800 px-4 py-2 hover:bg-primary">
                  -
                </button>
                <button class="border px-4 py-2 bg-gray-100">{{ quantity }}</button>
                <button @click="increment" class="bg-gray-200 text-gray-800 px-4 py-2 hover:bg-primary">
                  +
                </button>
              </div>
            </div>
            <div class="grid justify-center items-center border-l border-dashed">
              <span class="">Price :</span>
              <div class="text-center">
                <div class="text-sm text-gray-400 line-through my-1">
                  50$
                </div>
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
        <div class="flex justify-center items-center py-3 border-t border-b border-gray-300 border-dashed bg-gray-100">
          <span class="mr-2 font-medium text-xl">Total de pedido:</span>
        </div>
        <div class="flex justify-center items-center py-3 border-b border-gray-300 border-dashed bg-gray-100">
          <p class="text-xl">28,39 $</p>
        </div>
      </div>
    </div>
  </div>
  <div class="step-name relative flex justify-center items-center my-8">
    <span class="text-4xl bg-white px-8">Cesta</span>
  </div>
  <div class="text-center py-8">
    Península
  </div>
  <div class="step-name relative flex justify-center items-center my-8">
    <span class="text-4xl bg-white px-8">Modo de pago y entrega
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isDropdownOpen = ref(true);
const quantity = ref(1);
const someNumber = ref(2);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const handleClickOutside = (event) => {
  const dropdownElement = document.querySelector('.dropdown');
  if (dropdownElement && !dropdownElement.contains(event.target)) {
    isDropdownOpen.value = false;
  }
};

const increment = () => {
  quantity.value++;
};

const decrement = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style></style>
