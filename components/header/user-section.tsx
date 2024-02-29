"use client"

import Link from "next/link";
import Dropdown from "react-bootstrap/Dropdown";
import { useCurrentUser } from "@/hooks/client/use-auth";

import { RxHamburgerMenu } from "react-icons/rx";
import { LuUserCircle2 } from "react-icons/lu";

const UserSection = () => {
  
  const user = useCurrentUser();
  console.log("user:",user);
  

  return (
    <Dropdown>
        <Dropdown.Toggle title="User action"  >
            <RxHamburgerMenu size={24} />
            <LuUserCircle2 size={24} />
        </Dropdown.Toggle>
        <Dropdown.Menu className="user_section">
            <Link href="/auth/login">
                Login
            </Link>
            <Link href="/auth/register">
                Register
            </Link>
            
             <Link href="/">
                Help Center
            </Link>
            {/* <Link>
                Add your boat to Teknevia
            </Link> */}
        </Dropdown.Menu>
    </Dropdown>
  )
}

export default UserSection