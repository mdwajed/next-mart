import * as z from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(2, { message: "Name is Required" }),
  email: z.string().email({ message: "Email is Required" }),
  password: z
    .string()
    .min(6, { message: "Password must be Minimum 6 Character" }),
});
export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is Required" }),
  password: z
    .string()
    .min(6, { message: "Password must be Minimum 6 Character" }),
});
