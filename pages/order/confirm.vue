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
        <ProductTable :data="ProductList" />
      </div>
      <div>
        <div class="grid grid-cols-10 justify-center items-center lg:hidden">
          <div class="col-span-1 flex justify-center"><span class="text-xl">1</span></div>
          <div class="col-span-2 flex justify-center mr-4">
            <NuxtLink aria-label="VNWA Link" to="/p/a">
              <NuxtImg alt="product" width="100" height="100" src="/images/36.webp" />
            </NuxtLink>
          </div>
          <div class="col-span-6">
            <NuxtLink aria-label="VNWA Link" to="/p/a">
              <h3 class="text-lg mb-1">Gel Polish - 7,2 ml - Crazy Idea</h3>
              <p class="text-sm">9926-7</p>
            </NuxtLink>
          </div>
          <div class="col-span-1">
            <Icon name="ion:ios-close-outline" class="cursor-pointer text-4xl text-gray-600" />
          </div>
        </div>
        <div class="pt-3" >
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
              <div class="text-center">Cantidal:</div>
              <div class="flex justify-center items-center text-3xl">
                1
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
      <div class="step-name relative flex justify-center items-center my-8">
        <span class="text-4xl bg-white px-8">Cesta</span>
      </div>
      <div class="text-center lg:py-8">
        Península
      </div>
      <div class="step-name relative flex justify-center items-center my-8">
        <span class="text-4xl bg-white px-8">Modo de pago y entrega
        </span>
      </div>
      <div class="lg:py-8 lg:px-6">
        <div class="lg:grid grid-cols-12 hidden">
          <div class="col-span-2 px-6">
            <div class="font-medium pb-5">
              Modo de entrega
            </div>
            <div class="font-medium">
              Modo de entrega
            </div>
          </div>
          <div class="col-span-8">
            <div class="pb-5">Correos</div>
            <div>pago con tarjeta</div>
          </div>
          <div class="col-span-2">
            <div class="text-center">
              4,90 €
            </div>
          </div>
        </div>
        <div>
          <div class="font-medium py-1">
            Modo de entrega
          </div>
          <div class="flex justify-between py-1">
            <span>Correos</span>  
            <span>4,90$</span>  
          </div>
          <div class="font-medium py-1">
            Modo de entrega
          </div>
          <div class="flex justify-between py-1">
            <span>Correos</span>  
          </div>
        </div>
        <div class="bg-gray-100 py-4 mt-10 flex lg:justify-end justify-center items-center pr-6">
          <div class="text-xl uppercase">
            Total: <span class="text-primary text-3xl">9,30€</span>
          </div>
        </div>
        <div class="step-name relative flex justify-center items-center my-8">
          <span class="text-4xl bg-white px-8">Datos para pedido
          </span>
        </div>
        <div class="border bg-gray-100">
          <div class="py-2 lg:px-16 px-6">
            <div class="text-center py-3">Cliente
            </div>
            <hr>
            <div class="py-4">
              <div v-for="(item, index) in infoList" :key="index" class="grid grid-cols-2 py-1">
                <div class="font-semibold">
                  {{ item.key }}
                </div>
                <div>
                  {{ item.value }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="my-6">
          <div class="py-1 flex gap-4">
            <label class="cursor-pointer">
              <input type="checkbox" class="hidden peer" />
              <div
                class="w-6 h-6 border border-gray-300 rounded-sm transition-all duration-300 peer-checked:bg-primary flex items-center justify-center">
                <svg class="w-4 h-4 text-white opacity-0 transition-opacity duration-300 peer-checked:opacity-100"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12l5 5L20 7"></path>
                </svg>
              </div>
            </label>
            <div>
              <p class="pb-2 text-sm">
                Marca todos consentimientos.</p>
            </div>
          </div>
          <div class="py-1 flex gap-4">
            <label class="cursor-pointer">
              <input type="checkbox" class="hidden peer" />
              <div
                class="w-6 h-6 border border-gray-300 rounded-sm transition-all duration-300 peer-checked:bg-primary flex items-center justify-center">
                <svg class="w-4 h-4 text-white opacity-0 transition-opacity duration-300 peer-checked:opacity-100"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12l5 5L20 7"></path>
                </svg>
              </div>
            </label>
            <div>
              <p class="pb-2 text-sm">
                Declaro que he consultado el contenido de Reglamento *</p>
            </div>
          </div>
          <div class="py-1 flex gap-4">
            <label class="cursor-pointer">
              <input type="checkbox" class="hidden peer" />
              <div
                class="w-6 h-6 border border-gray-300 rounded-sm transition-all duration-300 peer-checked:bg-primary flex items-center justify-center">
                <svg class="w-4 h-4 text-white opacity-0 transition-opacity duration-300 peer-checked:opacity-100"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12l5 5L20 7"></path>
                </svg>
              </div>
            </label>
            <div>
              <p class="pb-2 text-sm">
                Doy mi consentimiento para enviar por Cosmo Group Sp. z o.o. a la dirección de correo electrónico
                proporcionada, mensajes comerciales, incluido un boletín informativo, que contiene información sobre
                productos y servicios ofrecidos por
                El consentimiento precitado es completamente voluntario y al expresarlo, confirmas que has consultado la
                Política de privacidad y aceptas que tus datos personales sean procesados por Cosmo Group Sp. z o.o.
                según los términos establecidos en la Política de privacidad. Puedes retirar tu consentimiento en
                cualquier momento haciendo clic en el enlace contenido en los mensajes comerciales enviados.</p>
            </div>
          </div>
          <div class="text-sm">
            <span class="text-primary">*</span> - campos obligatorios
          </div>
        </div>
        <div class="flex justify-between items-center mt-10">
                <div class="">
                    <NuxtLink aria-label="VNWA Link" to="/order/info"
                        class="border text-xl border-gray-400 mr-2 text-black bg-white px-5 py-3 transition duration-300 hover:border-primary hover:text-primary">
                        Atrás
                        Cesta
                    </NuxtLink>
                </div>
                <div class="">
                    <NuxtLink aria-label="VNWA Link" to="/"
                        class=" text-xl mr-2 text-white bg-primary px-5 py-3 transition duration-300 hover:bg-rose-300 ">
                        Adelante
                    </NuxtLink>
                </div>
            </div>
      </div>
    </div>
  </div>

</template>

<script setup>

const infoList = [
  {
    key: 'Nombre:',
    value: '0569081963',
  },
  {
    key: 'Apellido:',
    value: 'cu',
  },
  {
    key: 'Código postal:',
    value: '00000',
  },
]
const ProductList = [
    {
        id: 0,
        image: '/images/22.webp',
        name: 'Datos de comprador',
        quanlity: 3,
        code: '9926-7',
        oldPrice: 70,
        newPrice: 60,
    },
    {
        id: 1,
        image: '/images/22.webp',
        name: 'Datos de comprador',
        quanlity: 2,
        code: '9926-7',
        oldPrice: 70,
        newPrice: 60,
    },
]

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
