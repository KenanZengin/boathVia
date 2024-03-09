"use client"
import { logout } from '@/server/actions/logout'
import { signOut } from 'next-auth/react'

const LogOutButton = ({
    children
}:{
    children: React.ReactNode
}) => {

  const logOut = () => {
    logout();
  }


  return (
    <span onClick={() => signOut()}>
        {children}
    </span>
  )
}

export default LogOutButton