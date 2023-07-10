import { defineStore } from 'pinia'
import {
    csrfCookie,
    login,
    register,
    logout,
    getUser
} from "../http/auth-api";

export const useAuthStore = defineStore('userStore', {
    state: () => ({
        user: null,
        storeError: null
    }),
    getters: {
        isLoggedIn: (state) => { return !!state.user }
    },
    actions: {
        async fetchUser() {
            try {
                const { data } = await getUser();
                this.user = data;
            } catch (error) {
                this.user = null;
            }
        },

        async handleLogin(credentials) {
            await csrfCookie()
            try {
                await login(credentials);
                await this.fetchUser();
                this.storeError = null;
            } catch (error) {
                if (error.response && error.response.data) {
                    this.storeError = error.response.data.errors
                }
            }
        },

        async handleRegister(newUser) {

            try {
                await register(newUser);
                await this.handleLogin({
                    email: newUser.email,
                    password: newUser.password
                })
                this.storeError = null;
            } catch (error) {
                if (error.response && error.response.data) {
                    this.storeError = error.response.data.errors
                }
            }
        },

        async handleLogout() {
            await logout();
            this.user = null
        },
    }
})
