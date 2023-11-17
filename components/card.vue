<script setup lang="ts">
const props = defineProps<{
  category: string
  title: string
  description: string
  stars?: number
  forks?: number
  link?: string;
}>();
</script>
<template>
  <div class="p-4">
    <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
        {{ props.category.toUpperCase() }}</h2>
      <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
        {{ props.title }}</h1>
      <p class="leading-relaxed mb-3">
        {{ props.description }}</p>
      <NuxtLink>
        <a
        :href="props.link"
         class="text-indigo-500 inline-flex items-center" >Learn More
        <Icon name="mdi:arrow-right" class="ml-2" size="1.25rem" />
      </a>
      </NuxtLink>
      <div 
      v-if="props.stars && props.forks"
      class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
        <span
          class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
          <Icon name="mdi:star-outline" size="1.25rem"  class="mr-1" />
          {{props.stars}}
        </span>
        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
          <Icon name="mdi:source-fork" size="1.25rem"  class="mr-1" />
          {{props.forks}}
        </span>
      </div>
    </div>
  </div>
</template>