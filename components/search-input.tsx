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

  const test = locations.some((item) => item === locationn);
  console.log(test);
  

  return (
        <Dropdown autoClose={"outside"}>
                <Dropdown.Toggle title="Select Location">
                
                        <div className="search-content" style={{"--wV":`${widthValue}rem`} as MyCustomCSS}>
                                <span>{typeof locationn==="string" && locationn.length > 0 ? locationn  : "Where dou you want to board the boat?"}</span>
                        </div>
                
                </Dropdown.Toggle>
                <Dropdown.Menu className="search_input" rootCloseEvent="mousedown">
                <Dropdown.Header>
                        <TfiLocationArrow size={22}/>
                        <Link href={"/shiplist?location=Istanbul"}>
                                <span>Istanbul</span>
                        </Link>
                </Dropdown.Header>
                <div className="locations">
                        
                        <Link href={"/ship-charter?location=Kadikoy"}>
                                Kandilli
                        </Link>
                
                        <Link href={"/shiplist?location=Kuleli"}>
                                Kuleli
                        </Link>
                        <Link href={"/shiplist?location=Arnatuvkoy"}>
                                Arnatuvkoy
                        </Link>
                        <Link href={"/shiplist?location=Bebek"}>
                                Bebek
                        </Link>
                        <Link href={"/shiplist?location=Kandilli"}>
                                Kandilli
                        </Link>
                        <Link href={"/shiplist?location=Kuleli"}>
                                Kuleli
                        </Link>
                        <Link href={"/shiplist?location=Arnatuvkoy"}>
                                Arnatuvkoy
                        </Link>
                        <Link href={"/shiplist?location=Bebek"}>
                                Bebek
                        </Link>
                        <Link href={"/shiplist?location=Arnatuvkoy"}>
                                Arnatuvkoy
                        </Link>
                        <Link href={"/shiplist?location=Bebek"}>
                                Bebek
                        </Link>
                </div>
                </Dropdown.Menu>
                <Link href={"/shiplist"} className="search-all">
                        <IoSearchCircle size={50} />
                </Link>
        </Dropdown>
  )
}

export default SearchInput