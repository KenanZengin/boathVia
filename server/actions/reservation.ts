"use server"

import { ReservationSchema } from "@/schemas"
import * as z from "zod"
import { getUserById } from "../data/user";
import { currentUser } from "@/hooks/server/auth";
import { getShipsById } from "../data/ships";
import { db } from "../db/db";
import { getShipReservationCalendar } from "../data/calendar";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";


export const reservation = async (values:z.infer<typeof ReservationSchema>,shipId: string,hour_price: number) => {

    

    const validateFields = ReservationSchema.safeParse(values);
    

    if(!validateFields.success){
        return { error : "Invalid fields!" };
    }


    const {port, people, time, duration,} = validateFields.data;
    
    

    const user = await currentUser();
    if(!user){
        return { error : "You should log in to rent a ship" }
    }

    
    
    const ship = await getShipsById(shipId);
    if(!ship){
        return { error : "No such ship is registered" }
    }
    
    const reservationCalendar = await getShipReservationCalendar(shipId);

    if(!reservationCalendar){
        return { error : "Ship not found" }
    }

     const startDate = new Date(time.getTime() + ( 3 * 3600000 ));
    
     const hours = [];
     for (let i = 0; i < duration; i++) {
         const startDateTime = new Date(startDate.getTime() + (i * 3600000));
        
         hours.push(startDateTime);
     }

    
    
     const arrangementReservationCalendar = reservationCalendar.time.sort((a, b) => b.getTime() - a.getTime()); 
     const commonElements = hours.filter(item => arrangementReservationCalendar.some(test => item.getTime() === test.getTime()));

     if(commonElements.length > 0 && commonElements){
         return { error : "The ship is full between these hours. Choose another watch."}
     }

    try {
        await db.reservationCalendar.updateMany({
            where:{
                shipId: shipId
            },
            data:{
                time:{
                    push: hours
                }
            }
        });
    } catch (error) {

        if(error instanceof PrismaClientValidationError){
            return { error : error.message, version: error.clientVersion}
        }
        return { error: "There is a problem, we will solve it as soon as possible" }

    }
   
     try {

        var reservationInfo =  await db.userReservation.create({
            data:{
                userId: user.id,
                shipId: shipId,
                port: port,
                people: people,
                duration: duration,
                time: hours,
                img_path: ship.img_path,
                hour_price: hour_price,
                star: ship.star,
                comment: ship.comment,
                record_date: new Date()
            }
        });
        

        
     } catch (error) {
        
         if(error instanceof PrismaClientValidationError){
             return { error : error.message, version: error.clientVersion}
         }

         return { error: "There is a problem, we will solve it as soon as possible" }
     }


   return {status : true , reservationId: reservationInfo.id}
}