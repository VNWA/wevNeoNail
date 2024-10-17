<template>
    <div>
        <div class="bg-gray-50 border">
            <div class="p-5">
                <div class="font-bold text-3xl">Mi cuenta</div>
                <ul class="pt-5">
                    <li class="border-b py-3" v-for="(item, index) in menuItems" :key="index">
                        <NuxtLink
                            class="py-2 flex items-center gap-3"
                            :to="item.link"
                            exact-active-class="active"
                        >
                            <div :class="{ selected: isSelected(item.key) }" class="p-2 flex items-center justify-center rounded-sm">
                                <Icon :class="['w-6 h-6', isSelected(item.key) ? 'text-white' : 'text-gray-400']" :name="item.icon" />
                            </div>
                            <div>{{ item.label }}</div>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const currentPage = route.query.selected || route.path.split('/').pop();

const menuItems = [
    { label: 'Thông tin cá nhân', link: { path: '/customer/dashboard', query: { selected: 'dashboard' } }, icon: 'line-md:account', key: 'dashboard' },
    { label: 'Đổi mật khẩu', link: { path: '/customer/changepassword', query: { selected: 'changepassword' } }, icon: 'teenyicons:password-outline', key: 'changepassword' },
    { label: 'Xem đơn hàng', link: { path: '/customer/vieworders', query: { selected: 'vieworders' } }, icon: 'solar:bag-broken', key: 'vieworders' },
];

const isSelected = (key) => currentPage === key;
</script>

<style scoped>
.selected {
    background-color: pink; /* Màu hồng cho nền */
    color: white; /* Đổi màu icon sang trắng */
}
</style>
