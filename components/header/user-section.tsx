"use client"

import Link from "next/link";
import Dropdown from "react-bootstrap/Dropdown";
import { useCurrentUser } from "@/hooks/client/use-auth";

import { RxHamburgerMenu } from "react-icons/rx";
import { LuUserCircle2 } from "react-icons/lu";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { signOut } from "next-auth/react";
import { logout } from "@/hooks/client/logout";

const UserSection = () => {

  const user = useCurrentUser();
  
  
  return (
    <Dropdown>
        <Dropdown.Toggle title="User action"  >
            <RxHamburgerMenu size={24} />
            <LuUserCircle2 size={24} />
        </Dropdown.Toggle>
        <Dropdown.Menu className="user_section">
            {user 
                ?
                    <>
                        <Link href="/auth/login">
                        Reservation
                        </Link>
                        <Link href="/auth/register">
                        Favorites
                        </Link>
                        <Link href="/">
                            Personal Information
                        </Link>
                        <button onClick={logout}>
                            Sign out
                        </button>
                        <Link href="/">
                            Help Center
                        </Link>
                    </>
                :
                    <>
                        <Link href="/auth/login">
                            Login
                        </Link>
                        <Link href="/auth/register">
                            Register
                        </Link>
                        <Link href="/">
                            Help Center
                        </Link>
                    </>
            }
            {/* <Link>
                Add your boat to Teknevia
            </Link> */}
        </Dropdown.Menu>
    </Dropdown>
  )
}

export default memo(UserSection)