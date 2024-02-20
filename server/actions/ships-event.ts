"use server"

import { db } from "../db/db"

export const getServices = async () => {

    const services = await db.services.findMany({});

    if(!services || services.length == 0) return {error : "Service not found"};

    return {services}

}