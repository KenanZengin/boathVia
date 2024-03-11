import { db } from "../db/db"

export const getUserCalendar = async(id: string) => {

    const userCalendar = await db.userReservation.findFirst({
        where:{
            id
        }
    });

    return userCalendar
}