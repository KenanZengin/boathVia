"use server"

import { db } from "@/server/db/db"

export const getShips = async (location:string = "Istanbul", sorts?:string) => {




    if(location==="All"){
        const ships = await db.ships.findMany({});

        if(sorts == "high"){
            
            ships.sort((a,b) => b.hour_price - a.hour_price);

            return { ships }
        }

        if(sorts == "low"){
            
            ships.sort((a,b) => a.hour_price - b.hour_price);

            return { ships }
        }


        return {ships}
    }

    
    if(location==="Istanbul"){
        const ships = await db.ships.findMany({
            where:{
               city: location,
            }
        });

        if(sorts == "high"){
            
            ships.sort((a,b) => b.hour_price - a.hour_price);

            return { ships }
        }

        if(sorts == "low"){
            
            ships.sort((a,b) => a.hour_price - b.hour_price);

            return { ships }
        }
        return {ships}
    }
    

    const ships = await db.ships.findMany({
        where:{
           district: location,
        }
    });

    if(sorts && sorts!="high" && sorts!=="low") return {ships}

    if(sorts == "high"){
            
        ships.sort((a,b) => b.hour_price - a.hour_price);

        return { ships }
    }

    if(sorts == "low"){
        
        ships.sort((a,b) => a.hour_price - b.hour_price);

        return { ships }
    }


    
    if(!ships || ships.length == 0  ) return { error: "There are no ships registered for this location." }

    return {ships}
    
}

