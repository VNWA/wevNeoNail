<template>
    <div class="lg:flex justify-center ml-52 mr-7 hidden"> <!-- Đảm bảo div cha căn giữa nội dung bên trong -->
        <ol class="lg:flex items-center w-full max-w-4xl mx-auto text-xs text-gray-900 font-medium sm:text-base my-8"> <!-- Sử dụng 'max-w-4xl' để giữ độ rộng phù hợp, và thêm 'mx-auto' để căn giữa -->
            <li class="flex w-full relative after:content-[''] after:bg-gray-900 after:w-full after:h-0.5 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4"
                :class="{ 'text-primary ': number >= 0, 'after:bg-primary': number > 1 }" style="flex-grow: 1;">
                <div class="block whitespace-nowrap z-10">
                    <span :class="{ 'bg-primary after:bg-primary': number >= 1 }"
                        class="w-6 h-6  border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white lg:w-10 lg:h-10">1</span>
                    Step 1
                </div>
            </li>
            <li class="flex w-full relative text-gray-900 after:content-[''] after:w-full after:h-0.5 after:bg-gray-900 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4"
                :class="{ 'text-primary ': number >= 2, 'after:bg-primary': number >= 3 }" style="flex-grow: 1;">
                <div class="block whitespace-nowrap z-10">
                    <span :class="{ 'bg-primary text-white border-none': number >= 2 }"
                        class="w-6 h-6 bg-gray-50 border-2 border-gray-900 rounded-full flex justify-center items-center mx-auto mb-3 text-sm lg:w-10 lg:h-10">2</span>
                    Step 2
                </div>
            </li>
            <li class="flex w-full relative text-gray-900 after:content-[''] after:w-full after:h-0.5 after:bg-gray-900 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4"
                :class="{ 'text-primary ': number >= 3, 'after:bg-primary': number >= 4 }" style="flex-grow: 1;">
                <div class="block whitespace-nowrap z-10">
                    <span :class="{ 'bg-primary text-white border-none': number >= 3 }"
                        class="w-6 h-6 bg-gray-50 border-2 border-gray-900 rounded-full flex justify-center items-center mx-auto mb-3 text-sm lg:w-10 lg:h-10">3</span>
                    Step 3
                </div>
            </li>
            <li :class="{ 'text-primary ': number >= 4 }" class="flex w-full relative text-gray-900"
                style="flex-grow: 1;">
                <div class="block whitespace-nowrap z-10">
                    <span :class="{ 'bg-primary text-white border-none': number >= 4 }"
                        class="w-6 h-6 bg-gray-50 border-2 border-gray-900 rounded-full flex justify-center items-center mx-auto mb-3 text-sm lg:w-10 lg:h-10">4</span>
                    Step 4
                </div>
            </li>
        </ol>
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
