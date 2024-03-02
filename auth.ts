import NextAuth, { DefaultSession } from "next-auth"
import authConfig from "./auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "./server/db/db"
import { getUserById } from "./server/data/user"
import { UserLanguage, UserRole } from "@prisma/client"


export type ExtendUser = DefaultSession["user"] & {
    surname: string,
    phone: string,
    password: string,
    lang: UserLanguage
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
    },
    callbacks:{

        async session({session,token}){

            if(token.sub && session.user){
                session.user.id = token.sub;
            }

            if(session.user){
                session.user.surname = token.surname as string;
                session.user.phone = token.phone as string;
                session.user.password = token.password as string;
                session.user.lang = token.lang as UserLanguage;
            }


            return session
        },
        async jwt({ token }){

            if(!token.sub) return token;

            const existingUser = await getUserById(token.sub);

            if(!existingUser) return token;

            token.surname = existingUser.surname;
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