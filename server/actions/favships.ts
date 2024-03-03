"use server"

import { currentUser } from "@/hooks/server/auth";
import { getShipsById } from "../data/ships"


export const addFav = async(id: string) => {


    const existingShpis = await getShipsById(id);

    if(!existingShpis){
        return {error : "No such ship was found"}
    }

    const checkUser = await currentUser();

    if(!checkUser){
        return { error : "To add ships to your favorite list, you must first log in"}
    }

    

}