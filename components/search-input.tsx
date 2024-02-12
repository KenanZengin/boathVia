"use client"

import Link from "next/link";
import Dropdown from "react-bootstrap/Dropdown";

const SearchInput = () => {
  return (
    <Dropdown>
        <Dropdown.Toggle title="Select Location">
           <div className="search-content">
                <span>Where dou you want to board the boat?</span>
           </div>
        </Dropdown.Toggle>
        <Dropdown.Menu className="search_input">
           <Dropdown.Header>
                Istanbul
           </Dropdown.Header>
           <div className="locations">
            <Link href={"/"}>
                    Kandilli
            </Link>
            <Link href={"/"}>
                    Kuleli
            </Link>
            <Link href={"/"}>
                    Arnatuvkoy
            </Link>
            <Link href={"/"}>
                    Bebek
            </Link>
           </div>
        </Dropdown.Menu>
    </Dropdown>
  )
}

export default SearchInput