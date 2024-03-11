"use server"

import { currentUserId } from "@/hooks/server/auth"
import { db } from "../db/db";



export const getfavlist = async () => {

  
    const checkUser = await currentUserId();

    const favShips = await db.userFavShips.findUnique({
        where:{
            userId: checkUser
        },
        select:{
            ships:true
        }
    })
   

    if(favShips === null && !favShips){
        return { error : "No ship registration"};
    } 

    const getFavShips = await db.ships.findMany({
        where:{
            id:{
                in: favShips.ships
            }
        }
    })

    return {getFavShips,favShips,checkUser}
    
    



}