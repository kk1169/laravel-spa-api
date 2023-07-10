<template lang="">
    <div class="card flex w-full justify-center">
        <Card class="shadow" style="width: 25em">
            <template #title> Register </template>
            <template #subtitle> Please add your details </template>
            <template #content>
                <Message severity="error" v-if="storeError" :closable="false">{{
                    storeError.email[0]
                }}</Message>
                <form @submit.prevent="onSubmitForm">
                    <div class="mb-3">
                        <label class="form-label"
                            >Your Name <span>*</span></label
                        >
                        <InputText
                            type="text"
                            v-model="name"
                            :class="{ 'p-invalid': errors.name }"
                            placeholder="Your Name"
                        />
                        <div class="text-red-600 text-sm font-semibold mt-2">
                            {{ errors.name }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label"
                            >Email Address <span>*</span></label
                        >
                        <InputText
                            type="email"
                            v-model="email"
                            :class="{ 'p-invalid': errors.email }"
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
                            v-model="password"
                            :class="{ 'p-invalid': errors.password }"
                            placeholder="Password"
                            autocomplete="off"
                        />
                        <div class="text-red-600 text-sm font-semibold mt-2">
                            {{ errors.password }}
                        </div>
                    </div>
                    <Button type="submit" icon="pi pi-lock" label="Register" />
                </form>
            </template>
            <template #footer>
                <p>
                    Have an account?
                    <RouterLink
                        to="login"
                        class="text-primary-600 hover:underline"
                        >Login</RouterLink
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
import { RouterLink } from "vue-router";
import { useAuthStore } from "../store/auth.store";
import { registerValidationSchema } from "../_helpers/validators";
import { storeToRefs } from "pinia";
import { useField, useForm } from "vee-validate";
import Message from "primevue/message";

export default {
    name: "RegisterPage",
    components: {
        Card,
        Button,
        InputText,
        RouterLink,
        Message,
    },
    setup() {
        const store = useAuthStore();
        const { storeError } = storeToRefs(store);

        const { handleSubmit, handleReset, errors } = useForm({
            validationSchema: registerValidationSchema,
        });

        const { value: name } = useField("name", registerValidationSchema);
        const { value: email } = useField("email", registerValidationSchema);
        const { value: password } = useField(
            "password",
            registerValidationSchema
        );

        const onSubmitForm = handleSubmit(async (values) => {
            await store.handleRegister(values);
        });

        return {
            RouterLink,
            onSubmitForm,
            errors,
            storeError,
            name,
            email,
            password,
        };
    },
};
</script>
<style lang=""></style>
