<template>
  <main>
    <awesome-navbar
      :link="[{ 'path': '/', 'name': 'Home' }, { 'path': '/projects', 'name': 'Trinkets' }, { 'path': '/blog', 'name': 'My Blog' }]" />
    <nuxt-layout name="blogger">
      <ContentDoc>
        <template #not-found>
          <not-found />
        </template>
      </ContentDoc>
    </nuxt-layout>
  </main>
</template>