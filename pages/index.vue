<script lang="ts" setup></script>

<template>
  <AwesomeNavbar :link="[{ 'name': 'Home', 'path': '/' }, { 'name': 'Trinkets', 'path': 'projects' },{'path': '/blog', 'name': 'My Blog'}]" />
  <div >
    <div>
      <!-- hero -->
      <AwesomeHero />
      <!-- Skills -->
      <Skills  class="bg-accent-1" />
    </div>

    <div>
      <!-- About -->
      <AwesomeAbout id="about" />
    </div>
    <div class="">
      <AwesomeProjects />
    </div>
    <div class="bg-neutral-3 pb-20">
      <AwesomeContactMe id="contact"  />
    </div>
  </div>
  <AwesomeFooter />
</template>

