"use server"

import { currentUser } from "@/hooks/server/auth"
import { getfavShips } from "@/hooks/server/favships"
import { db } from "../db/db";



export const getfavlist = async () => {

    const getUserId = await currentUser();

    if(!getUserId){
        return { error : "You must be logged in to see your favorite list." };
    }

    const favShipsId = await db.userFavShips.findUnique({
        where:{
            userId: getUserId.id
        },
    })

    if(favShipsId === null && !favShipsId){
        return { error : "No ship registration"};
    } 

    const favShips = await db.ships.findMany({
        where:{
            id:{
                in: favShipsId?.shipsId
            }
        }
    })
    
    

    return {favShips}


}