"use client"

import Link from "next/link"
import {useEffect, useState, useTransition} from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterSchema } from "@/schemas"
import { record } from "@/server/actions/register"

import { FaRegEyeSlash } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import FormError from "../form-error"


const RegisterForm = () => {

    const [isPending, startTransition] = useTransition();
    const [showPassword,setShowPassword] = useState<boolean>(false);
    const [formState, setFormState] = useState<boolean>(false);
    const [formError, setFormError] = useState<string | undefined>("")

    const { handleSubmit, register, formState: {errors, isValid}, } = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues:{
            name: "111111",
            surname: "111111",
            email: "",
            password: "1111111111",
            phone: "1111111111",
            rights: false
        }
    });

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {

        setFormError("");

        startTransition(() => {
            record(values)
                .then((data)=>{                    
                    if(data.success){
                        setFormState(true);
                    }
                    if(data.error){
                        setFormError(data.error);
                    }
                })       
            }
        );
    };

    

    
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
                            <input 
                                type="text"  
                                id="name" 
                                placeholder="Enter your name..." 
                                className={`${errors.name ? "error-input" : "success-input"}`}
                                {...register("name")}  
                                disabled={isPending} 
                            />
                            {errors.name?.message && <p className="form-error-msg">{errors.name.message}</p>}
                        </div>                
                        <div>
                            <label htmlFor="surname">Surname</label>
                            <input 
                                type="text" 
                                id="surname" 
                                placeholder="Enter your surname..." 
                                className={`${errors.surname ? "error-input" : "success-input"}`}
                                {...register("surname")} 
                                disabled={isPending} 
                            />
                            {errors.surname?.message && <p className="form-error-msg">{errors.surname.message}</p>}
                        </div>
                    </div>
                    <div className="form-w">
                        <label htmlFor="phone">Cell Phone</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            placeholder="enter your phone number..." 
                            className={`${errors.phone ? "error-input" : "success-input"}`}
                            maxLength={10}
                            minLength={10} 
                            {...register("phone")} 
                            disabled={isPending} 
                        /> 
                        {errors.phone?.message && <p className="form-error-msg">{errors.phone.message}</p>}
                    </div>
                    <div className="form-w">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"  
                            id="email" 
                            placeholder="Enter your email..." 
                            className={`${errors.email ? "error-input" : "success-input"}`}
                            {...register("email")} 
                            disabled={isPending} 
                        />
                        {errors.email?.message && <p className="form-error-msg">{errors.email.message}</p>}
                    </div>
                    <div className="form-w">
                        <label htmlFor="password">password</label>
                        <input 
                            type={showPassword ? "text" : "password"}  
                            id="password"
                            placeholder="Enter your password..." 
                            className={`${errors.password ? "error-input" : "success-input"}`}
                            {...register("password")} 
                            disabled={isPending} 
                        />
                        {showPassword 
                            ?  
                                <IoIosEye className={`${errors.password ? "form-er" : "form-ok"}`}   onClick={() => setShowPassword(false) } size={25} />
                            :   <FaRegEyeSlash className={`${errors.password  ? "form-er" : "form-ok"}`} onClick={() => setShowPassword(true) } size={25} />
                        }
                        {errors.password?.message && <p className="form-error-msg">{errors.password.message}</p>}
                    </div>
                    <div className="form-v">
                        <input 
                            type="checkbox" 
                            id="rights" 
                            {...register("rights")} 
                            disabled={isPending}
                        /> 
                        <label htmlFor="phone">I have read and accept <Link href={"/"}>the terms of use</Link></label><br />
                        {errors.rights?.message && <p className="form-error-msg">{errors.rights.message}</p>}
                    </div>
                    <button type="submit" disabled={isPending}>
                        {formState ?"Registration completed" :"Register"}
                    </button>
                    <FormError message={formError} />
                </form>
            </div>
            <div className="already">Login <Link href={"/"}>Already a member?</Link></div>
       </div>
    </main>
    )
}

export default RegisterForm





