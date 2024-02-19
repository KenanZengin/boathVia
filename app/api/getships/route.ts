import { getShips } from "@/server/actions/ships";
import { NextResponse } from "next/server";

export async function GET(){


    const data = await getShips();
    const data2= await data.ships;

    return NextResponse.json(data2,{status:201})

}