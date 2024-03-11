"use server"

import { db } from "../db/db";
import { getUserfavShips } from "@/hooks/server/favships";


export const addFav = async(id: string, userId: string) => {


    
    if(!userId){
        return { error : "To add ships to your favorite list, you must first log in"}
    }

    const favShips = await getUserfavShips(userId);
    
    const checkFav = favShips?.some((filterId) => filterId == id);
  
    if(checkFav){

       
        const newFavSet =  favShips?.filter((filterId) => filterId !== id);
       

        
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
                push: id
            }
        }
    })
   

    return { success : "New ships add", add: true}   

}