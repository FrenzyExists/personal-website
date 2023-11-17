

<script lang="ts" setup>

const props = defineProps<{
    value?: string;
    id: string; // needs nanoid
}>();
</script>

<template>
    <button class="border-slate-700 text-4xl text-center h-28 w-28 m-4 rounded font-bold">{{ value }}</button>
</template>