"use server"

import * as z from "zod"
import { RegisterSchema } from "@/schemas"


export const record = async (values : z.infer<typeof RegisterSchema>) => {

    const validatedFields = RegisterSchema.safeParse(values);

    if(!validatedFields.success){
        return { error : "Invalid fields."}
    }

    const {name, surname, email, phone, password, rights } = validatedFields.data;
    
    


}