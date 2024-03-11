import NextAuth, { DefaultSession } from "next-auth"
import authConfig from "./auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "./server/db/db"
import { getUserById } from "./server/data/user"
import { UserLanguage, UserRole } from "@prisma/client"


export type ExtendUser = DefaultSession["user"] & {
    id: string
    name: string,
    surname: string,
    phone: string,
    email: string,
    password: string,
    lang: UserLanguage,
};

declare module "next-auth"{
    interface Session{
       user: ExtendUser,
    }
}

export const {
handlers: { GET, POST},
auth,
signIn,
signOut
} = NextAuth({
    pages:{
        signIn: "/auth/login",
        signOut: "/",
    },
    callbacks:{

        async session({session,token}){

            if(token.sub && session.user){
                session.user.id = token.sub;
            }

            if(session.user){
                session.user.name = token.name as string;
                session.user.surname = token.surname as string;
                session.user.phone = token.phone as string;
                session.user.email = token.email as string;
                session.user.password = token.password as string;
                session.user.lang = token.lang as UserLanguage;
            }


            return session
        },
        async jwt({ token }){

            if(!token.sub) return token;

            const existingUser = await getUserById(token.sub);

            if(!existingUser) return token;

            token.name = existingUser.name;
            token.surname = existingUser.surname;
            token.email = existingUser.email;
            token.phone = existingUser.phone;
            token.password = existingUser.password;
            token.lang = existingUser.language;
            
            return token
        }
    },
    adapter: PrismaAdapter(db),
    session: {strategy: "jwt"},
    ...authConfig

})