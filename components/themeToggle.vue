<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';


const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<template>
    <button role="button" aria-label="Toggle dark/light" @click="toggleDark()"
        class="m-auto cursor-pointer rounded-full p-2"> 
        <icon name="material-symbols:dark-mode-outline" size="1.75rem" v-if="isDark" class="m-auto block"/>
        <icon name="material-symbols:sunny-outline" size="1.75rem" v-else class="m-auto block"/>
    </button>
</template>