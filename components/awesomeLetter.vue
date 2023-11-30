<script setup lang="ts">

const letters:Array<string> = 'abcdefghijklmnopqrstuvwyz'.split('')

const props = defineProps<{
    routeName?: string;
    inArticles?: Array<string>;
}>();

console.log(props.routeName);

</script>
<template>
  <div
    class="select-none font-semibold flex justify-center gap-2 text-lg pt-5 italic"
  >
  <NuxtLink
  v-for="letter of letters"
  :key="letter"
  :to="'/'+props.routeName+'/'+letter"
  class="pb-4"
  :class="
  inArticles !== undefined &&
  !inArticles.map(e => e).includes(letter.toLocaleLowerCase())
  ? 'pointer-events-none'
  : ''
  ">
  {{ letter }}
  </NuxtLink>
  </div>
</template>