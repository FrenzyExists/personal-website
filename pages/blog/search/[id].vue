<script setup lang="ts">

definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    const isValid: boolean =  /^[a-zA-Z0-9]$/.test(route.params.id)



    return isValid
  },
  
})

</script>
<template>
    testing by letter
</template>