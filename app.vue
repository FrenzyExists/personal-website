<script setup lang="ts">

// Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
// const {
//   data: { login },
// } = await octokit.rest.users.getAuthenticated();
// console.log("Hello, %s", octokit.rest.users.getAuthenticated())

</script>
<template>
  <div class="bg-base-400 text-neutral-100  overflow-auto min-h-full h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
