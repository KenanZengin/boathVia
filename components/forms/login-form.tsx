"use client"

import Link from "next/link"
import {useEffect, useState, useTransition} from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema } from "@/schemas"
import { login } from "@/server/actions/login"

import { FaRegEyeSlash } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import FormError from "../form-error"
import FormSuccess from "../form-success"
import { useRouter } from "next/navigation"
import { MdError } from "react-icons/md"


const LoginForm = () => {

    const [isPending, startTransition] = useTransition();
    const [showPassword,setShowPassword] = useState<boolean>(false);
    const [formState, setFormState] = useState<boolean>(false);
    const [formError, setFormError] = useState<string | undefined>()
    const [formSuccess, setFormSuccess] = useState<string | undefined>()

    const { handleSubmit, register, formState: {errors, isSubmitting}, reset } = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues:{
            email: "",
            password: "",
        }
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {

        console.log("values",values);
        
        setFormError(undefined);
        setFormState(false);

        startTransition(() => {
            login(values)
                .then((data)=>{
                    if(data?.error){
                        setFormError(data?.error);
                    }
                    if(data?.success){
                        setFormState(true)
                    }
                })
        });
        
    };

    
    

    
    return (
    <main className="auth-form">
       <div className="auth-form-content">
            <div className="form-title">
                <h3>Login</h3>
            </div>
            <div className="form-wrapper">
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                   
                    
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
                   
                    <button className="send-btn" type="submit" disabled={isPending}>
                      {formState ? "Login process successful" : "Login"}  
                    </button>
                    
                </form>
            </div>
            <div className="already">Aren&apos;t you a member? <Link href={"/auth/register"}>Register?</Link></div>
            <div className="reset-pass">Did you forget your password? <Link href={"/"}>Reset Password</Link></div>
       </div>
       {formError &&  <div className="form-message">
            <div className="form-message-content error">
                <p> <MdError size={24}/>{formError}</p>
            </div>
        </div>}
    </main>
    )
}

export default LoginForm