<script setup lang="ts">
import { nanoid } from 'nanoid';
import type { Article } from '~/types';

const route = useRouter()
console.log(route.getRoutes());

// When accessing /posts/1, route.params.id will be 1
// route.getRoutes().filter( r=> r.path.includes('projects'));

const projectsLocally: Array<Article> = [
  {
    description: 'A simple task organizer... thats it',
    tags: [],
    id: nanoid(),
    title: 'Mini Kanban Planner',
    createdAt: new Date('2023-06-11'),
    link: '/projects/kanban'
  }, {
    description: 'Nuxt version of an unfinished React Tic Tac Toe game I made some time ago',
    tags: [],
    title: 'Tic Tac Toe',
    id: nanoid(),
    createdAt: new Date('2023-20-11'),
    link: '/projects/tictactoe'
  }, {
    description: 'Surveying Stuff',
    tags: [],
    id: nanoid(),
    title: 'Old Surveying Project',
    createdAt: new Date('2020-11-11'),
    link: '/projects/surveying'
  }, {
    description: 'Memory',
    tags: [],
    id: nanoid(),
    title: 'Small Memory Game',
    createdAt: new Date('2023-12-12'),
    link: '/projects/memory'
  }
]

let query: any = ref("")


const handleUpdateQuery = (newValue: string) => {
  query.value = newValue;
  console.log(newValue);
}

useHead({
  title: 'Big Brain Projects'
})

</script>

<template>
  <nuxt-layout name="normal">
    <div class="px-10 pb-10 justify-center">
      <h1 class="text-accent-1 text-center text-4xl font-bold mt-4">Achoo! Sorry, uhh... Trinkets!</h1>
      <h3 class="text-center mt-4 text-lg">I'm what you would call a <span class="font-bold italic">Maker</span> of
        sorts. These are the things I do either in my free time, in college or when I'm procrastinating</h3>
      <div>
        <awesome-letter routeName="projects" />
      </div>
      <div class="py-4 px-10">
        <awesome-searchbar @update="handleUpdateQuery" />
      </div>

      <div class="pb-8">
        <awesome-card-grid>
          <awesome-project-card v-for="p in projectsLocally" :forks="p.forks" :stars="p.stars" :title="p.title"
            :description="p.description" :link="p.link" />
        </awesome-card-grid>

        <h1 class="text-lg pow text-center mt-8 mb-4">Want to see more? Here are other projects I made!</h1>
        <awesome-card-grid>
          <awesome-project-card title="Awesome Project" :stars="21" :forks="2"
            description="A wild project I made, probably for web stuff"
            :tags="[{ 'id': 'nu', 'tagName': 'Bad Bunny', 'color': 'bg-[#F1e596]' }]" />
        </awesome-card-grid>
      </div>
    </div>
  </nuxt-layout>
</template>

<style>
.pow {
  font-family: 'Raleway';
}</style>