<script setup>
const userState = useUserState();
const editableFields = ref(false);

async function updateField() {
    console.log('updating field');
}
</script>

<template>
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