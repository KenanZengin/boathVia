"use server"

import { currentUser } from "@/hooks/server/auth";
import { getShipsById } from "../data/ships"
import { db } from "../db/db";
import { getfavShips } from "@/hooks/server/favships";


export const addFav = async(id: string) => {


    const existingShpis = await getShipsById(id);

    if(!existingShpis){
        return {error : "No such ship was found"}
    }

    const checkUser = await currentUser();

    if(!checkUser){
        return { error : "To add ships to your favorite list, you must first log in"}
    }

    const favShips = await getfavShips(checkUser.id);

    if(favShips && favShips.id ){

        const checkFav = favShips.shipsId.some((filterId) => filterId == id);

        if(checkFav){

            const newFavSet = favShips.shipsId.filter((filterId) => filterId !== id);
            console.log("newFavSet",newFavSet);
            

            await db.userFavShips.update({
                where:{
                    id: favShips.id
                },
                data:{
                    shipsId: newFavSet
                }
                
            })

            return { success : "Silme işlemi başarılı"}
        }


        await db.userFavShips.update({
            where:{
                id: favShips.id
            },
            data:{
                shipsId:{
                    push: id
                }
            }
        })

        return { success : "New ships add"}
    }
    

    await db.userFavShips.create({
        data:{
            userId: checkUser.id,
            shipsId: [id]
        }
    })

    return { success : "ships add"}



}