"use client"

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CSSProperties } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import { IoSearchCircle   } from "react-icons/io5";
import { TfiLocationArrow } from "react-icons/tfi";


interface MyCustomCSS extends CSSProperties {
        '--wV': string;
}

interface Props{
        widthValue: number
}

const SearchInput = ({widthValue}: Props) => {

  const searchParams = useSearchParams();
  const locationn: string | null = searchParams.get("location");
  
  const locations = ["Istanbul","Kadikoy","Uskudar","Levent","Karakoy","Kurucesme","AnadoluHisari","Eminonu","Istinye","Bebek"];


  return (
        <Dropdown autoClose={"outside"}>
                <Dropdown.Toggle title="Select Location">
                        <div className="search-content" style={{"--wV":`${widthValue}rem`} as MyCustomCSS}>
                                <span>  {
                                                locations.some((item) => item === locationn) ? locationn  : "Where dou you want to board the boat?"
                                        }
                                </span>
                        </div>        
                </Dropdown.Toggle>
                <Dropdown.Menu className="search_input" rootCloseEvent="mousedown">
                <Dropdown.Header>
                        <TfiLocationArrow size={22}/>
                        <Link href={"/ship-charter?location=Istanbul"}>
                                <span>Istanbul</span>
                        </Link>
                </Dropdown.Header>
                <div className="locations">

                        <Link href={"/ship-charter?location=Kadikoy&city=Istanbul"}>
                                Kadikoy
                        </Link>
                        <Link href={"/ship-charter?location=Uskudar&city=Istanbul"}>
                                Uskudar
                        </Link>
                        <Link href={"/ship-charter?location=Levent&city=Istanbul"}>
                                Levent
                        </Link>
                        <Link href={"/ship-charter?location=Karakoy&city=Istanbul"}>
                                Karakoy
                        </Link>
                        <Link href={"/ship-charter?location=Kurucesme&city=Istanbul"}>
                                Kurucesme
                        </Link>
                        <Link href={"/ship-charter?location=AnadoluHisari&city=Istanbul"}>
                                AnadoluHisari
                        </Link>
                        <Link href={"/ship-charter?location=Eminonu&city=Istanbul"}>
                                Eminonu
                        </Link>
                        <Link href={"/ship-charter?location=Istinye&city=Istanbul"}>
                                Istinye
                        </Link>
                        <Link href={"/ship-charter?location=Bebek&city=Istanbul"}>
                                Bebek
                        </Link>
                </div>
                </Dropdown.Menu>
                <Link href={"/ship-charter?location=All"} className="search-all">
                        <IoSearchCircle size={50} />
                </Link>
        </Dropdown>
  )
}

export default SearchInput