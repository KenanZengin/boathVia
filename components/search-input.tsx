"use client"

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CSSProperties, useEffect, useRef, useState } from "react";

import { IoSearchCircle   } from "react-icons/io5";
import { TfiLocationArrow } from "react-icons/tfi";


interface MyCustomCSS extends CSSProperties {
        '--wV': string;
}

interface Props{
        widthValue: number
}

const locations = [
        "Istanbul",
        "Kadikoy",
        "Uskudar",
        "Levent",
        "Karakoy",
        "Kurucesme",
        "AnadoluHisari",
        "Eminonu",
        "Istinye",
        "Bebek"
];

const SearchInput = ({widthValue}: Props) => {

  const [open,setOpen] = useState<boolean>(false)
  const sortMenuRef = useRef<HTMLDivElement>(null);

  const searchParams = useSearchParams();
  const locationn: string | null = searchParams.get("location");
  
  const locations = ["Istanbul","Kadikoy","Uskudar","Levent","Karakoy","Kurucesme","AnadoluHisari","Eminonu","Istinye","Bebek"];

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
        <div className="search_location">
                <button 
                  onClick={() => setOpen(!open)} 
                  className={` search_location_select ${open ? "shaowed" : ""}`}  
                  title="Select Location" style={{"--wV":`${widthValue}rem`} as MyCustomCSS}
                >
                        
                        <span>  {
                                        locations.some((item) => item === locationn) ? locationn  : "Where dou you want to board the boat?"
                                }
                        </span>
                                
                </button>
                
                {open && (
                       <div  
                          ref={sortMenuRef} onClick={()=>setOpen(!open)} className="search_location_list"
                        >
                                <div className="lists_items"  >
                                        <div className="lists_items_header">
                                                <TfiLocationArrow size={22}/>
                                                <Link href={"/ship-charter?location=Istanbul"}>
                                                        <span>Istanbul</span>
                                                </Link>
                                        </div>
                                
                                        <div className="locations">
                                                {locations.map((location, index) => (
                                                        <Link key={index} href={`/ship-charter?location=${location}&city=Istanbul`}>
                                                                {location}
                                                        </Link>
                                                ))}
                                        </div>
                        
                                </div>  
                       </div>
                )}
                 <Link href={"/ship-charter?location=All"} className="search-all">
                        <IoSearchCircle size={50} />
                </Link>
        </div>
  )
}

export default SearchInput

