<template>
    <div>
      <div class="flex items-center justify-center min-h-screen">
        <div class="bg-gray-50 p-4 my-6 border" style="min-width: 35rem;">
          <div class="font-medium text-3xl text-center border-b pb-5 pt-2">
            Inicio de sesión
          </div>
          <form action="">
            <div class="my-6">
              <label class="text-sm" for="">Correo electrónico o login<span class="text-primary">*</span></label>
              <input class="pl-3 border focus:border-gray-400 focus:outline-none w-full py-3" type="text">
            </div>
            <div class="flex justify-between mt-4 items-center">
              <div>
                <div class="text-sm">
                  <span class="text-primary">
                    *
                  </span>
                  - campos obligatorios
                </div>
                
              </div>
              <div>
                <button aria-label="VNWA Button" type="submit"
                  class=" text-xl mr-2 text-white bg-primary px-5 py-3 transition duration-300 hover:bg-rose-400 ">
                  Recordar contraseña
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