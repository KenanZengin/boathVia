import * as z from "zod"
import { UserLanguage } from "@prisma/client"


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
    ),
})


export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(6,{
        message: "Minumum 6 characters required"
    }),
})


export const CardSchema = z.object({
    cardName: z.string().trim().nonempty(),
    cardNumber: z.string().max(19).transform((value) => value.replace(/\s/g, "")),
    cardMonth: z.string().max(2),
    cardYear: z.string().max(2),
    cardCvv : z.string().max(3)
})

export const PaymentSchema = z.object({
    accepted: z.boolean().refine(
        (value) => value === true,
    )
})


export const ReservationSchema = z.object({
    port: z.string(),
    duration: z.number(),
    people: z.number(),
    time: z.date(),
})


export const SettingsSchema = z.object({
    name: z.optional(z.string()),
    surname: z.optional(z.string()),
    email: z.optional(z.string().email()),
    password: z.optional(z.string()),
    newPassword: z.optional(z.string()),
    phone: z.optional(z.string()),
    lang: z.optional(z.nativeEnum(UserLanguage)),
})
    .refine((data)=>{
        if(data.password && !data.newPassword){
            return false
        }
        return true;
    },{
        message: "New Password is requreid",
        path: ["newPassword"]
    })
    .refine((data)=>{
        if(!data.password && data.newPassword){
            return false
        }

        return true
    },{
        message: "Password is required",
        path: ["password"]
    })







