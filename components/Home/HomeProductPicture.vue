<template>
    <div class="overflow-hidden">
        <NuxtLink to="/">
            <NuxtImg class="lg:hover:scale-105 lg:transition-all" width="485" height="485" :src="image" />
        </NuxtLink>
    </div>

</template>

<script lang="ts" setup>
defineProps({
    image: String
})
</script>

<style></style>