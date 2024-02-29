import { auth } from '@/auth'
import LogOutButton from '@/components/auth/logout-button';
import React from 'react'

const Settings = async () => {
    const session = await auth();
  return (
    <div>
        {JSON.stringify(session)}
        <LogOutButton>
          Log out
        </LogOutButton>
    </div>
  )
}

export default Settings