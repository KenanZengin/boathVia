"use server"

import { db } from "../db/db";


export const deleteReservation = async (id: string,dates: Date[],shipId:string) => {

    console.log(id,dates,shipId);
    
    if(!id && !dates){
        return {error : "Reservation information is missing"}
    }

    await db.userReservation.delete({
        where:{
            id
        }
    });

    const allDate = await db.reservationCalendar.findUnique({
        where:{
            shipId
        },
        select:{
            time : true
        }
    })

        
    const filteredDates = allDate?.time.filter(date => !dates.some(dateB => new Date(dateB).getTime() === date.getTime()));
    
    await db.reservationCalendar.update({
        where:{
            shipId
        },
        data:{
            time: filteredDates
        }
    })

    return {message: "The reservation has been cancelled", delete: true}    


}