<script setup>
const { t } = useI18n();

defineProps({
    type: {
        type: String,
        default: 'text',
        required: false,
    },
    name: {
        type: String,
        required: true,
    },
    label_key: {
        type: String,
        required: true,
    },
    placeholder_key: {
        type: String,
        required: true,
    },
    showLabel: {
        type: Boolean,
        default: false,
    }
})
</script>

<template>
    <label for=""></label>
    <input class="text-lg semilight" :type="type" :name="name" :placeholder="t(placeholder_key)" :aria-label="t(label_key)">
</template>

<style scoped>
input[type="text"],
input[type="password"],
input[type="email"]{
    color: var(--main-text-color);
    background-color: var(--main-background-color);
    padding: 6px 12px;
    border: 1px solid var( --main-dimmed);
    border-radius: 8px;
}
</style>