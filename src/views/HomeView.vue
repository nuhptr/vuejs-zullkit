<script setup>
import Hero from "../components/Hero.vue";
</script>

<template>
    <!-- Hero -->
    <Hero />

    <!-- Categories -->
    <div class="container px-4 mx-auto my-16 md:px-12">
        <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">Top Categories</h2>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
                <div class="overflow-hidden border border-gray-200 rounded-xl">
                    <RouterLink to="details.html">
                        <div class="m-4 overflow-hidden rounded-xl">
                            <img
                                alt="Placeholder"
                                class="block w-full h-auto"
                                src="@/assets/img/categories-1.jpg" />
                        </div>
                    </RouterLink>

                    <header class="px-4 mb-4 leading-tight">
                        <h1 class="text-lg">
                            <RouterLink
                                class="font-semibold text-black no-underline hover:underline"
                                to="#">
                                Mobile UI Kit
                            </RouterLink>
                        </h1>
                        <span class="block text-sm font-light text-gray-500 no-underline">
                            731 items
                        </span>
                    </header>
                </div>
            </div>
            <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
                <div class="overflow-hidden border border-gray-200 rounded-xl">
                    <RouterLink to="details.html">
                        <div class="m-4 overflow-hidden rounded-xl">
                            <img
                                alt="Placeholder"
                                class="block w-full h-auto"
                                src="@/assets/img/categories-2.jpg" />
                        </div>
                    </RouterLink>

                    <header class="px-4 mb-4 leading-tight">
                        <h1 class="text-lg">
                            <RouterLink
                                class="font-semibold text-black no-underline hover:underline"
                                to="#">
                                Fonts
                            </RouterLink>
                        </h1>
                        <span class="block text-sm font-light text-gray-500 no-underline">
                            657 items
                        </span>
                    </header>
                </div>
            </div>
            <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
                <div class="overflow-hidden border border-gray-200 rounded-xl">
                    <RouterLink to="details.html">
                        <div class="m-4 overflow-hidden rounded-xl">
                            <img
                                alt="Placeholder"
                                class="block w-full h-auto"
                                src="@/assets/img/categories-3.jpg" />
                        </div>
                    </RouterLink>

                    <header class="px-4 mb-4 leading-tight">
                        <h1 class="text-lg">
                            <RouterLink
                                class="font-semibold text-black no-underline hover:underline"
                                to="#">
                                Icon Set
                            </RouterLink>
                        </h1>
                        <span class="block text-sm font-light text-gray-500 no-underline">
                            83,559 items
                        </span>
                    </header>
                </div>
            </div>
            <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
                <div class="overflow-hidden border border-gray-200 rounded-xl">
                    <RouterLink to="details.html">
                        <div class="m-4 overflow-hidden rounded-xl">
                            <img
                                alt="Placeholder"
                                class="block w-full h-auto"
                                src="@/assets/img/categories-4.jpg" />
                        </div>
                    </RouterLink>

                    <header class="px-4 mb-4 leading-tight">
                        <h1 class="text-lg">
                            <RouterLink
                                class="font-semibold text-black no-underline hover:underline"
                                to="#">
                                Website UI Kit
                            </RouterLink>
                        </h1>
                        <span class="block text-sm font-light text-gray-500 no-underline">
                            4,500 items
                        </span>
                    </header>
                </div>
            </div>
        </div>
    </div>

    <!-- Items -->
    <div class="container px-4 mx-auto my-16 md:px-12">
        <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Items</h2>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <div class="overflow-hidden border border-gray-200 rounded-xl">
                    <RouterLink to="details.html">
                        <div class="m-4 overflow-hidden rounded-xl">
                            <img
                                alt="Placeholder"
                                class="block w-full h-auto"
                                src="@/assets/img/items-1.jpg" />
                        </div>
                    </RouterLink>

                    <header class="px-4 mb-4 leading-tight">
                        <h1 class="text-lg">
                            <RouterLink
                                class="font-semibold text-black no-underline hover:underline"
                                to="#">
                                Mobile UI Kit
                            </RouterLink>
                        </h1>
                        <span class="block text-sm font-light text-gray-500 no-underline">
                            Mobile UI Kit
                        </span>
                    </header>
                </div>
            </div>
            <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <div class="overflow-hidden border border-gray-200 rounded-xl">
                    <RouterLink to="details.html">
                        <div class="m-4 overflow-hidden rounded-xl">
                            <img
                                alt="Placeholder"
                                class="block w-full h-auto"
                                src="@/assets/img/items-2.jpg" />
                        </div>
                    </RouterLink>

                    <header class="px-4 mb-4 leading-tight">
                        <h1 class="text-lg">
                            <RouterLink
                                class="font-semibold text-black no-underline hover:underline"
                                to="#">
                                Online Doctor Consultation
                            </RouterLink>
                        </h1>
                        <span class="block text-sm font-light text-gray-500 no-underline">
                            Website UI Kit
                        </span>
                    </header>
                </div>
            </div>
            <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <div class="overflow-hidden border border-gray-200 rounded-xl">
                    <RouterLink to="details.html">
                        <div class="m-4 overflow-hidden rounded-xl">
                            <img
                                alt="Placeholder"
                                class="block w-full h-auto"
                                src="@/assets/img/items-3.jpg" />
                        </div>
                    </RouterLink>

                    <header class="px-4 mb-4 leading-tight">
                        <h1 class="text-lg">
                            <RouterLink
                                class="font-semibold text-black no-underline hover:underline"
                                to="#">
                                Banking Crypto
                            </RouterLink>
                        </h1>
                        <span class="block text-sm font-light text-gray-500 no-underline">
                            Mobile UI Kit
                        </span>
                    </header>
                </div>
            </div>
        </div>
    </div>
</template>
