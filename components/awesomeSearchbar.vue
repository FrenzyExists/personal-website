<script lang="ts" setup>

</script>
<template>
    <div class="search-bar relative flex items-center w-full h-12 rounded bg-base-200 overflow-hidden">
        <div class="grid place-items-center h-full w-12 text-neutral-50">
            <Icon name="mdi:magnify" class="block h-6 w-6" />
        </div>
        <input
            class="caret-dark-accent-100 bg-base-200 text-neutral-100 placeholder-neutral-50 focus:ring-0 border-none h-full w-full outline-none text-sm pr-2 font-semibold"
            type="search" id="" placeholder="Search something..." />
    </div>
</template>


<style>
.search-bar {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3);
}
</style>
