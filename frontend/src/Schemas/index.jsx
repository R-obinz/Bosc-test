import * as Yup from "yup";

export const SignUpSchema = Yup.object({
    firstName:Yup.string().min(3).max(10).matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field").required("Please enter your firstname"),
    lastName:Yup.string().min(3).max(10).matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field").required("please enter your lastname"),
    userName:Yup.string().min(3).max(7).required("please enter a valid username"),
    email: Yup.string().email().required("please enter valid email"),
    password: Yup.string().min(4).required("please enter your password"),
    confirmPassword: Yup.string().required().oneOf([Yup.ref("password"),null],"Password must match")

});

export const LoginSchema = Yup.object({
    email: Yup.string().email().required("please enter valid email"),
    password: Yup.string().min(4).required("please enter your password"),

});