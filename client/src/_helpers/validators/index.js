import { object, string } from "yup";

export const loginValidationSchema = object({
    email: string().required("Email is required").email("Email is invalid"),
    password: string().required("Password is required"),
});

export const registerValidationSchema = object({
    name: string().required("Name is required").min(3).max(255),
    email: string().required("Email is required").email("Email is invalid"),
    password: string().required("Password is required"),
});

