"use server"

import * as z from "zod"
import { getUserByEmail, getUserById } from "../data/user"
import { db } from "../db/db"
import { currentUser } from "@/hooks/server/auth"
import { SettingsSchema } from "@/schemas"
import { compare, hash } from "bcryptjs"

export const settings = async (
    values: z.infer<typeof SettingsSchema>
) => {

    const user = await currentUser();

    if(!user){
        return { error : "Unauthorized"};
    }

    const dbUser = await getUserById(user.id);

    if(!dbUser){
        return { error : "Unauthorized"};
    }

    if(values.email && values.email !== user.email){

        const existingUser = await getUserByEmail(values.email);

        if(existingUser && existingUser.id !==user.id){
            return { error : "Email already in use!" };
        }

        //TODO: Email services add
    }

    if(values.password && values.newPassword && dbUser.password){
        const passwordMatch = await compare(
            values.password,
            dbUser.password
        );

        if(!passwordMatch){
            return { error : "Incorrect password"};
        }

        const hashedPassword = await hash(values.newPassword, 10);

        dbUser.password = hashedPassword;
        values.newPassword = undefined;
    }

    await db.user.update({
        where:{
            id: dbUser.id
        },
        data:{
            name: values.name,
            surname: values.surname,
            email: values.email,
            phone: values.phone,
            password: dbUser.password,
            language: values.lang
        }
    });

    return { success : "Settings Update"}

}