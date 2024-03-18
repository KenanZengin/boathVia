"use server"

import { ShipsCartProps } from "@/types";
import { db } from "../db/db";
import { getUserfavShips } from "@/hooks/server/favships";


export const addFav = async(shipId: string, userId: string) => {


    
    if(!userId){
        return { error : "To add ships to your favorite list, you must first log in"}
    }

    const favShips = await getUserfavShips(userId);
    console.log("favShips",favShips);
    

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
       
        return { success : "Deletion successful", add : false}
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
    
   

    return { success : "New ships add", add: true}   

}