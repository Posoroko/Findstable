<script setup>
const userState = useUserState();
</script>

<template>
    <div class="full">
        <h1>WelcomeBack</h1>

        <div>
            you are logged in as :
            <ArchitectureSideBarAccountCard />

            <div>
                <NuxtLink to="/en/">
                    I'm not {{ userState.username }}
                </NuxtLink>

            </div>
        </div>
    </div>
</template>