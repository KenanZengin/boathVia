import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials"
import { LoginSchema } from "./schemas";
import { getUserByEmail } from "./server/data/user";
import { compare } from "bcryptjs";



export default {
    providers: [
        Credentials({
            async authorize(credentials){
                const validateFields = LoginSchema.safeParse(credentials);

                if(validateFields.success){

                    const { email, password } = validateFields.data;
                    const user = await getUserByEmail(email);

                    if(!user || !user.password) return null;

                    const passwordMach = await compare(
                        password,
                        user.password
                    );

                    if(passwordMach) return user;

                };

                return null;
            }
        }),
    ],
    trustHost: true
} satisfies NextAuthConfig