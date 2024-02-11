"use client"

import Dropdown from "react-bootstrap/Dropdown";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuUserCircle2 } from "react-icons/lu";

const UserSection = () => {
  return (
    <Dropdown>
        <Dropdown.Toggle title="User action">
            <RxHamburgerMenu size={24} />
            <LuUserCircle2 size={24} />
        </Dropdown.Toggle>
        <Dropdown.Menu className="user_section">
            <Dropdown.Item as={"a"} href="/">
                Login
            </Dropdown.Item>
            <Dropdown.Item as={"a"} href="/">
                Register
            </Dropdown.Item>
            {/* <Dropdown.Item as={"a"}>
                Add your boat to Teknevia
            </Dropdown.Item> */}
             <Dropdown.Item as={"a"} href="/">
                Help Center
            </Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
  )
}

export default UserSection