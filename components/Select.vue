<template>
    <div class="custom-select">
        <select class="cursor-pointer">
            <option v-for="(item, index) in selectList1" :key="index" class="cursor-pointer" :value="item.value">
                {{ item.name }}
            </option>
        </select>
    </div>
    <div class="custom-select mt-4">
        <select class="cursor-pointer">
            <option v-for="(item, index) in selectList2" :key="index" class="cursor-pointer" :value="item.value">
                {{ item.name }}
            </option>
        </select>
    </div>
</template>

<script lang="ts" setup>
const selectList1 = [
    { name: 'El mismo que arriba', value: 0 },
    { name: 'Otro', value: 1 },
];

const selectList2 = [
    { name: 'Option A', value: 'a' },
    { name: 'Option B', value: 'b' },
];
</script>

<style scoped>
.custom-select {
    position: relative;
    font-family: Arial;
    width: 100%;
}

.custom-select select {
    display: block;
    width: 100%;
    padding: 1rem 0;
    border: 1px solid rgb(216, 214, 214);
    padding-left: 0.5rem;
    outline: none;
}
</style>
