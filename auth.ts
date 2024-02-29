import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "./server/db/db"
import { getUserById } from "./server/data/user"
import { UserRole } from "@prisma/client"




export const {
handlers: { GET, POST},
auth,
signIn,
signOut
} = NextAuth({
    pages:{
        signIn: "/auth/login",
    },


    adapter: PrismaAdapter(db),
    session: {strategy: "jwt"},
    ...authConfig

})