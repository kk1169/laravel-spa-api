<template>
    <header class="flex py-5 shadow-sm bg-white">
        <div class="container flex justify-between items-center">
            <div>
                <h3 class="font-bold uppercase text-primary-600">
                    Todo Application
                </h3>
            </div>
            <nav>
                <RouterLink
                    to="/"
                    class="px-6 py-3 uppercase font-semibold text-black hover:text-primary-600"
                >
                    Home
                </RouterLink>
                <RouterLink
                    to="/about"
                    class="px-6 py-3 uppercase font-semibold text-black hover:text-primary-600"
                >
                    About
                </RouterLink>
                <RouterLink
                    to="/tasks"
                    class="px-6 py-3 uppercase font-semibold text-black hover:text-primary-600"
                >
                    Tasks
                </RouterLink>
            </nav>
        </div>
    </header>
</template>
<script>
import { RouterLink } from "vue-router";
export default {
    name: "Navbar",
    components: {
        RouterLink,
    },
};
</script>
<style></style>
