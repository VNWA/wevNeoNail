<template>
  <div>
    <div class="flex items-center justify-center min-h-screen">
      <div class="bg-gray-50 p-4 shadow-md my-6 border" style="max-width: 35rem;">
        <div class="font-medium text-3xl text-center">
          Inicio de sesión
        </div>
        <div class="text-gray-600 text-center border-b pb-4 mb-6 ">
          Tengo cuenta y quiero iniciar sesión
        </div>
        <form action="">
          <div class="my-2">
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="text-sm" for="">Nombre <span class="text-primary">*</span></label>
                <input class=" pl-3 border focus:border-gray-400 focus:outline-none w-full py-3" type="text">
              </div>
              <div>
                <label class="text-sm" for="">Apellido <span class="text-primary">*</span></label>
                <input class=" pl-3 focus:border-gray-400 focus:outline-none  border w-full py-3" type="text">
              </div>
            </div>
          </div>
          <div class="my-2">
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="text-sm" for="">Empresa <span class="text-primary">*</span></label>
                <input class=" pl-3 focus:border-gray-400 focus:outline-none  border w-full py-3" type="text">
              </div>
              <div>
                <label class="text-sm" for="">Código postal<span class="text-primary">*</span></label>
                <input class=" pl-3 focus:border-gray-400 focus:outline-none  border w-full py-3" type="text">
              </div>
            </div>
          </div>
          <div class="my-2">
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="text-sm" for="">Calle<span class="text-primary">*</span></label>
                <input class=" pl-3 focus:border-gray-400 focus:outline-none  border w-full py-3" type="text">
              </div>
              <div>
                <label class="text-sm" for="">Número de casa<span class="text-primary">*</span></label>
                <input class=" pl-3 focus:border-gray-400 focus:outline-none  border w-full py-3" type="text">
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <div class="uppercase underline text-gray-500 text-xs">
                IMPORTANTE
              </div>
              <div class="text-gray-500 text-xs">
                En la medida de lo posible, por favor, utiliza las abreviaturas: calle: c. ; c/ ; cl.; avenida: av. ;
                avd. ; avda.; paseo: p.º; plaza: pza. ; pl. ; plza.
              </div>
            </div>
            <div>
              <div class="uppercase underline text-gray-500 text-xs">
                IMPORTANTE
              </div>
              <div class="text-gray-500 text-xs">
                En la medida de lo posible, por favor, utiliza las abreviaturas: calle: c. ; c/ ; cl.; avenida: av. ;
                avd. ; avda.; paseo: p.º; plaza: pza. ; pl. ; plza.
              </div>
              <div class="mt-4 flex items-center gap-2">
                <label class="flex items-center cursor-pointer">
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
                <p class="text-xs">Ningún número de casa disponible</p>
              </div>
            </div>
          </div>
          <div class="my-2">
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="text-sm" for="">Calle<span class="text-primary">*</span></label>
                <input class=" pl-3 focus:border-gray-400 focus:outline-none  border w-full py-3" type="text">
              </div>
              <div>
                <label class="text-sm" for="">Número de casa<span class="text-primary">*</span></label>
                <input class=" pl-3 focus:border-gray-400 focus:outline-none  border w-full py-3" type="text">
              </div>
            </div>
          </div>
          <div class="my-2">
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="text-sm" for="">E-mail *
                  <span class="text-primary">*</span></label>
                <input class=" pl-3 focus:border-gray-400 focus:outline-none  border w-full py-3" type="text">
              </div>
              <div>
              </div>
            </div>
          </div>
          <div class="my-2 flex gap-4">
            <label class="cursor-pointer">
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
            <div>
              <p class="pb-2 text-sm">Doy mi consentimiento para enviar por Cosmo Group Sp. z o.o. a la dirección de
                correo electrónico proporcionada, mensajes comerciales, incluido un boletín informativo, que contiene
                información sobre productos y servicios ofrecidos por
              </p>
              <p class="text-sm">
                El consentimiento precitado es completamente voluntario y al expresarlo, confirmas que has consultado la
                Política de privacidad y aceptas que tus datos personales sean procesados por Cosmo Group Sp. z o.o.
                según los términos establecidos en la Política de privacidad. Puedes retirar tu consentimiento en
                cualquier momento haciendo clic en el enlace contenido en los mensajes comerciales enviados.
              </p>
            </div>
          </div>
          <div class="my-2">
            <div class="text-sm">
              Crear cuenta a la hora de compra.
              <NuxtLink aria-label="VNWA Link" to="/" class="underline text-primary text-sm">
                ¿Por qué merece la pena tener una cuenta?
              </NuxtLink>
            </div>
          </div>
          <div class="my-2">
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="text-sm" for="">Calle<span class="text-primary">*</span></label>
                <input class=" border w-full py-3" type="text">
              </div>
              <div>
                <label class="text-sm" for="">Número de casa<span class="text-primary">*</span></label>
                <input class=" border w-full py-3" type="text">
              </div>
            </div>
          </div>
          <div class="my-2 flex gap-4 items-center">
            <label class="cursor-pointer">
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
            <p class="text-sm">He leído y acepto el reglamento <span class="text-primary">*</span>
            </p>
          </div>
          <div class="my-2">
            <NuxtLink aria-label="VNWA Link" class="text-sm" to="/">
              Reglas de protección de datos personales
            </NuxtLink>
          </div>
          <div class="flex mt-4 justify-end">
            <div>
              <button aria-label="VNWA Button" type="submit"
                class=" text-xl mr-2 text-white bg-primary px-5 py-3 transition duration-300 hover:bg-rose-400 ">
                Inicio de sesión
              </button>
            </div>
          </div>


        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>