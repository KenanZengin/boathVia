import { signOut } from "next-auth/react"

export const logout = () => {
    signOut({
        redirect:true,
    });

}


