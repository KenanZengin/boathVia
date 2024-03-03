import { db } from "@/server/db/db"


export const getfavShips = async (id:string) => {

    const ships = await db.userFavShips.findUnique({
        where:{
            userId: id,
        }
    })

    return ships;

}