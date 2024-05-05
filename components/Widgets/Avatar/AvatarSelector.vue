<script setup>
const { $getItems } = useNuxtApp();
const userState = useUserState();

const { data : avatars } = useAsyncData(
    'getAvatats',
    async () => {
        const items = await $getItems('userToken', 'Avatars', ['fields=id,image', 'limit=3']);

        return items;
    },
    {
        server : false
    }
)
</script>

<template>
    <div class="selector mainTC">
        <p>Select your new Avatar</p>

        <p>{{ asset }}</p>

        <p v-if="avatars">
            <div v-for="avatar in avatars" :key="avatar.id">
                <img :src="`https://admin.findstable.net/assets/${avatar.image}?access_token=${userState.accessToken.value}`" alt="">
            </div>
        </p>
    </div>
</template>