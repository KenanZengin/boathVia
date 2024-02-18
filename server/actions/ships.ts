"use server"

import { db } from "@/server/db/db"

export const getShips = async (location:string) => {

    if(location==="Istanbul"){
        const ships = await db.ships.findMany({
            where:{
               city: location,
            }
        });

        return {ships}
    }

    if(location==="All"){
        const ships = await db.ships.findMany({});

        return {ships}
    }

    const ships = await db.ships.findMany({
        where:{
           district: location,
        }
    });

    console.log(ships);
    
    if(!ships || ships.length == 0  ) return { error: "There are no ships registered for this location." }

    return {ships}
    
    
    
}

