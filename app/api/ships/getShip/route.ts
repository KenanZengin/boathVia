import { db } from "@/server/db/db";
import { NextRequest, NextResponse } from "next/server"

export  async function GET(request: NextRequest){

    const { searchParams } = new URL(request.url);

    const id = searchParams.get("id");

    if(id){
        const ship= await db.ships.findFirst({
            where:{
                id
            }
        });
        

        await db.reservationCalendar.create({
            data:{
                shipId: id
            }
        })

        if(!ship) return NextResponse.json({error: "No found ship"});
        
        return NextResponse.json(ship) ;

    }

    return NextResponse.json({error: "No found ship"});

}