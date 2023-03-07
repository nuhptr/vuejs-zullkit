<script setup>
import Logo from "./Logo.vue";
import NavigationLinks from "./NavigationLinks.vue";
import AuthButton from "./AuthButton.vue";
</script>

<template>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-10 rounded dark:bg-gray-800">
        <div class="container flex flex-wrap justify-between items-center mx-auto my-2">
            <Logo />
            <NavigationLinks />
            <AuthButton />
        </div>
    </nav>
</template>
