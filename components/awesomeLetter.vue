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
    class="select-none letter-man after:bg-acc dark:after:bg-dark-acc after:left-[40%] after:right-[40%] after:h-1 after:absolute after:mt-9 font-semibold flex justify-center gap-2 text-lg py-1 pt-5 font-montserrat-alternate italic"
  >
  <NuxtLink
  v-for="letter of letters"
  :key="letter"
  :to="'/'+props.routeName+'/'+letter"
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