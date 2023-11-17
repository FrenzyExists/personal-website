<script lang="ts" setup>

import type { Skill } from '~/types';

const skillArray: Array<Skill> = [{
  name: 'Fullstack Web Dev',
  category: ['Nuxt', 'React'],
  iconify: 'mdi:layers-triple-outline'
}, {
  name: 'Embedded Engineering',
  category: ['Iverilog', 'Arduino', 'ESP32'],
  iconify: 'tabler:circuit-capacitor-polarized'
}, {
  name: 'PCB Design',
  category: ['JLPCB'],
  iconify: 'mdi:chip'
}, {
  name: '3D Printing',
  category: ['Fusion360', 'FreeCAD', 'TinkerCAD'],
  iconify: 'mdi:printer-3d-nozzle-outline'
}];



</script>

<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Building the future one line of code at
          a time</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          As a full stack developer, I have experience working with both front-end and back-end
          technologies. I'm also passionate about tinkering with hardware and exploring new
          technologies. Whether you're looking to build a new website or develop an innovative
          hardware solution, I'm here to help you bring your ideas to life.
        </p>
      </div>
      <div class="flex flex-wrap -m-4 text-center">
        <div v-for="s in skillArray" class="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div class="flex flex-col items-center px-4 py-6 rounded-lg ">
            <Icon :name="s.iconify" class="bg-neutral-500 text-primary rounded p-2 mb-3 inline-block" size="3.45rem" />
            <h2 class="title-font font-medium text-3xl text-neutral-500">{{ s.name }}</h2>
            <p v-for="ss in s.category" class="leading-relaxed text-neutral-300">{{ss}}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>