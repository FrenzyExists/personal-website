<script lang="ts" setup></script>

<template>
  <AwesomeNavbar :link="[{ 'name': 'Home', 'path': '/' }, { 'name': 'Trinkets', 'path': 'projects' },]" />
  <div class="pb-20">
    <div>
      <!-- hero -->
      <AwesomeHero />
      <!-- Skills -->
      <Skills />
    </div>

    <div>
      <!-- About -->
      <AwesomeAbout id="about" />
    </div>
    <div class="">
      <AwesomeProjects />
    </div>
    <div>
      <AwesomeContactMe id="contact" />
    </div>
  </div>
  <AwesomeFooter />
</template>

