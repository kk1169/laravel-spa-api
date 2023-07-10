<template lang="">
    <div class="app-dropdown">
        <Avatar
            label="U"
            class="mr-2 app-avatar cursor-pointer select-none"
            @click="showDropdow = !showDropdow"
        />
        <div class="app-dropdown-menu auth-dropdown" v-if="showDropdow">
            <div class="flex px-3 py-2">
                <strong class="uppercase">Kamal Kumar</strong>
            </div>
            <RouterLink to="tasks">Dashboard</RouterLink>
            <RouterLink to="" @click="logout">Logout</RouterLink>
        </div>
    </div>
</template>
<script>
import Avatar from "primevue/avatar";
import { RouterLink, useRouter } from "vue-router";
import { useAuthStore } from "../../store/auth.store";
export default {
    components: {
        Avatar,
        RouterLink,
    },
    data() {
        return {
            showDropdow: false,
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
<style lang=""></style>
