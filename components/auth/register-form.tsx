"use client"

import {useState, useTransition} from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterSchema } from "@/schemas"




const RegisterForm = () => {

    const { handleSubmit, register, formState: {errors, isValid}, } = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues:{
            name: "",
            surname: "",
            email: "",
            password: "",
            phone: "",
        }
    })

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        console.log(values);
    }

    
    return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text"  id="name" placeholder="enter name" {...register("name")}  />
            {errors?.name && <p>{errors.name.message}</p>}
            <br />
            <input type="text" id="surname" placeholder="enter surname" {...register("surname")}/><br />
            <input type="email"  id="email" placeholder="enter email" {...register("email")}/><br />
            <input type="password"  id="email" placeholder="enter password" {...register("password")}/><br />
            <input type="tel" id="phone" placeholder="enter number" maxLength={10} minLength={10} {...register("phone")}/> <br />
            <button type="submit">send</button>
        </form>
    </div>
    )
}

export default RegisterForm