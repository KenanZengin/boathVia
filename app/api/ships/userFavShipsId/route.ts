
import { db } from "@/server/db/db";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request:NextRequest){

    const { searchParams } = new URL(request.nextUrl);
    const userId = searchParams.get("userId");
    
    
    
    if(!userId) return NextResponse.json({error : "No user found"});
   
    const ships = await db.userFavShips.findUnique({
        where:{
            userId: userId
        },
        select:{
            ships: true
        }
    });

    

    if(!ships) return NextResponse.json({error : "No record ship"});


    return NextResponse.json({ships,userId});

}