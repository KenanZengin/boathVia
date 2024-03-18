"use client"

import Link from "next/link";
import { memo } from "react";
import { logout } from "@/hooks/client/logout";
import { useCurrentUser } from "@/hooks/client/use-auth";
import Dropdown from "react-bootstrap/Dropdown";
import { useSearchParams } from "next/navigation";
import { CSSProperties, useEffect, useRef, useState } from "react";

import { IoSearchCircle   } from "react-icons/io5";
import { TfiLocationArrow } from "react-icons/tfi";


import { RxHamburgerMenu } from "react-icons/rx";
import { LuUserCircle2 } from "react-icons/lu";
import { Session } from "next-auth";


const UserSection = ({session}:{session: Session | null}) => {

  
  const [open,setOpen] = useState<boolean>(false)
  const sortMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: Event) => {
        if (open && !sortMenuRef.current?.contains(event.target as Node)) {
        setOpen(false);
        }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
        document.removeEventListener('click', handleClickOutside);
        };
    }, [open])

  return (
    <div className="mydropdown-menu">
        <button title="User action"  onClick={() => setOpen(!open)}   >
            <RxHamburgerMenu size={24} />
            <LuUserCircle2 size={24} />
        </button>
        {
            open && (
                <div className="menu user_section" ref={sortMenuRef} onClick={()=>setOpen(!open)}>
                    {session && session.user 
                        ?
                            <>
                                <Link href="/">
                                    Reservation
                                </Link>
                                <Link href="/favorites" >
                                    Favorites
                                </Link>
                                <Link href="/profile">
                                    Personal Information
                                </Link>
                                <button onClick={logout}>
                                    Sign out
                                </button>
                                <Link href="/helpcenter">
                                    Help Center
                                </Link>
                                <Link href="/test">
                                    TEST
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
                                <Link href="/helpcenter">
                                    Help Center
                                </Link>
                            </>
                    }
                    {/* <Link>
                        Add your boat to Teknevia
                    </Link> */}
                </div>
            )
        }
    </div>
  )
}

export default memo(UserSection)