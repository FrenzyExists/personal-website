<script setup lang="ts">

const props = defineProps<{
  title: string
}>()
</script>

<template>
    <header class="drag-handle"><span class="text-gray-400 mr-1 cursor-move">⨎</span> {{ props.title }}</header>
</template>