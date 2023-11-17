<script lang="ts" setup></script>

<template>
  <div>
    <AwesomeNavbar :link="[{'path': '/', 'name': 'Home'}, {'path': '/journal', 'name': 'Journal'}, {'path': '/projects', 'name': 'Tinkers'}]" />
    <slot />
    <AwesomeFooter/>
  </div>
</template>
