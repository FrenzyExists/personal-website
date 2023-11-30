<script lang="ts" setup></script>

<template>
  <div class="bg-neutral-2">
    <AwesomeNavbar :link="[{'path': '/', 'name': 'Home'}, {'path': '/projects', 'name': 'Trinkets'}, {'path': '/blog', 'name': 'My Blog'} ]" />
    <slot />
    <AwesomeFooter/>
  </div>
</template>
