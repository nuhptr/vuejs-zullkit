<script setup>
const props = defineProps({
    title: String,
    description: String,
    image: String,
});
</script>

<template>
    <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <div class="overflow-hidden border border-gray-200 rounded-xl">
            <RouterLink to="#">
                <div class="m-4 overflow-hidden rounded-xl">
                    <img
                        :alt="props.title"
                        class="block w-full h-auto"
                        :src="'/src/assets/img/' + props.image" />
                </div>
            </RouterLink>

            <header class="px-4 mb-4 leading-tight">
                <h1 class="text-lg">
                    <RouterLink
                        class="font-semibold text-black no-underline hover:underline"
                        to="#">
                        {{ props.title }}
                    </RouterLink>
                </h1>
                <span class="block text-sm font-light text-gray-500 no-underline">
                    {{ props.description }}
                </span>
            </header>
        </div>
    </div>
</template>
