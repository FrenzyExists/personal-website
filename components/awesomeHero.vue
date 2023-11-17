<script lang="ts" setup>
import { useMounted } from '@vueuse/core';
import Typed from 'typed.js'

const quote = ref({
  'text': 'string',
  'author': 'string'
})

const options = {
  strings: ['Fullstack Developer', 'Tech Enthusiast', 'Computer Engineer', 'Hardware Maniac'],
  typeSpeed: 50,
  loop: true,
  backDelay: 2600,
  delaySpeed: 900,
  backSpeed: 40,
  smartBackspace: true
}

onMounted(() => {
  new Typed('#typed', options)
})

if (useMounted()) {
  useFetch("https://type.fit/api/quotes").then((r) => {
    // TODO: Figure out a better way to safely do this :\
    let a: Array<{ text: string, author: string }> = JSON.parse(r.data.value);
    const randomIndex: number = Math.floor(Math.random() * a.length);
    let temp = a[randomIndex];
    temp.author = temp.author.replace(', type.fit', '');
    quote.value = temp;
  }).catch((e) => {
    console.log("error: ", e);
    quote.value = { text: 'Everything that will go wrong, will go wrong', author: 'Murphy\'s Law' }
  });
}

</script>
<template>
  <section class="text-dark-accent-200 bg-neutral-100 body-font border-b-[2rem] border-neutral-50">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h5 class="text-2xl uppercase">Hey there!</h5>
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-dark-accent-100">It's Detective Pikachu</h1>
        <h4 class="text-4xl sm:text-3xl text-soft">
          A <span id="typed"></span>

        </h4>
        <blockquote class="text-lg italic font-semibold mt-3 ">
          <Icon name="material-symbols:format-quote-rounded" size="3rem" class="mb-1 block text-neutral-50" />
          <p class="ml-2 ">{{ quote.text }}</p>
          <span class="text-sm font-light text-dark-accent-100">{{ quote.author }}</span>
        </blockquote>

      </div>
      <div class="flex flex-col items-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Icon name="mdi:airballoon-outline" class="mb-1 block h-max w-5/6 object-cover object-center animate-float" />
      </div>
    </div>
  </section>
</template>