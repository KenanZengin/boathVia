"use client"

import { useCurrentUser } from '@/hooks/client/use-auth';
import * as z from "zod"
import { SettingsSchema } from '@/schemas';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { memo, useState, useTransition } from 'react';
import { IoIosEye } from 'react-icons/io';
import { FaRegEyeSlash } from 'react-icons/fa';
import { UserLanguage } from '@prisma/client';
import { settings } from '@/server/actions/settings';
import { MdError } from 'react-icons/md';

const SettingsForm = () => {


    const user = useCurrentUser();
    
    const [isPending, startTransition] = useTransition();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
    const [formError, setFormError] = useState<string | undefined>()
    
    const { handleSubmit, register, formState: { errors } } = useForm<z.infer<typeof SettingsSchema>>({
        resolver: zodResolver(SettingsSchema),
        defaultValues:{
            name: user?.name || undefined,
            surname: user?.surname || undefined,
            email:user?.email || undefined,
            password: undefined,
            newPassword:undefined,
            phone:user?.phone || undefined,
            lang: user?.lang
        }            
    })

    const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
        
        setFormError(undefined);

        startTransition(()=>{
            settings(values)
                .then((data)=>{
                    
                    if(data.error){
                        setFormError(data.error);
                    }
                })
        })
    }

    

  return (
    <main className="auth-form">
        <div className="auth-form-content">
            <div className="form-title">
                <h3>Personal Information</h3>
            </div>
            <div className="form-wrapper">
                <form  autoComplete="off" onSubmit={handleSubmit(onSubmit)}>         
                    <div className="form-w">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            placeholder={user?.name || ""}
                            className={`${errors.name ? "error-input" : "success-input"}`}
                            {...register("name")} 
                            disabled={isPending} 
                        /> 
                        {errors.name?.message && <p className="form-error-msg">{errors.name.message}</p>}
                    </div>
                    <div className="form-w">
                        <label htmlFor="surname">Last Name</label>
                        <input 
                            type="text" 
                            id="surname" 
                            placeholder={user?.surname || ""}
                            className={`${errors.phone ? "error-input" : "success-input"}`}
                            {...register("surname")} 
                            disabled={isPending} 
                        /> 
                        {errors.surname?.message && <p className="form-error-msg">{errors.surname.message}</p>}
                    </div>
                    <div className="form-w">
                        <label htmlFor="phone">Cell Phone</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            placeholder={user?.phone || ""}
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
                            placeholder={user?.email || ""}
                            className={`${errors.email ? "error-input" : "success-input"}`}
                            {...register("email")} 
                            disabled={isPending} 
                        />
                        {errors.email?.message && <p className="form-error-msg">{errors.email.message}</p>}
                    </div>
                    <div className="form-w">
                        <label htmlFor="password">Password</label>
                        <input 
                            type={showPassword ? "text" : "password"}  
                            id="password"
                            placeholder={"******"}
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
                    <div className="form-w">
                        <label htmlFor="newPassword">New Password</label>
                        <input 
                            type={showNewPassword ? "text" : "password"}  
                            id="newPassword"
                            placeholder={"******"}
                            className={`${errors.newPassword ? "error-input" : "success-input"}`}
                            {...register("newPassword")} 
                            disabled={isPending} 
                        />
                        {showNewPassword 
                            ?  
                                <IoIosEye className={`${errors.newPassword ? "form-er" : "form-ok"}`}   onClick={() => setShowNewPassword(false) } size={25} />
                            :   <FaRegEyeSlash className={`${errors.newPassword  ? "form-er" : "form-ok"}`} onClick={() => setShowNewPassword(true) } size={25} />
                        }
                        {errors.newPassword?.message && <p className="form-error-msg">{errors.newPassword.message}</p>}
                    </div>
                    <div className="form-l">
                       <p>Languages Spoken</p>
                       <div className="lang-op">
                        <label htmlFor="turkish">Turkish</label>
                        <input 
                                type="radio" 
                                id="turkish" 
                                value={UserLanguage.TR} 
                                {...register("lang")}
                                className='custom-radio'
                            />
                        <label htmlFor="englsih">English</label>
                        <input 
                            type="radio" 
                            id="englsih" 
                            value={UserLanguage.ENG} 
                            {...register("lang")} 
                            className='custom-radio'
                        />
                       </div>
                    </div>
                    <button className="send-btn" type="submit" >
                        Save
                    </button>
                </form>
            </div>
        </div>
        {formError &&  <div className="form-message">
            <div className="form-message-content error">
                <p> <MdError size={24}/>{formError}</p>
            </div>
        </div>}
    </main>
  )
}

export default SettingsForm