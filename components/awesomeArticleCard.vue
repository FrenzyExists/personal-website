
<script lang="ts" setup>
import type { Tag } from '~/types';

const props = defineProps<{
    title?: string;
    date: Date;
    status?: string;
    description?: string;
    tags?: Array<Tag>;
    path: string;
}>();

</script>
<template>
    <a :href="props.path" class="relative grid grid-rows-[4rem_2rem_8rem_2rem] no-underline h-full">
        <span
            class="capitalize article-title px-3 items-center flex font-heading text-xl font-semibold leading-normal transition-property-color duration-100 ease-out">
            {{ props.title !== undefined ? props.title : 'Untitled' }}
        </span>
        <div>
            <span>

            </span>
            <Icon name="mdi:chevron-right" />
            <span></span>
        </div>
        <p></p>
        <div>
            <button>

            </button>
        </div>
    </a>
</template>