import { db } from "../db/db";

export const getShipsById = async (id:string) => {
    try {

        const ships = await db.ships.findUnique({
            where:{
                id
            }
        });

        return ships;
        
    } catch  {
        return null;
    }
}