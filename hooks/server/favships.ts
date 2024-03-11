"use server"

import { db } from "@/server/db/db"
import { currentUserId } from "./auth";


export const getUserfavShip = async () => {
    
        

    const checkUser = await currentUserId();
       
    if(!checkUser) return { error : "No user found"}
        

    const ships = await db.userFavShips.findUnique({
        where:{
            userId: checkUser,
        },
        select:{
            ships: true
        }
    });

    return {ships,checkUser}
   
}

export const getUserfavShips = async (id:string) => {



    var startTime = Date.now();
    const ships = await db.userFavShips.findUnique({
        where:{
            userId: id,
        }
    })
    var endTime = Date.now();
    var duration = endTime - startTime;
    console.log(`getUserfavShip İşlem süresi: ${duration} ms`);
    return ships?.ships;
   
}