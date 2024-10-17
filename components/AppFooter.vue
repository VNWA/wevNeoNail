<template>
  <div>
    <div class="container mx-auto">
      <form class="my-6" action="#">
        <div class="custom-underline my-7 ">
          Subscribe to our newsletter
        </div>
        <div class=" text-xl">
          Receive 10% discount
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div class="col-span-1 lg:mr-9">
            <input type="text" placeholder="Enter your email"
              class="w-full border border-black focus:border-gray-400 focus:outline-none p-2 pl-5 my-4">
            <button style="border: 1px solid black;"
              class="bg-black text-white border border-black px-16 py-2 d-lg hover:bg-white hover:text-black hover:border-black transition duration-300 mt-1 lg:mb-0 mb-4">
              Subscribe
            </button>
          </div>
          <div class="col-span-1">
            <!-- First Checkbox -->
            <div class="flex items-start mb-4 justify-center">
              <label class="flex items-center space-x-2 cursor-pointer mr-3 lg:mt-2 mt-1">
                <input type="checkbox" class="hidden peer">
                <div
                  class="w-6 h-6 border border-gray-300 rounded-sm transition-all duration-300 peer-checked:bg-primary  flex items-center justify-center">
                  <svg class="w-4 h-4 text-white opacity-0 transition-opacity duration-300 peer-checked:opacity-100"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12l5 5L20 7"></path>
                  </svg>
                </div>
              </label>
              <p class="lg:text-base	 text-xs ">
                I give my consent for Cosmo Group Sp. z o.o. to send marketing information to the provided email
                address,
              </p>
            </div>
            <!-- Second Checkbox -->
            <div class="flex items-center">
              <label class="flex items-center space-x-2 cursor-pointer mr-3">
                <input type="checkbox" class="hidden peer">
                <div
                  class="w-6 h-6 border border-gray-300 rounded-sm transition-all duration-300 peer-checked:bg-primary flex items-center justify-center ">
                  <svg class="w-4 h-4 text-white opacity-0 transition-opacity duration-300 peer-checked:opacity-100"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12l5 5L20 7"></path>
                  </svg>
                </div>
              </label>
              <p class="lg:text-base	 text-xs">I have read the privacy policy</p>
            </div>
          </div>
        </div>
      </form>
      <div class="grid lg:grid-cols-4 grid-cols-1">
        <div class="mr-7">
          <ul>
            <li class="pb-3 font-medium border-b mb-3">INFORMATION</li>
            <li class="py-2">
              <NuxtLink aria-label="VNWA Link" to="/" class="hover:underline cursor-pointer text-sm	">Contact</NuxtLink>
            </li>
            <li class="py-1">
              <NuxtLink aria-label="VNWA Link" to="/" class="hover:underline cursor-pointer text-sm	">Returns and
                complaints</NuxtLink>
            </li>
            <li class="py-1">
              <NuxtLink aria-label="VNWA Link" to="/" class="hover:underline cursor-pointer text-sm	">Order tracking
              </NuxtLink>
            </li>
            <li class="py-1">
              <NuxtLink aria-label="VNWA Link" to="/" class="hover:underline cursor-pointer text-sm	">Payment and
                shipping</NuxtLink>
            </li>
            <li class="py-1">
              <NuxtLink aria-label="VNWA Link" to="/" class="hover:underline cursor-pointer text-sm	">Press</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="mr-7">
          <ul>
            <li class="pb-3 font-medium border-b mb-3">ONLINE STORE</li>
            <li class="py-2">
              <NuxtLink aria-label="VNWA Link" to="/" class="hover:underline cursor-pointer text-sm	">Terms of use
              </NuxtLink>
            </li>
            <li class="py-1">
              <NuxtLink aria-label="VNWA Link" to="/" class="hover:underline cursor-pointer text-sm	">Data protection
              </NuxtLink>
            </li>
            <li class="py-1">
              <NuxtLink aria-label="VNWA Link" to="/" class="hover:underline cursor-pointer text-sm	">Regulations
              </NuxtLink>
            </li>
            <li class="py-1">
              <NuxtLink aria-label="VNWA Link" to="/" class="hover:underline cursor-pointer text-sm	">Drying times
              </NuxtLink>
            </li>
            <li class="py-1">
              <NuxtLink aria-label="VNWA Link" to="/" class="hover:underline cursor-pointer text-sm	">Compare
                semi-permanent bases
              </NuxtLink>
            </li>
            <li class="py-1">
              <NuxtLink aria-label="VNWA Link" to="/" class="hover:underline cursor-pointer text-sm	">Get inspired
              </NuxtLink>
            </li>
            <li class="py-1">
              <NuxtLink aria-label="VNWA Link" to="/" class="hover:underline cursor-pointer text-sm	">Cookie settings
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="mr-7">
          <ul>
            <li class="pb-3 font-medium border-b mb-3">DELIVERY FROM 4,90 €</li>
            <li class="py-4 grid grid-cols-4 gap-3 ">
              <div class=" h-16 border border-black/50 flex items-center justify-center bg-white px-3">
                <NuxtImg alt="image" width="100" class="w-full h-auto" src="/images/1.webp" />
              </div>
              <div class=" h-16 border border-black/50 flex items-center justify-center bg-white px-3">
                <NuxtImg alt="image" width="100" class="w-full h-auto" src="/images/2.webp" />
              </div>
            </li>
            <li class=" font-medium">PAYMENT METHODS</li>
            <li class="py-4 grid grid-cols-4 gap-3 ">
              <div class=" h-16 border border-black/50 flex items-center justify-center bg-white px-3">
                <NuxtImg alt="image" width="100" class="w-full h-auto" src="/images/3.webp" />
              </div>
              <div class=" h-16 border border-black/50 flex items-center justify-center bg-white px-3">
                <NuxtImg alt="image" width="100" class="w-full h-auto" src="/images/4.webp" />
              </div>
              <div class=" h-16 border border-black/50 flex items-center justify-center bg-white px-3">
                <NuxtImg alt="image" width="100" class="w-full h-auto" src="/images/5.webp" />
              </div>
              <div class=" h-16 border border-black/50 flex items-center justify-center bg-white px-3">
                <NuxtImg alt="image" width="100" class="w-full h-auto" src="/images/6.webp" />
              </div>
              <div class=" h-16 border border-black/50 flex items-center justify-center bg-white px-3">
                <NuxtImg alt="image" width="100" class="w-full h-auto" src="/images/7.webp" />
              </div>
              <div class=" h-16 border border-black/50 flex items-center justify-center bg-white px-3">
                <NuxtImg alt="image" width="100" class="w-full h-auto" src="/images/8.webp" />
              </div>
              <div class=" h-16 border border-black/50 flex items-center justify-center bg-white px-3">
                <NuxtImg alt="image" width="100" class="w-full h-auto" src="/images/9.webp" />
              </div>
              <div class=" h-16 border border-black/50 flex items-center justify-center bg-white px-3">
                <NuxtImg alt="image" width="100" class="w-full h-auto" src="/images/10.webp" />
              </div>
            </li>
          </ul>
        </div>
        <div class="mr-7">
          <ul>
            <li class="pb-3 font-medium border-b mb-3">Contact</li>
            <li class="py-3">
              tel: +34 931727651
            </li>
            <li class="py-3">
              whatsapp: +34 668 129 183
            </li>
            <li class="py-3">
              We are open from Monday to Friday
              8:00 - 15:00.
            </li>
            <li class="pt-3">
              <button style="border: 1px solid black;"
                class=" whitespace-nowrap text-xl bg-white text-black border border-black px-16 py-2 d-lg hover:bg-primary hover:text-white hover:border-primary transition duration-700">
                CONTACT FORM
              </button>
            </li>
            <li class="py-2">
              <NuxtLink to="/">
                <NuxtImg width="auto" height="100" src="/images/1 (1).png" />
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="mt-4 border-t-1 border-gray-300 ">
    <div class="container mx-auto">
      <div class="flex justify-between py-5">
        <p class="text-sm	">Copyright by neonail-espana.es</p>
        <p class="text-sm	">Interactive agency [ti] Powered by 2ClickShop</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>