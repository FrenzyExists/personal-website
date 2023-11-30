<script lang="ts" setup>

const updateQuery = defineEmits<{
  (event: 'update', query: string): void
}>()

const query = ref('');

const update = () => {
    updateQuery('update', query.value)    
}

</script>
<template>
    <div class="search-bar relative flex items-center w-full h-12 rounded bg-neutral-1 overflow-hidden">
        <div class="grid place-items-center h-full w-12 text-accent-1">
            <Icon name="mdi:magnify" class="block h-6 w-6" />
        </div>
        <input
            @input="update"
            v-model="query"
            class="caret-dark-accent-100 bg-neutral-1 text-accent-1 placeholder-neutral-3 focus:ring-0 border-none h-full w-full outline-none text-sm pr-2 font-semibold"
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
