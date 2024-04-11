import { db } from "@/server/db/db";
import { NextResponse } from "next/server";


export async function GET() {
    
    const services = await db.services.findMany({});

    if(!services || services.length == 0) return NextResponse.json({error : "Service not found"});
    
    return NextResponse.json(services);


}