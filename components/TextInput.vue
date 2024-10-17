<script setup>

defineProps({
    modelValue: String,
});

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});
defineExpose({ focus: () => input.value.focus() });
</script>
<template>
    <input  ref="input"  :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="pl-3 border focus:border-gray-400 focus:outline-none w-full py-3"  />
</template>