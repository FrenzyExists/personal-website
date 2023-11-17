<script lang="ts">
export default {
  name: 'foot'
}
</script>

<template>
    <footer class="bg-base-300">
      <div class="relative -mb-3">
        <svg
          class="text-base-300 absolute top-0 w-full h-6 sm:-mt-10 sm:h-16 m-auto"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          ></path>
        </svg>
      </div>
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col z-10 relative">
        <a
          class="font-bold flex title-font items-center md:justify-start justify-center"
        >
          <icon name="uil:bolt" 
          class="bg-neutral-100 text-dark-accent-200 mr-2 block p-2 rounded"
          size="2.75rem"/>
          <span class="ml-2 text-xl">Pikachu's</span>
        </a>
        <p
          class=" sm:border-accent-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:py-2 sm:mt-0 mt-4"
        >
          © {{ new Date().getFullYear() }}
          Angel Garcia —
          <a
            href="https://twitter.com/not__pikachu"
            class="text-dark-accent-100 hover:text-dark-accent-200 bg-neutral-200 p-1 inline-block font-semibold rounded ml-1"
            rel="noopener noreferrer"
            target="_blank"
            >@not__pikachu</a
          >
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="https://github.com/FrenzyExists"
          class="text-neutral-100 hover:text-neutral-200 ml-3 hover:opacity-80">
            <Icon name="uil:github-alt" class="w-7 h-7"/>
          </a>
          <a href="https://www.hackerrank.com/profile/frenzyexists"
          class="text-neutral-100 hover:text-neutral-200 ml-3 hover:opacity-80">
            <Icon name="cib:hackerrank" class="w-7 h-7"/>
          </a>
          <a href="https://www.linkedin.com/in/angel-luis-garcia/"
          class="text-neutral-100 hover:text-neutral-200 ml-3 hover:opacity-80">
            <Icon name="uil:linkedin-alt" class="w-7 h-7"/>
          </a>
        </span>
      </div>
    </footer>
  </template>