<script setup lang="ts">
import { useKeyModifier, useLocalStorage } from '@vueuse/core';
import { nanoid } from 'nanoid';
import draggable from 'vuedraggable';
import type { Column, Tasks } from '~~/types'


const cols = useLocalStorage<Column[]>("kanban-board",
  [{
    id: nanoid(),
    title: 'Finish something',
    tasks: [{
      id: nanoid(),
      title: 'Todo A',
      createdAt: new Date()
    }, {
      id: nanoid(),
      title: 'Todo B',
      createdAt: new Date()
    }]
  }]
);

// For backend
// watch(cols, () => {
// request here
// });

const createColumn = () => {
  const newCol: Column = {
    id: nanoid(),
    title: "",
    tasks: []
  };
  cols.value.push(newCol);
  nextTick(() => {
    (document.querySelector(".column:last-of-type .title-input") as HTMLInputElement).focus()
  })

}

const alt = useKeyModifier("Alt");

</script>

<script lang="ts">
export default {
  data() {
    return {
      drag: false
    }
  },
}
</script>

<template>
  <div class="flex items-start overflow-x-auto gap-4">
    <draggable v-model="cols" group="cols" item-key="id" :animation="150" @start="drag = true" @end="drag = false"
      handle=".drag-handle" class="flex gap-4 items-start select-none">
      <template #item="{ element: col }: { element: Column }">
        <div class="bg-gray-200 p-5 rounded min-w[250px] column">
          <!-- Put this inside drag handle with an isEditable option -->
          <header class="drag-handle py-2"><span class="text-gray-400 mr-1 cursor-move">皿</span>
            <input type="text" class="title-input bg-transparent focus:bg-white rounded px-1 w-4/5"
              @keyup.enter="($event.target as HTMLInputElement).blur()" v-model="col.title"
              @keydown.backspace="col.title === '' ? cols = cols.filter((t) => t.id !== col.id) : null">
          </header>

          <draggable v-model="col.tasks" :group="{ name: 'tasks', pull: alt ? 'clone' : true }" item-key="id"
            :animation="150" @start="drag = true" handle=".drag-handle" @end="drag = false" direction="vertical">
            <template #item="{ element: task }: { element: Tasks }">
              <div>
                <KanbanTask @delete="col.tasks = col.tasks.filter((t) => t.id !== $event)" :task="task" />
              </div>
            </template>
          </draggable>
          <footer>
            <KanbanNewTask @add="col.tasks.push($event)" />
          </footer>
        </div>
      </template>
    </draggable>
    <button @click="createColumn" class="bg-gray-200 whitespace-nowrap p-2 rounded opacity-50">+ Another Column</button>
  </div>
</template>