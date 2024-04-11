import { db } from "@/server/db/db";
import { NextRequest, NextResponse } from "next/server";



export async function GET(request:NextRequest){

    const {searchParams} = new URL(request.nextUrl);
    const id = searchParams.get("userId");

   
    if(id){
        const userReservation = await db.userReservation.findMany({
            where:{
                userId: id
            }
        })

        if(userReservation.length == 0 || !userReservation){
            return NextResponse.json({error: "You do not have a reservation record"});
        }

        return NextResponse.json(userReservation);

    }

    return NextResponse.json({error: "Please log in"});


}