<script lang="ts" setup>
import type { Skill } from '~/types';

const factsAboutMe: Skill[] = [
  {
    name: 'I Like red',
    iconify: 'mdi:format-color-fill',
    category: ['My bedroom is Red. My cellphone is Red. My clothes are Red', 'Become one with the Red']
  },
  {
    name: 'I am a Gamer',
    iconify: 'mdi:gamepad',
    category: ['The kind who enjoys playing oldschool and indie games.', 'Spent too much time playing Mario Kart 64', 'Will reach 5 Cells in Dead Cells... one day... I hope', 'I \'m terrible at First Person Shooters 🥲']
  },
]
</script>

<template>
  <section>
    <div class=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 text-neutral-50">
      <div class="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
        <div class="w-full mx-auto">
          <h1 class="text-3xl mb-2 font-bold text-center text-dark-accent-300">Who The Heck Is Detective Pikachu?</h1>
          <p class="text-lg mx-2 my-3 text-justify">My name is Angel, but you can call me Pikachu. I'm a Computer
            Engineering student at the University
            of Puerto Rico in Mayaguez. I've always been fascinated by the way computers and circuits
            work and how they can be used to solve complex problems. I am currently working on a research
            project with a professor in the Electrical
            Engineering department where we are developing a GUI for an existing testing CLI developed
            by Texas Instruments engineers.
          </p>
          <p class="text-lg mx-2 my-3">
            As with all people, I have a few interesting facts/quirks/random-things-that-happened I believe are worth
            mentioning about me:
          </p>
        </div>
      </div>
      <div class="flex flex-col">
        <div class=" flex flex-col items-center pb-10 my-10 border-b border-neutral-50 max-w-6xl sm:flex-row"
          v-for="fact in factsAboutMe" :key="fact.name">
          <div
            class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-dark-accent-300 rounded-full bg-neutral-50 sm:mr-10">
            <Icon :name="fact.iconify" size="4rem" />
          </div>
          <div class="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md list-none sm:list-disc">
            <h2 class="font-semibold text-lg">{{ fact.name }}</h2>
            <li v-for="f in fact.category">{{ f }}</li>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>