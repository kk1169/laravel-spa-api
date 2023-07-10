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
                    v-if="store.isLoggedIn"
                    to="/tasks"
                    class="px-6 py-3 uppercase font-semibold text-black hover:text-primary-600"
                >
                    Tasks
                </RouterLink>
                <RouterLink
                    to="/login"
                    class="px-6 py-3 uppercase font-semibold text-black hover:text-primary-600"
                    v-if="!store.isLoggedIn"
                >
                    Login
                </RouterLink>
                <AuthDropdown v-if="store.isLoggedIn" />

                <!-- <RouterLink
                    to=""
                    class="px-6 py-3 uppercase font-semibold text-black hover:text-primary-600"
                    v-if="store.isLoggedIn"
                    @click="logout"
                >
                    Logout
                </RouterLink> -->
            </nav>
        </div>
    </header>
</template>
<script>
import { RouterLink, useRouter } from "vue-router";
import { useAuthStore } from "../../store/auth.store";
import AuthDropdown from "./AuthDropdown.vue";

export default {
    name: "Navbar",
    components: {
        RouterLink,
        AuthDropdown,
    },
    data() {
        return {
            router: useRouter(),
            store: useAuthStore(),
        };
    },
    methods: {
        logout: async function () {
            await this.store.handleLogout();
            this.router.push({ name: "LoginPage" });
        },
    },
};
</script>
<style></style>
