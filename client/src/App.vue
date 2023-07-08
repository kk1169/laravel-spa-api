<script setup>
import Navbar from "./components/layouts/Navbar.vue";
import { RouterView } from "vue-router";
</script>

<template>
    <Navbar />
    <main class="container mt-4">
        <RouterView />
    </main>
</template>

<style></style>
