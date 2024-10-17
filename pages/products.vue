<template>
  <div class="container mx-auto">
    <div class="w-full hidden lg:block">
      <NuxtImg width="100%" class="cursor-pointer mb-2" src="/images/banner-490.webp" />
    </div>
    <div class="lg:hidden mt-1">
      <NuxtImg width="370" height="145" class="w-full h-auto cursor-pointer mb-2" src="/images/banner-mobile-490.jpg" />
    </div>
    <div>
      <Breadcrumb />
    </div>
    <div class="my-2 flex space-x-1 overflow-x-auto whitespace-nowrap relative pt-2">
      <div class="pb-5">
        <NuxtLink to="/"
          class="border border-gray-400 mr-2 text-black bg-white px-4 py-2 transition duration-300 hover:border-primary hover:text-primary">
          Esmaltes
        </NuxtLink>
        <NuxtLink to="/"
          class="border border-gray-400 mr-2 text-black bg-white px-4 py-2 transition duration-300 hover:border-primary hover:text-primary">
          Esmaltes
        </NuxtLink>
        <NuxtLink to="/"
          class="border border-gray-400 mr-2 text-black bg-white px-4 py-2 transition duration-300 hover:border-primary hover:text-primary">
          Esmaltes
        </NuxtLink>
        <NuxtLink to="/"
          class="border border-gray-400 mr-2 text-black bg-white px-4 py-2 transition duration-300 hover:border-primary hover:text-primary">
          Esmaltes
        </NuxtLink>
        <NuxtLink to="/"
          class="border border-gray-400 mr-2 text-black bg-white px-4 py-2 transition duration-300 hover:border-primary hover:text-primary">
          Esmaltes
        </NuxtLink>
      </div>

    </div>
    <div class="my-2 lg:*:grid lg:grid-cols-2 justify-between items-center">
      <div class="my-2 text-3xl font-medium lg:text-title uppercase">
        Manicura
      </div>
      <div class="lg:text-right lg:flex justify-end">
        <div class="grid grid-cols-2 justify-center items-center w-full">
          <div class="border-b lg:border-none flex justify-center items-center">
            <span class="uppercase lg:text-sm text-lg mx-2 pb-1">
              mostrar
            </span>
            <NuxtLink class="block lg:border-b pb-1 border-gray-300 mx-2" to="/">
              <div class="flex justify-center items-center">
                <span class="lg:text-sm text-lg">30</span>
                <Icon name="material-symbols-light:keyboard-arrow-down" class="text-2xl text-gray-500" />
              </div>
            </NuxtLink>
          </div>
          <NuxtLink class="block border-b pb-1 border-gray-300 mx-2" to="/">
            <div class="flex justify-center items-center">
              <span class="lg:text-sm text-lg">ordenar por defecto</span>
              <Icon name="material-symbols-light:keyboard-arrow-down " class="text-2xl text-gray-500" />
            </div>
          </NuxtLink>

        </div>
      </div>
    </div>
    <div class="my-2 lg:grid grid-cols-2 justify-between items-center left-0 sticky lg:top-[159px] top-[74px] bg-white z-10">
      <div class="lg:flex   py-2">
        <span class="uppercase text-2xl lg:text-lg font-medium lg:flex justify-center items-center">Tono:</span>
        <div class="hidden lg:block">
          <ProductManicura />
        </div>
        <div class="my-2 flex space-x-2 overflow-x-auto whitespace-nowrap lg:hidden">
          <div class="border rounded-full w-14 h-14 bg-red-600 flex-shrink-0"></div>
          <div class="border rounded-full w-14 h-14 bg-blue-600 flex-shrink-0"></div>
          <div class="border rounded-full w-14 h-14 bg-green-600 flex-shrink-0"></div>
          <div class="border rounded-full w-14 h-14 bg-yellow-600 flex-shrink-0"></div>
          <div class="border rounded-full w-14 h-14 bg-orange-600 flex-shrink-0"></div>
        </div>
      </div>
      <div class="text-right hidden lg:flex justify-end">
        <div class="flex justify-center items-center uppercase">
          <NuxtLink class="block mx-2" to="/">
            <div class="flex justify-center items-center">
              <span class="text-sm	mr-2">Cobertura
              </span>
              <div class="border bg-black flex justify-center items-center">
                <Icon name="material-symbols-light:keyboard-arrow-down " class="text-2xl text-white" />
              </div>
            </div>
          </NuxtLink>
          <NuxtLink class="block mx-2" to="/">
            <div class="flex justify-center items-center">
              <span class="text-sm	mr-2">Cobertura
              </span>
              <div class="border bg-black flex justify-center items-center">
                <Icon name="material-symbols-light:keyboard-arrow-down " class="text-2xl text-white" />
              </div>
            </div>
          </NuxtLink>
          <NuxtLink class="block mx-2" to="/">
            <div class="flex justify-center items-center">
              <span class="text-sm	mr-2">Cobertura
              </span>
              <div class="border bg-black flex justify-center items-center">
                <Icon name="material-symbols-light:keyboard-arrow-down " class="text-2xl text-white" />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div>
      <button class="w-full bg-primary py-3 text-white text-2xl font-semibold my-4 block lg:hidden">
        FILTROS
      </button>
    </div>
    <div class="grid lg:grid-cols-5 grid-cols-2 gap-4 my-6">
      <div class="col-span-1" v-for="(item, index) in ProductList  " :key="index">
        <ProductItem :dataPro="item" />
      </div>
    </div>
    <div class="my-6 mt-16">
      <span class="font-medium	">Productos para Manicura Online
      </span>
    </div>
    <div class="my-6">
      <p class="text-sm	">Los mejores productos para manicura los encontrarás en NEONAIL.
        Somos expertos en uñas y prueba de ellos son todas nuestras colecciones y productos.
        En nuestra Web podrás comprar productos para manicura online al mejor precio y para diferentes niveles, ya que,
        también contamos con productos y <NuxtLink class="text-primary underline hover:opacity-80" to="/">kits para
          principiantes.</NuxtLink>
        ¿A qué esperas para conocerlos y descubrir nuestras colecciones de <NuxtLink
          class="text-primary underline hover:opacity-80" to="/">esmaltes semipermanentes
        </NuxtLink> y <NuxtLink class="text-primary underline hover:opacity-80" to="/">esmaltes clásicos?</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const ProductList = [
    {
      image: [
        'images/22.webp',
        'images/23.webp',
        'images/24.webp',
        'images/25.webp',
      ],
      title: '21 Days Starter Set',
      price: 888,
      price_new: 800
    },
    {
      image: [
        'images/16.webp',
        'images/17.webp',
        'images/18.webp',
        'images/19.webp',
      ],
      title: '21 Days Starter Set',
      price: 90,
      price_new: 800
    },
    {
      image: [
        'images/16.webp',
        'images/17.webp',
        'images/18.webp',
        'images/19.webp',
      ],
      title: '21 Days Starter Set',
      price: 90,
      price_new: 800
    },
    {
      image: [
        'images/16.webp',
        'images/17.webp',
        'images/18.webp',
        'images/19.webp',
      ],
      title: '21 Days Starter Set',
      price: 90,
      price_new: 800
    },
    {
      image: [
        'images/16.webp',
        'images/17.webp',
        'images/18.webp',
        'images/19.webp',
      ],
      title: '21 Days Starter Set',
      price: 90,
      price_new: 800
    },
    {
      image: [
        'images/16.webp',
        'images/17.webp',
        'images/18.webp',
        'images/19.webp',
      ],
      title: '21 Days Starter Set',
      price: 90,
      price_new: 800
    },
    {
      image: [
        'images/16.webp',
        'images/17.webp',
        'images/18.webp',
        'images/19.webp',
      ],
      title: '21 Days Starter Set',
      price: 90,
      price_new: 800
    },
    {
      image: [
        'images/16.webp',
        'images/17.webp',
        'images/18.webp',
        'images/19.webp',
      ],
      title: '21 Days Starter Set',
      price: 90,
      price_new: 800
    },
    {
      image: [
        'images/16.webp',
        'images/17.webp',
        'images/18.webp',
        'images/19.webp',
      ],
      title: '21 Days Starter Set',
      price: 90,
      price_new: 800
    },
    {
      image: [
        'images/16.webp',
        'images/17.webp',
        'images/18.webp',
        'images/19.webp',
      ],
      title: '21 Days Starter Set',
      price: 90,
      price_new: 800
    },
  ]
</script>

<style scoped></style>