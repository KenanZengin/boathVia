"use client"

import Link from "next/link"
import {useState, useTransition} from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterSchema } from "@/schemas"

import { FaRegEyeSlash } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { record } from "@/server/actions/register"

const RegisterForm = () => {

    const [isPending, startTransition] = useTransition()
    const [showPassword,setShowPassword] = useState<boolean>(false)

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
        
        startTransition(() => {
            record(values)
        });

    }

    
    return (
    <main className="auth-form">
       <div className="auth-form-content">
            <div className="form-title">
                <h3>Register</h3>
            </div>
            <div className="form-wrapper">
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <div className="user-names">
                        <div>  
                            <label htmlFor="name">Name</label>
                            <input type="text"  id="name" placeholder="Enter your name..." {...register("name")}  disabled={isPending}/>
                        </div>                
                        <div>
                            <label htmlFor="surname">Surname</label>
                            <input type="text" id="surname" placeholder="Enter your surname..." {...register("surname")} disabled={isPending}/>
                        </div>
                    </div>
                    <div className="form-w">
                        <label htmlFor="phone">Cell Phone</label>
                        <input type="tel" id="phone" placeholder="enter your phone number..." maxLength={10} minLength={10} {...register("phone")} disabled={isPending}/> 
                    </div>
                    <div className="form-w">
                        <label htmlFor="email">Email</label>
                        <input type="email"  id="email" placeholder="Enter your email..." {...register("email")} disabled={isPending}/>
                    </div>
                    <div className="form-w">
                        <label htmlFor="password">password</label>
                        <input type={showPassword ? "text" : "password"}  id="email" placeholder="Enter your password..." {...register("password")} disabled={isPending}/>
                        {showPassword ?  <IoIosEye onClick={() => setShowPassword(false) } size={25} />: <FaRegEyeSlash onClick={() => setShowPassword(true) } size={25} />}
                    </div>
                    <div className="form-v">
                        <input type="checkbox" id="rights" {...register("rights")} disabled={isPending}/> 
                        <label htmlFor="phone">I have read and accept <Link href={"/"}>the terms of use</Link></label><br />
                    </div>
                    <button type="submit" disabled={isPending}>Register</button>
                </form>
            </div>
            <div className="already">Login <Link href={"/"}>Already a member?</Link></div>
       </div>
    </main>
    )
}

export default RegisterForm