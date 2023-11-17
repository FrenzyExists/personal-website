<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of letters
    return /^[a-z]$/.test(route.params.id)
  }
})
</script>


<template>
Here i show my projects by letter, and retrieve said letter btw
<span class="font-bold">{{ $route.params.id }}</span>

</template>