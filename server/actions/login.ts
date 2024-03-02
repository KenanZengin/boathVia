"use server"

import { db } from "../db/db"
import * as z from "zod"
import { getUserByEmail } from "../data/user"
import { LoginSchema } from "@/schemas"
import { signIn } from "@/auth"
import { AuthError } from "next-auth"




export const login = async(values : z.infer<typeof LoginSchema>) => {

    const validateFields = LoginSchema.safeParse(values);

    if(!validateFields.success){
        return { error : "Invaliz fields"};
    }

    const { email, password } = validateFields.data;

    const existingUser = await getUserByEmail(email);

    if(!existingUser || !existingUser.email || !existingUser.password){
        return { error : "Email is not existing"};
    }


    try {

        await signIn("credentials",{
            email,
            password,
            redirectTo: "/profile"
        })
        
    } catch (error) {

        if(error instanceof AuthError){
            switch(error.type){
                case "CredentialsSignin":
                    return { error: "Invalid Credentials!"};
                default:
                    return { error : "Something went wrong"};
            }
        }
        throw error;
    }
}