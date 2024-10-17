<template>
    <div>
        <div class="container mx-auto">
            <div>
                <Process :number="someNumber" />
            </div>
            <div class="block lg:hidden">
                <ProcessMobile :number="someNumber" />
            </div>
            <div class="grid lg:grid-cols-2 gap-4">
                <div>
                    <div class="bg-gray-50 w-full border">
                        <div class="lg:p-8 p-6">
                            <h1 class="text-3xl text-center font-medium border-b pb-4 mb-5">Cambio de contraseña
                            </h1>
                            <form @submit.prevent="handleSubmit">
                                <div class="grid lg:grid-cols-2 gap-8">
                                    <div>
                                        <label for="nombre" class="text-sm">Nombre <span
                                                class="text-primary">*</span></label>
                                        <TextInput v-model="form.firstName" class="bg-red" id="nombre" required />
                                    </div>
                                    <div>
                                        <label for="apellido" class="text-sm">Apellido <span
                                                class="text-primary">*</span></label>
                                        <TextInput />
                                    </div>
                                </div>
                                <div class="grid lg:grid-cols-2 gap-8 my-2">
                                    <div>
                                        <label for="empresa" class="text-sm">Empresa <span
                                                class="text-primary">*</span></label>
                                        <TextInput />
                                    </div>
                                    <div>
                                        <label for="codigoPostal" class="text-sm">Código postal <span
                                                class="text-primary">*</span></label>
                                        <TextInput />
                                    </div>
                                </div>
                                <div class="grid lg:grid-cols-2 gap-8 my-2">
                                    <div>
                                        <label for="calle" class="text-sm">Calle <span
                                                class="text-primary">*</span></label>
                                        <TextInput />
                                    </div>
                                    <div class="block lg:hidden" >
                                        <div class="uppercase underline text-gray-500 text-xs">IMPORTANTE</div>
                                        <div class="text-gray-500 lg:text-xs">
                                            En la medida de lo posible, por favor, utiliza las abreviaturas: calle: c.;
                                            c/; cl.; avenida: av.;
                                            avd.; avda.; paseo: p.º; plaza: pza.; pl.; plza.
                                        </div>
                                    </div>
                                    <div>
                                        <label for="numeroCasa" class="text-sm">Número de casa <span
                                                class="text-primary">*</span></label>
                                        <TextInput />
                                    </div>
                                </div>
                                <div class="grid lg:grid-cols-2 gap-8">
                                    <div class="hidden lg:block" >
                                        <div class="uppercase underline text-gray-500 text-xs">IMPORTANTE</div>
                                        <div class="text-gray-500 text-xs">
                                            En la medida de lo posible, por favor, utiliza las abreviaturas: calle: c.;
                                            c/; cl.; avenida: av.;
                                            avd.; avda.; paseo: p.º; plaza: pza.; pl.; plza.
                                        </div>
                                    </div>
                                    <div>
                                        <div class="uppercase underline text-gray-500 text-xs">IMPORTANTE</div>
                                        <div class="text-gray-500 lg:text-xs">
                                            En la medida de lo posible, por favor, utiliza las abreviaturas: calle: c.;
                                            c/; cl.; avenida: av.;
                                            avd.; avda.; paseo: p.º; plaza: pza.; pl.; plza.
                                        </div>
                                        <div class="flex items-center gap-2 py-4">
                                            <label class="flex items-center cursor-pointer">
                                                <input type="checkbox" class="hidden peer" />
                                                <div
                                                    class="w-6 h-6 border border-gray-300 rounded-sm transition-all duration-300 peer-checked:bg-primary flex items-center justify-center">
                                                    <svg class="w-4 h-4 text-white opacity-0 transition-opacity duration-300 peer-checked:opacity-100"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        fill="none" stroke="currentColor" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M5 12l5 5L20 7"></path>
                                                    </svg>
                                                </div>
                                            </label>
                                            <p class="text-xs">Ningún número de casa disponible</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid lg:grid-cols-2 gap-8 my-2">
                                    <div>
                                        <label for="ciudad" class="text-sm">Ciudad <span
                                                class="text-primary">*</span></label>
                                        <TextInput />
                                    </div>
                                    <div>
                                        <label for="telefono" class="text-sm">Teléfono<span
                                                class="text-primary">*</span></label>
                                        <TextInput />
                                    </div>
                                </div>
                                <div class="grid lg:grid-cols-2 gap-8 my-2">
                                    <div>
                                        <label for="email" class="text-sm">E-mail <span
                                                class="text-primary">*</span></label>
                                        <TextInput />
                                    </div>
                                    <div></div>
                                </div>

                                <div class="my-4">
                                    <Select />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="bg-gray-50 w-full border">
                        <div class="p-8">
                            <h1 class="text-3xl text-center font-medium border-b pb-4 mb-5">Cambio de contraseña
                            </h1>
                            <div class="flex justify-between border-b pb-4 mb-5 p-2 ">
                                <span class="font-medium">Productos en la cesta </span>
                                <span class="text-sm text-gray-500 underline">
                                    cambiar
                                </span>
                            </div>
                            <div class="font-thin p-2 ">
                                1 Producto
                            </div>
                            <div class="bg-zinc-200 p-2 flex justify-between my-2">
                                <span class="font-medium">Total del pedido</span>
                                <span class="font-medium">4,40 €</span>
                            </div>
                            <div class="flex justify-between border-b pb-4 mb-5 p-2 ">
                                <span class="font-medium">Método de pago y envío </span>
                                <span class="text-sm text-gray-500 underline">
                                    cambiar
                                </span>
                            </div>
                            <div class="p-2 flex justify-between my-2">
                                <span>pago con tarjeta
                                    Correos</span>
                                <span class="font-medium">4,40 €</span>
                            </div>
                            <div class="bg-zinc-200 p-2 flex justify-between my-2">
                                <span class="font-medium">Total del pedido</span>
                                <span class="font-medium text-primary text-lg">9,30€</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-between items-center mt-10">
                <div class="">
                    <NuxtLink aria-label="VNWA Link" to="/order/cart"
                        class="border text-xl border-gray-400 mr-2 text-black bg-white px-5 py-3 transition duration-300 hover:border-primary hover:text-primary">
                        Atrás
                        Cesta
                    </NuxtLink>
                </div>
                <div class="">
                    <NuxtLink aria-label="VNWA Link" to="/order/confirm"
                        class=" text-xl mr-2 text-white bg-primary px-5 py-3 transition duration-300 hover:bg-rose-300 ">
                        Adelante
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const form = ref({
    firstName: ''
})
const someNumber = ref(2); // Giá trị này sẽ được sử dụng cho Process và ProcessMobile

</script>

<style></style>