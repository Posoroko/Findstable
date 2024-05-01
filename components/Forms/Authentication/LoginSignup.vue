<script setup>
const { t, locale } = useI18n();
const localePath = useLocalePath()

const { $loginWithEmailAndPassword, $createUser } = useNuxtApp();

const formType = ref('login');

const invitationCode = ref('182b5097-d9ce-40ad-b81a-3713248a2b3d');
const username = ref(`eric${Date.now()}`);
const email = ref(username.value + '@new.com');
const password = ref('1234');

async function handleSubmit(e) {
    if(formType.value === 'login') {
        const res = await $loginWithEmailAndPassword(email.value, password.value).then((res) => {
            if(res === 'success') {
                const router = useRouter();
                router.push({ path: localePath("home") });
            }
        });
    } else if(formType.value === 'signup') {
        const res = await $createUser(
            invitationCode.value,
            username.value, 
            email.value, 
            password.value,
            
        );
        // const invitationCode = '182b5097-d9ce-40ad-b81a-3713248a2b3d';
        // const username = `eric${Date.now()}`;
        // const email = username + '@new.com';
        // const password = '1234';

        // const res = await $createUser(
        //     invitationCode,
        //     username, 
        //     email, 
        //     password
        // );

        if(res.status === 'success') {
            formType.value = 'login';
            handleSubmit();
        }
    }
}



</script>

<template>
    <form @submit.stop.prevent="handleSubmit" class="flex column gap10">
        <fieldset class="flex justifyCenter gap20">
            <label for="login">
                <span>login</span>
                <input type="radio" name="formType" id="login" value="login" v-model="formType">
            </label>
            

            <label for="signup">
                <span>signup</span>
                <input type="radio" name="formType" id="signup" value="signup" v-model="formType">
            </label>
        </fieldset>

        <FormsInput
            type="text"
            name="invitationCode"
            placeholder_key="forms.fields.invitationCode.placeholder"
            label_key="forms.fields.invitationCode.label"
            v-model="invitationCode"
            v-if="formType === 'signup'"
        />

        <FormsInput
            type="text"
            name="username"
            placeholder_key="forms.fields.username.placeholder"
            label_key="forms.fields.username.label"
            v-model="username"
            v-if="formType === 'signup'"
        />
        
        <FormsInput
            type="text"
            name="email"
            placeholder_key="forms.fields.email.placeholder"
            label_key="forms.fields.email.label"
            v-model="email"
        />
        <FormsInput
            type="password"
            name="password"
            placeholder_key="forms.fields.password.placeholder"
            label_key="forms.fields.password.label"
            v-model="password"
        />
        <input class="hover" type="submit" value="Login" />
    </form>
</template>

<style scoped>
label {
    padding: 6px 12px;
    border-radius: 5px;
    display: grid;
    place-items: center;
    position: relative;
    cursor: pointer;
}
input[type="submit"] {
    align-self: center;
    color: white;
    background-color: var(--theme-color);
    padding: 14px 20px;
    border: none;
    margin: 6px 12px;
    cursor: pointer;
}

label:has(input[type="radio"]:checked) {
    background-color: var(--theme-color);
}
input[type="radio"] {
    opacity: 0;
    user-select: none;
    pointer-events: none;
    position: absolute;
}
</style>