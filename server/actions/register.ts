"use server"

import * as z from "zod"
import { RegisterSchema } from "@/schemas"
import { getUserByEmail } from "../data/user";
import { db } from "../db/db";
import { hash } from "bcryptjs";


export const record = async (values : z.infer<typeof RegisterSchema>) => {

    const validatedFields = RegisterSchema.safeParse(values);

    if(!validatedFields.success){
        return { error : "Invalid fields."};
    }

    const {name, surname, email, phone, password, rights } = validatedFields.data;
    
    const existingUser = await getUserByEmail(email);

    if(existingUser){
        return { error : "Email already in use!"};
    }

    const hashedPassword = await hash(password,12);

   
    const user = await db.user.create({
        data:{
            name,
            surname,
            email,
            phone,
            password: hashedPassword,
            rights
        }
    });
    
    await db.userFavShips.create({
        data:{
            userId:user.id
        }
    })

    return { success : "Registration completed, you are directed to the login page"}

}





