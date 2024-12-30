<script setup>

    defineProps({
        modelValue: String
    });

    let emit = defineEmits(['update:modelValue']);

    function onTabPress(e) {
        let textarea = e.target;

        let value = textarea.value,
            start = textarea.selectionStart,
            end = textarea.selectionEnd;

        textarea.value = value.substring(0, start) + '\t' + value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + 1;
    }
</script>

<template>
    <textarea 
        @keydown.tab.prevent="onTabPress" 
        @keyup="emit('update:modelValue', $event.target.value)" 
        v-text="modelValue"
    />
</template>