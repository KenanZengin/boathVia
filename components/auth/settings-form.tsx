"use client"

import { useCurrentUser } from '@/hooks/client/use-auth';
import * as z from "zod"
import { SettingsSchema } from '@/schemas';
import { useForm } from 'react-hook-form';
import LogOutButton from '@/components/auth/logout-button';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';

const SettingsForm = () => {
    const user = useCurrentUser()

    const form = useForm<z.infer<typeof SettingsSchema>>({
        resolver: zodResolver(SettingsSchema),
        defaultValues:{
            name: user?.name || undefined,
            surname: user?.surname || undefined,
            email:user?.email || undefined,
            password: undefined,
            newPassword:undefined,
            phone:user?.phone || undefined,
        }            
    })

  return (
    <main className="auth-form">
        <div className="auth-form-content">
            <div className="form-title">
                <h3>Personal Information</h3>
            </div>
            <div className="form-wrapper">
                <form  autoComplete="off">         
                    <div className="form-w">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            className='success-input'
                            placeholder={user?.name || ""}
                            // className={`${errors.phone ? "error-input" : "success-input"}`}
                            // {...register("phone")} 
                            // disabled={isPending} 
                        /> 
                        {/* {errors.name?.message && <p className="form-error-msg">{errors.name.message}</p>} */}
                    </div>
                    <div className="form-w">
                        <label htmlFor="surname">Last Name</label>
                        <input 
                            type="text" 
                            id="surname" 
                            className='success-input'
                            placeholder={user?.surname || ""}
                            // className={`${errors.phone ? "error-input" : "success-input"}`}
                            
                            // {...register("surname")} 
                            // disabled={isPending} 
                        /> 
                        {/* {errors.surname?.message && <p className="form-error-msg">{errors.surname.message}</p>} */}
                    </div>
                    <div className="form-w">
                        <label htmlFor="phone">Cell Phone</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            className='success-input'
                            placeholder={user?.phone || ""}
                            // className={`${errors.phone ? "error-input" : "success-input"}`}
                            // maxLength={10}
                            // minLength={10} 
                            // {...register("phone")} 
                            // disabled={isPending} 
                        /> 
                        {/* {errors.phone?.message && <p className="form-error-msg">{errors.phone.message}</p>} */}
                    </div>
                    <div className="form-w">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"  
                            id="email" 
                            className='success-input'
                            placeholder={user?.email || ""}
                            // className={`${errors.email ? "error-input" : "success-input"}`}
                            // {...register("email")} 
                            // disabled={isPending} 
                        />
                        {/* {errors.email?.message && <p className="form-error-msg">{errors.email.message}</p>} */}
                    </div>
                    <div className="form-w">
                        <label htmlFor="password">Password</label>
                        <input 
                            type={"password"}  
                            id="password"
                            className='success-input' 
                            placeholder={"******"}
                            // className={`${errors.password ? "error-input" : "success-input"}`}
                            // {...register("password")} 
                            // disabled={isPending} 
                        />
                        {/* {showPassword 
                            ?  
                                <IoIosEye className={`${errors.password ? "form-er" : "form-ok"}`}   onClick={() => setShowPassword(false) } size={25} />
                            :   <FaRegEyeSlash className={`${errors.password  ? "form-er" : "form-ok"}`} onClick={() => setShowPassword(true) } size={25} />
                        }
                        {errors.password?.message && <p className="form-error-msg">{errors.password.message}</p>} */}
                    </div>
                    <div className="form-w">
                        <label htmlFor="password">New Password</label>
                        <input 
                            type={"password"}  
                            id="newPassword"
                            className='success-input' 
                            placeholder={"******"}
                            // className={`${errors.newPassword ? "error-input" : "success-input"}`}
                            // {...register("password")} 
                            // disabled={isPending} 
                        />
                        {/* {showPassword 
                            ?  
                                <IoIosEye className={`${errors.newPassword ? "form-er" : "form-ok"}`}   onClick={() => setShowPassword(false) } size={25} />
                            :   <FaRegEyeSlash className={`${errors.newPassword  ? "form-er" : "form-ok"}`} onClick={() => setShowPassword(true) } size={25} />
                        }
                        {errors.newPassword?.message && <p className="form-error-msg">{errors.newPassword.message}</p>} */}
                    </div>
                    <div className="form-w">
                       <p>Languages Spoken</p>
                       <label htmlFor="turkish">Turkish</label>
                       <input type="radio" name="languages" id="turkish" value={"Turkish"} />
                       <label htmlFor="englsih">English</label>
                       <input type="radio" name="languages" id="englsih" value={"English"} />
                    </div>
                    <button className="send-btn" type="submit" >
                        Save
                    </button>
                    
                </form>
            </div>
        </div>
    </main>
  )
}

export default SettingsForm