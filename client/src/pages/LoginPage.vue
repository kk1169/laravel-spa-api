<template lang="">
    <div class="card flex w-full justify-center">
        <Card class="shadow" style="width: 25em">
            <template #title> Login </template>
            <template #subtitle> Please provide login credentials </template>
            <template #content>
                <Message severity="error" v-if="storeError" :closable="false">{{
                    storeError.email[0]
                }}</Message>
                <form @submit.prevent="onSubmitForm">
                    <div class="mb-3">
                        <label class="form-label"
                            >Email Address <span>*</span></label
                        >
                        <InputText
                            type="email"
                            name="email"
                            :class="{ 'p-invalid': errors.email }"
                            v-model="email"
                            placeholder="Email Address"
                        />
                        <div class="text-red-600 text-sm font-semibold mt-2">
                            {{ errors.email }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label"
                            >Password <span>*</span></label
                        >
                        <InputText
                            type="password"
                            name="password"
                            v-model="password"
                            :class="{ 'p-invalid': errors.password }"
                            placeholder="Password"
                            autocomplete="off"
                        />
                        <div class="text-red-600 text-sm font-semibold mt-2">
                            {{ errors.password }}
                        </div>
                    </div>
                    <Button type="submit" icon="pi pi-lock" label="Login" />
                </form>
            </template>
            <template #footer>
                <p>
                    Don't have an acount?
                    <RouterLink
                        to="register"
                        class="text-primary-600 hover:underline"
                        >Register</RouterLink
                    >
                </p>
            </template>
        </Card>
    </div>
</template>
<script>
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { RouterLink, useRouter } from "vue-router";
import { useAuthStore } from "../store/auth.store";
import { storeToRefs } from "pinia";
import { useField, useForm } from "vee-validate";
import Message from "primevue/message";

import { loginValidationSchema } from "../_helpers/validators";

export default {
    name: "LoginPage",
    components: {
        Card,
        Button,
        InputText,
        RouterLink,
        Message,
    },
    setup() {
        const store = useAuthStore();
        const router = useRouter();
        const { storeError } = storeToRefs(store);

        const { handleSubmit, handleReset, errors } = useForm({
            validationSchema: loginValidationSchema,
        });

        const { value: email } = useField("email", loginValidationSchema);
        const { value: password } = useField("password", loginValidationSchema);

        const onSubmitForm = handleSubmit(async (values) => {
            console.log(errors);
            await store.handleLogin(values);
            if (store.isLoggedIn) {
                router.push({ name: "TaskPage" });
            }
        });

        return {
            RouterLink,
            onSubmitForm,
            email,
            password,
            errors,
            storeError,
        };
    },
};
</script>
<style lang=""></style>
