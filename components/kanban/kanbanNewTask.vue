<script setup lang="ts">
import type { Tasks } from '~/types';
import {nanoid} from 'nanoid'

const emit = defineEmits<{
    (e: "add", payload: Tasks): void;
}>();

const focused = ref(false);
const title = ref("");

function createTask(e: Event) {
    if(title.value.trim()) {
        e.preventDefault();
        emit("add",  {
            title: title.value.trim(),
            createdAt: new Date(),
            id: nanoid()
        } as Tasks)
    }

    title.value = "";
}

</script>

<template>
    <div>
        <textarea 
        v-model="title"
        @keydown.tab="createTask"
        @keyup.enter="createTask"
        class="focus:bg-white focus:shadow bg-transparent px-1 pt-1 resize-none rounded w-full border-r"
        :class="{
            'h-7': !focused,
            'h-16': focused
        }"
        style="outline: none !important;"
        @focus="focused=true"
        @blur="focused=false"
        :placeholder="!focused ? '+ Add Task' : 'Enter Title for this task'"
        />
    </div>
</template>