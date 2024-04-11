"use server"

import * as z from "zod"
import { CreditCardSchema } from "@/schemas"
import { db } from "../db/db";
 

export const payment = async (values:z.infer<typeof CreditCardSchema>,reservationId:string) => {

    const validateFields = CreditCardSchema.safeParse(values);

    if(!validateFields.success){
        return { error : "Invalid fields"};
    }

    if(!reservationId){
        return {error : "Reservation not found"};
    }

    const { cardCvv,cardMonth,cardName,cardNumber,cardYear } = validateFields.data;

    if(cardCvv && cardMonth && cardName && cardNumber && cardYear){
        const reservation = await db.userReservation.update({
            where:{
                id: reservationId
            },
            data:{
                payment: true
            }
        })

        return { paymentStatus : true, start : reservation.time[0], location: reservation.port}
    }
    

    return {message : "no problem"}


}