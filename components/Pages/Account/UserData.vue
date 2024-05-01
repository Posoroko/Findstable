<script setup>
const userState = useUserState();

const { $updateMe } = useNuxtApp();


async function updateField(data) {
    const patchObject = {
        [data.key]: data.value,
    };
    $updateMe(patchObject);
}
</script>

<template>
    <p class="mainTC">{{ userState.userName }}</p>
    <FormsToggleEditInput
        name="userName"
        id="userName-id"
        labelKey="forms.fields.username.label"
        showLabel
        :value="userState.userName"
        @updateField="updateField"
    />

    <FormsToggleEditInput
        name="email"
        id="email-id"
        labelKey="forms.fields.email.label"
        showLabel
        :value="userState.email"
        @updateField="updateField"
    />
</template>

<style scoped>

</style>