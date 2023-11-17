<script setup lang="ts">
import { useDateFormat,useNow, onKeyStroke, useToString } from '@vueuse/core';
import type { ID, Tasks } from '~/types';
import {format} from 'date-fns'

// Props macro
const props = defineProps<{
    task: Tasks
}>();

const emit = defineEmits<{
    (e: "delete", payload: ID): void;
}>();

const focused = ref(false);
onKeyStroke('Backspace', (e) => {
    if(focused.value) {
        // emit from Define Emits
        emit("delete", props.task.id);
    }
});



</script>
<template>
    <div
    :title="format(new Date(task.createdAt), 'MMMM-dd-yyyy')"
    class="task bg-white p-2 mb-2 rounded shadow-sm max-w-[250px]"
    @focus="focused = true"
    @blur="focused = false"
    tabindex="0"
    >
    <DragHandle :title="task.title"/>
    </div>
</template>
<style>
/* class added to the element when you first choose it, when you first click and hold to drag */
.sortable-chosen {}

/* applies when you are dragging */
.sortable-drag .task{
    transform: rotate(-5deg);
}

/* targets element underneath the task and moves around it */
.sortable-ghost .task{
    position: relative;

}
.sortable-ghost .task::after {
    content: "";
    @apply absolute top-0 bottom-0 left-0 right-0 bg-slate-300 rounded;
}
.task:focus,
.task:focus-visible {
    @apply ring-1 ring-slate-500 ring-opacity-25;
}
</style>