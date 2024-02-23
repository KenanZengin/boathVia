"use client"

import Dropdown from "react-bootstrap/Dropdown";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuUserCircle2 } from "react-icons/lu";
import Link from "next/link";

const UserSection = () => {
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
            {/* <Link>
                Add your boat to Teknevia
            </Link> */}
             <Link href="/">
                Help Center
            </Link>
        </Dropdown.Menu>
    </Dropdown>
  )
}

export default UserSection