import * as Yup from "yup";

export const LoginValidation = Yup.object({
    email: Yup.string().min(8).required("Enter email"),
    password : Yup.string().min(8).required("Enter your password"),
});