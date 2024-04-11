
import { db } from "@/server/db/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest){

    const {search, searchParams} = new URL(request.url)
    const location = searchParams.get("location");
    const sorts = searchParams.get("sort");
    

    if(location === "All"){

        const ships = await db.ships.findMany({});

        if(sorts && sorts!="high" && sorts!=="low") return NextResponse.json(ships);

        if(sorts == "high"){
            
            ships.sort((a,b) => b.hour_price - a.hour_price);

            return NextResponse.json(ships);
        };

        if(sorts == "low"){
            
            ships.sort((a,b) => a.hour_price - b.hour_price);

            return NextResponse.json(ships);
        };


        return NextResponse.json(ships);
    }

    
    if(location === "İstanbul"){
        const ships = await db.ships.findMany({
            where:{
               city: location,
            },
        });

        if(sorts && sorts!="high" && sorts!=="low")  return NextResponse.json(ships);

        if(sorts == "high"){
            
            ships.sort((a,b) => b.hour_price - a.hour_price);
            
            return NextResponse.json(ships);
        }

        if(sorts == "low"){
            
            ships.sort((a,b) => a.hour_price - b.hour_price);

            return NextResponse.json(ships);
        }

        return NextResponse.json(ships);
    }
    

    if(location !== "All" && location !=="Istanbul" && location){
        const ships = await db.ships.findMany({
            where:{
               district: location
            }
        });
        
        if(sorts && sorts!="high" && sorts!=="low")  return NextResponse.json(ships);
    
        if(sorts == "high"){
                
            ships.sort((a,b) => b.hour_price - a.hour_price);

    
             return NextResponse.json(ships);
        }
    
        if(sorts == "low"){
            
            ships.sort((a,b) => a.hour_price - b.hour_price);
    
             return NextResponse.json(ships);
        }

        if(!ships || ships.length == 0 ) NextResponse.json({error: "No found ship"});

         return NextResponse.json(ships);
    }


    if(!search){
        const ships = await db.ships.findMany({});

        if(!ships) return NextResponse.json({error: "No found ship"});

        return NextResponse.json(ships);
    }


    return NextResponse.json({error: "No found ship"});

}