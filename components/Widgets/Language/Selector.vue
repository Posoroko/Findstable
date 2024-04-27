<script setup>
const { t, locale, locales, setLocale } = useI18n();
const switchLocalePath = useSwitchLocalePath()


</script>

<template>

    <div class="select flex">
        <NuxtLink 
            v-for="loc in locales" :key="loc.code"
            :to="switchLocalePath(loc.code)"
            class="touch"
            :class="{ 'active' : loc.code === locale }"
        >
            <span class="semibold centered pointer">
                {{ loc.code }}
            </span>
        </NuxtLink>
    </div>
</template>

<style scoped>
.touch {
    display: block;
    color: var(--main-text-color);
    width: 48px;
    height: 48px;
    border-radius: 5px;
    display: grid;
    place-items: center;
}
span {
    width: 30px;
    height: 30px;
    font-size: 0.875rem;

    border-radius: 5px;
}
.touch.active span {
    color: var(--main-light);
    background-color: var(--theme-color);
}

</style>