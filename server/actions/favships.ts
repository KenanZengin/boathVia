"use server"

import { db } from "../db/db";
import { getUserfavShips } from "@/hooks/server/favships";


export const addFav = async(shipId: string, userId?: string) => {

    if(!userId){
        return { error : "You must log in to add to your favorite list"}
    }

    const favShips = await getUserfavShips(userId);
    

    const checkFav = favShips?.some((filterId) => filterId == shipId);
  
    if(checkFav){

       
        const newFavSet =  favShips?.filter((filterId) => filterId !== shipId);
       

        
        await db.userFavShips.update({
            where:{
                userId: userId
            },
            data:{
                ships: newFavSet
            }
            
        })
       
        return { success : "deleted to your favorite list", add : false}
    }

  

   

    await db.userFavShips.update({
        where:{
            userId: userId
        },
        data:{
            ships:{
                push:shipId
            }
        }
    })
    
   

    return { success : "Added to your favorite list", add: true}   

}