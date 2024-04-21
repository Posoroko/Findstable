<script setup>
defineEmits(['submit']);

</script>

<template>
    <form @submit.stop.prevent="">
        <slot/>
    </form>
</template>