"use client"

import Link from "next/link";
import Dropdown from "react-bootstrap/Dropdown";
import { CSSProperties } from "react";

import { IoSearchCircle   } from "react-icons/io5";
import { TfiLocationArrow } from "react-icons/tfi";


interface MyCustomCSS extends CSSProperties {
        '--wV': string;
}

interface Props{
        widthValue: number
}

const SearchInput = ({widthValue}: Props) => {
  return (
    <Dropdown>
        <Dropdown.Toggle title="Select Location">
           <div className="search-content" style={{"--wV":`${widthValue}rem`} as MyCustomCSS}>
                <span>Where dou you want to board the boat?</span>
           </div>
        </Dropdown.Toggle>
        <Dropdown.Menu className="search_input">
           <Dropdown.Header>
                <TfiLocationArrow size={22}/>
                <span>Istanbul</span>
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
                <Link href={"/"}>
                        Arnatuvkoy
                </Link>
                <Link href={"/"}>
                        Bebek
                </Link>
           </div>
        </Dropdown.Menu>
        <Link href={"https://www.youtube.com/watch?v=rBpVtdB1a6w"} className="search-all">
                <IoSearchCircle   size={50} />
        </Link>
    </Dropdown>
  )
}

export default SearchInput