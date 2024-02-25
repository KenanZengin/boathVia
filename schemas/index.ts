import * as z from "zod"


export const RegisterSchema = z.object({
    name: z.string().min(5,{
        message: "Name is required"
    }),
    surname: z.string().min(5,{
        message: "Surname is required"
    }),
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(6,{
        message: "Minumum 6 characters required"
    }),
    phone: z.string().min(10).max(10,{
        message:"Minumum 10 charecters required for phone number"
    }),
    rights: z.boolean().refine(
        (value) => value === true,
        {message: "You must agree to the terms and conditions"}
    )
})