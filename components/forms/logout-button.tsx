"use client"

import { signOut } from 'next-auth/react'


const LogOutButton = ({children}:{children: React.ReactNode}) => {

  return (
    <span onClick={() => signOut()}>
      {children}
    </span>
  )
}

export default LogOutButton