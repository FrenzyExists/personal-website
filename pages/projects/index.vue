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
    }
]

</script>

<template>
    <nuxt-layout name="normal">
        <div class="px-10 pb-10 justify-center">
            <h1 class="text-center text-4xl font-bold mt-4">Achoo! Trinkets!</h1>
            <h3 class="text-center mt-4 text-lg">I'm what you would call a <span class="font-bold italic">Maker</span> of sorts. These are the things I do either in my free time, in college or when I'm procrastinating</h3>
            <div >
                <awesome-letter routeName="projects" />
            </div>
            <div class="py-4">
                <awesome-searchbar/>
            </div>
            <div>
                <awesome-card-grid>
                    <card v-for="p in projectsLocally" :description="p.description" :link="p.link" :title="p.title" category=""/>
                </awesome-card-grid>
                
            </div>

            <div>
                <h1 class="text-lg text-center mt-8 mb-4">Want to see more? Here are other projects I made!</h1>
                
                <card :forks="2" :stars="10" title="Test" description="This card is just a test" category="Unknown"
                    link="/projects/kanban" />
            </div>
        </div>
    </nuxt-layout>
</template>