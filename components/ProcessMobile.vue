<template>
     <div class="my-10">
        <div class="border flex my-2">
            <div class=" flex w-12 justify-center items-center mr-4 text-white text-xl "
                :class= "number >= 1 ? 'bg-primary': 'bg-slate-400'">
                1
            </div>
            <div class="py-3">
                LA CESTA
            </div>
        </div>
        <div class="border flex my-2">
            <div class=" flex w-12 justify-center items-center mr-4 text-white text-xl"
            :class= "number >= 2 ? 'bg-primary': 'bg-slate-400'">
                2
            </div>
            <div class="py-3">
                LA CESTA
            </div>
        </div>
        <div class="border flex my-2">
            <div class=" flex w-12 justify-center items-center mr-4 text-white text-xl "
            :class= "number >= 3 ? 'bg-primary': 'bg-slate-400'">
                3
            </div>
            <div class="py-3">
                LA CESTA
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps(
    {
        number: {
            type: Number,
            default: 0
        }
    }
)
</script>

<style></style>
