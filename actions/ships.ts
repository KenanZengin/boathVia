"use server"

import { db } from "@/database/db"

export const getShips = async () => {

    const ships = await db.ships.findMany({});

    return {ships}
}

// export const getShips2 = async (star: number) => {

//     const ships = await db.ships.findFirst({
//         where:{
//             star: star
//         }
//     });

//     if(!ships) return {error : "No reccord"};
    
//     return {ships}
// }

