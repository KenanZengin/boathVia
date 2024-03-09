"use server"

import { db } from "../db/db"

export const getShipReservationCalendar = async (id: string) => {

    const ship = await db.reservationCalendar.findUnique({
        where:{
            shipId: id
        }
    })

    return ship
}