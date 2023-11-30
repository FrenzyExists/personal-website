<script setup lang="ts">
import type { Tag } from '~/types';
const props = defineProps<{
  link?: string;
  title?: string;
  stars?: number;
  forks?: number;
  description?: string;
  tags?: Array<Tag>;
}>();
</script>

<template>
  <NuxtLink :href="props.link" class="feature-block grid grid-rows-[4rem_2rem_8rem_2rem] relative bg-neutral-4 no-underline h-full">
    <span
      class="capitalize bg-neutral-1 text-accent-1 md:hover:text-accent-4 article-title px-3 items-center flex font-heading text-xl font-semibold leading-normal transition-property-color duration-100 ease-out">
      {{ props.title ? props.title : 'spooky skeletons' }}
    </span>
    <div class="font-heading justify-self-end px-2 flex gap-1 items-center text-xs -rotate-1">

      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
        <Icon name="mdi:star-outline" size="1.25rem" class="mr-1" />
        {{ props.stars ? props.stars : 0 }}
      </span>
      <Icon name="mdi:chevron-right" size="2.25rem" class="text-accent-7 -mx-2" />
      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
        <Icon name="mdi:source-fork" size="1.25rem" class="mr-1" />
        {{ props.forks ? props.forks : 0 }}
      </span>
    </div>
    <p class="text-text dark:text-dark-text max-h-24 line-clamp-3 leading-7 italic px-3 mb-4 text-sm pt-[0.35rem]">
      {{
        props.description ? props.description : 'no proper description at the moment'
      }}
    </p>
    <div
      class="flex gap-2 self-end tags bg-neutral-1 after:h-full after:w-full after:absolute after:top-0 after:left-0 pt-5 pb-2 after:-z-50 px-2">
      <button v-for="tag in props.tags" :key="tag.id"
        class="tag-btn block italic font-bold rounded-full px-[0.85em] py-[0.30em] text-neutral-2" tabindex="0"
        :class="tag.color"
        >
        #{{ tag.tagName }}
      </button>
    </div>
  </NuxtLink>
</template>
  

  
<style>
.feature-block {
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
  transition: 0.2s;
}

.tags {
  clip-path: polygon(0 20%, 125% 0, 100% 100%, 0 100%);
}

.article-title {
  clip-path: polygon(0 0%, 100% 0, 100% 85%, 0 100%);
}
</style>
  