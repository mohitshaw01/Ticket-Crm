import * as Yup from "yup";

export const LoginValidation = Yup.object({
    name : Yup.string().min(6).required("Enter your name"),
    email: Yup.string().min(8).required("Enter email"),
    password : Yup.string().min(8).required("Enter your password"),
});