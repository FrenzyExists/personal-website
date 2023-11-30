<script lang="ts" setup>
const links = defineProps<{
  link: Array<{
    name: string,
    path: string
  }>
}>();
// console.log(links);
</script>
<template>
  <nav class="bg-neutral-1 select-none top-0 z-0 w-full">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <span class="inline-flex items-center">
        <Icon name="uil:bolt" class="text-primary bg-neutral-2 text-accent-1 rounded-md p-2 font-medium mb-4 md:mb-0"
          size="2.75rem" />
        <h1 class="font-bold text-2xl ml-3 text-accent-1">Pikachu's</h1>
      </span>
      <nav
        class="md:w-auto w-full md:flex px-4 md:ml-auto md:mr-auto block flex-wrap items-center text-base justify-center text-base-1">
        <NuxtLink v-for="l in links.link" :key="l.name" :to="l.path" active-class="!font-bold bg-neutral-2"
          class="block px-3 py-2 text-base font-medium rounded-md">{{ l.name }}</NuxtLink>
      </nav>
      <ThemeToggle class="inline-flex items-center" />

    </div>
  </nav>
</template>

