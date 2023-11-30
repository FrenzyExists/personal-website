<script setup lang="ts">

// Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
// const {
//   data: { login },
// } = await octokit.rest.users.getAuthenticated();
// console.log("Hello, %s", octokit.rest.users.getAuthenticated())

</script>
<template>
  <div class="text-base-1 overflow-auto min-h-full h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
body{
  @apply bg-neutral-1;
}
</style>