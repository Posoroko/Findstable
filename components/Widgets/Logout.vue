<script setup>
const { $logout } = useNuxtApp();
</script>

<template>
    <button>
        <WidgetsIconsMain name="logout" size="small" @click="$logout" />
    </button>
</template>