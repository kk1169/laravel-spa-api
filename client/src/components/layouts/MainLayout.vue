<template>
    <Navbar />
    <main class="container py-6">
        <RouterView />
    </main>
</template>
<script>
import { RouterView } from 'vue-router'
import Navbar from './Navbar.vue'
export default {
    name: 'MainLayout',
    components: {
        RouterView,
        Navbar
    }
}
</script>
<style></style>
