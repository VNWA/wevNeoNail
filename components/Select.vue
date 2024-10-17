<template>
    <div class="custom-select">
        <select  class="cursor-pointer">
            <option v-for="(item, index) in selectList" :key="index" class="cursor-pointer" value="{{ item.value }}">{{ item.name }}</option>
        </select>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    type: Object,
    default: {}
})
const selectList = [
    {
        name: 'El mismo que arriba',
        value: 0
    },
    {
        name: 'Otro',
        value: 1
    },
]
</script>

<style>
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

.select-selected {
    background-color: rgb(232, 234, 236);
}

/* Style the arrow inside the select element: */
.select-selected:after {
    position: absolute;
    content: "";
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: #fff transparent transparent transparent;
}

/* Point the arrow upwards when the select box is open (active): */
.select-selected.select-arrow-active:after {
    border-color: transparent transparent #fff transparent;
    top: 7px;
}

/* Style the items (options), including the selected item: */
.select-items div,
.select-selected {
    color: #ffffff;
    padding: 8px 16px;
    border: 1px solid transparent;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
    cursor: pointer;
    background-color: transparent;

    /* Đảm bảo không có nền mặc định */
}

/* Style items (options): */
.select-items {
    position: absolute;
    background-color: DodgerBlue;
    /* Màu nền cho menu dropdown */
    top: 100%;
    left: 0;
    right: 0;
    z-index: 99;

}

/* Hide the items when the select box is closed: */
.select-hide {
    display: none;
}

/* Thay đổi phần hover của items (options) */
.select-items div:hover {
    background-color: transparent;

    /* Không có màu nền khi hover */
    color: #ffffff;
    /* Đặt lại màu chữ khi hover */
}

/* Highlight selected item */
.same-as-selected {
    background-color: rgba(0, 0, 0, 0.1);
}
</style>