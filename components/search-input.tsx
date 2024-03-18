import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { CSSProperties, memo, useEffect, useRef, useState } from "react";

import { IoSearchCircle   } from "react-icons/io5";
import { TfiLocationArrow } from "react-icons/tfi";


interface MyCustomCSS extends CSSProperties {
        '--wV': string;
}




const SearchInput = ({widthValue,location}: {widthValue: number,location?:string | null}) => {

       
  
  
  const locations = ["İstanbul","Beykoz","Karakoy","Kurucesme","AnadoluHisari","Eminonu","Istinye","Bebek"];

    

  return (
        <div className="search_location">
                <button 
                  //onClick={() => setOpen(!open)} 
                  //className={` search_location_select ${open ? "shaowed" : ""}`}  
                  className={` search_location_select`}  
                  title="Select Location" style={{"--wV":`${widthValue}rem`} as MyCustomCSS}
                >
                        
                        <span>  {
                                        locations.some((item) => item === location) ? location  : "Where dou you want to board the boat?"
                                }
                        </span>
                                
                </button>
                <div  
                            className="search_location_list"
                        >
                                <div className="lists_items"  >
                                        <div className="lists_items_header">
                                                <TfiLocationArrow size={22}/>
                                                <Link href={"/ship-charter?location=İstanbul"}>
                                                        <span>Istanbul</span>
                                                </Link>
                                        </div>
                                
                                        <div className="locations">
                                                {locations.map((location, index) => (
                                                        <Link key={index} href={`/ship-charter?location=${location}`}>
                                                                {location}
                                                        </Link>
                                                ))}
                                        </div>
                        
                                </div>  
                       </div>
               
                 <Link href={"/ship-charter?location=All"} className="search-all">
                        <IoSearchCircle size={50} />
                </Link>
        </div>
  )
}

export default SearchInput

