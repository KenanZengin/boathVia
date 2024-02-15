"use server"
import { Prisma } from "@prisma/client"
import data2 from "../data/homepage-ship.json"
import { db } from "@/database/db"

export const getShips = async () => {

   

    const ships = await db.ships.findMany()
    return {ships}
     
}