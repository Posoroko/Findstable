<script setup>
const userState = useUserState();
const { t } = useI18n();

const props = defineProps({
    type: {
        type: String,
        default: 'text',
        required: false,
    },
    name: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    labelKey: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        default: '',
    },
    showLabel: {
        type: Boolean,
        default: false,
    }
})

const emit = defineEmits(['updateField']);

const fieldValue = ref(props.value);
const originalValueCache = ref("");

const editing = ref(false);


function handleClick() {
    if(!editing.value) {
        originalValueCache.value = fieldValue.value;
        editing.value = true;
    } else {
        emit('updateField', {
            key: props.name,
            value: fieldValue.value,
        });

        editing.value = false;
    }
}

function cancelEdit() {
    editing.value = false;
    fieldValue.value = originalValueCache.value;
}
</script>

<template>
    <div class="flex column alignStart">
        <p class="mainTC">{{ fieldValue }}</p>
        <label 
            :for="id"
            class="mainTC"
        >
            {{ t(labelKey) }}
        </label>

        <div class="flex gap10 alignCenter">
            
            <input 
                :id="id"
                class="text-lg semilight" 
                :class="{ 'active': editing }"
                type="text" 
                :name="name" 
                :aria-label="`${t(labelKey)}`"
                v-model="fieldValue"
            >

            <WidgetsIconsMain 
                :name="editing ? 'check' : 'edit'" 
                size="small" 
                class="pointer"
                @click="handleClick"
            />

            <WidgetsIconsMain 
                v-if="editing"
                name="close" 
                size="small" 
                class="pointer"
                @click="cancelEdit"
            />
        </div>
    </div>
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
    margin-top: 5px;
}

input.active {
    color: var(--main-text-color);
    background-color: var(--main-dimmed);
    padding: 6px 12px;
    border: 1px solid var( --theme-color);
    border-radius: 8px;
}
</style>