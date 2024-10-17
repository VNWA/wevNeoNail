<template>
  <div class="flex items-center justify-center">
    <div class="bg-gray-50 p-6 my-10 border rounded-md shadow-md" style="min-width: 35rem;">
      <div class="border-b pb-5 pt-2">
        <h1 class="font-medium text-3xl text-center">Inicio de sesión</h1>
        <p class="text-gray-600 text-center">Tengo cuenta y quiero iniciar sesión</p>
      </div>
      <form @submit.prevent="handleLogin">
        <div class="my-4">
          <label for="email" class="text-sm">
            Correo electrónico o login <span class="text-primary">*</span>
          </label>
          <input id="email" type="text" class="pl-3 border focus:border-gray-400 focus:outline-none w-full py-3" required />
        </div>
        <div class="my-4">
          <label for="password" class="text-sm">
            Contraseña <span class="text-primary">*</span>
          </label>
          <input id="password" type="password" class="pl-3 border focus:border-gray-400 focus:outline-none w-full py-3" required />
        </div>
        <div class="flex justify-between mt-4 items-center">
          <div class="text-sm">
            <span class="text-primary">*</span> - campos obligatorios
            <div class="my-1">
              <NuxtLink aria-label="VNWA Link" class="text-primary underline" to="/register">Crear cuenta</NuxtLink>
            </div>
            <div>
              <NuxtLink aria-label="VNWA Link" class="text-primary underline" to="/forgot">Recordar contraseña</NuxtLink>
            </div>
          </div>
          <div>
            <button aria-label="VNWA Button" type="submit" class="text-xl mr-2 text-white bg-primary px-5 py-3 transition duration-300 hover:bg-rose-400">
              Inicio de sesión
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
const handleLogin = () => {
};
</script>

<style scoped>
</style>
