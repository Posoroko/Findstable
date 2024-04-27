<script setup>
const { t, locale } = useI18n();
const localePath = useLocalePath()

const { $loginWithEmailAndPassword, $getUserData } = useNuxtApp();

const userState = useUserState();

async function handleSubmit(e) {
    const res = await $loginWithEmailAndPassword(email.value, password.value).then((res) => {
        if(res === 'success') {
            const router = useRouter();
            router.push({ path: localePath("home") });
        }
    });
}
const email = ref('eric@user.com');
const password = ref('1234');

</script>

<template>
    <form @submit.stop.prevent="handleSubmit" class="flex column gap10">
        <FormsInput
            type="text"
            name="email"
            placeholder_key="forms.fields.email.placeholder"
            label_key="forms.fields.email.label"
        />
        <FormsInput
            type="password"
            name="password"
            placeholder_key="forms.fields.password.placeholder"
            label_key="forms.fields.password.label"
        />
        <input class="hover" type="submit" value="Login" />
    </form>
</template>

<style scoped>
input[type="submit"] {
    align-self: center;
    color: white;
    background-color: var(--theme-color);
    padding: 14px 20px;
    border: none;
    margin: 6px 12px;
    cursor: pointer;
}
</style>