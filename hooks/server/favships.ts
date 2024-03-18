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



    const ships = await db.userFavShips.findUnique({
        where:{
            userId: id,
        }
    })
   
    return ships?.ships;
   
}


// var startTime = Date.now();
// var endTime = Date.now();
// var duration = endTime - startTime;
// console.log(`getUserfavShip İşlem süresi: ${duration} ms`);