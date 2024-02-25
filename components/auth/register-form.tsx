"use client"

import {useState, useTransition} from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterSchema } from "@/schemas"
import Link from "next/link"




const RegisterForm = () => {

    const { handleSubmit, register, formState: {errors, isValid}, } = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues:{
            name: "",
            surname: "",
            email: "",
            password: "",
            phone: "",
            rights: false
        }
    })

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        console.log(values);
    }

    
    return (
    <main className="auth-form">
        <div className="form-title">
            <h3>Register</h3>
        </div>
        <div className="form-wrapper">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="user-names">
                    <div>  
                        <label htmlFor="name">Name</label>
                        <input type="text"  id="name" placeholder="enter name" {...register("name")}  />
                    </div>                
                    <div>
                        <label htmlFor="surname">Surname</label>
                        <input type="text" id="surname" placeholder="enter surname" {...register("surname")}/>
                    </div>
                </div>
                <div className="form-w">
                    <label htmlFor="email">Email</label>
                    <input type="email"  id="email" placeholder="enter email" {...register("email")}/>
                </div>
                <div className="form-w">
                    <label htmlFor="password">password</label>
                    <input type="password"  id="email" placeholder="enter password" {...register("password")}/>
                </div>
                <div className="form-w">
                    <label htmlFor="phone">Cell Phone</label>
                    <input type="tel" id="phone" placeholder="enter number" maxLength={10} minLength={10} {...register("phone")}/> 
                </div>
                <div className="form-v">
                    <input type="checkbox" id="rights" {...register("rights")}/> 
                    <label htmlFor="phone">I have read and accept <Link href={"/"}>the terms of use</Link></label><br />
                    {errors.rights?.message}
                </div>
                <button type="submit">send</button>
            </form>
        </div>
    </main>
    )
}

export default RegisterForm