"use client"

import Link from "next/link";
import ShipCard from "@/components/cart/ship-card";
import { ShipsCartProps } from "@/types";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useState } from "react";


interface ParamsProps{
    city?: string,
    location?: string
}


const ShipList = ({ 
    data, 
    searchParams 
}: {
    data:Array<ShipsCartProps> | undefined, 
    searchParams: ParamsProps
}) => { 
 
    const router = useRouter()
    const [sortedData, setSortedData] = useState<Array<ShipsCartProps> | undefined>(data);

    const sortShips = (sortBy: string) => {
        console.log("I AM HERE");
        
        setSortedData((prevData) =>
          prevData?.sort((a, b) => {
            switch (sortBy) {
              case "price-high-to-low":
                return b.hour_price - a.hour_price;
              case "price-low-to-high":
                return a.hour_price - b.hour_price;
              default:
                return 0; // Unlikely, but handles unexpected sort key
            }
          })
        );
         
      };
 
  return (
   <>
        <div className="info">
            <div className="bread-crumb">
                <nav>
                <Link href={"/"}>
                    <span>Teknevia.com</span>
                </Link>
                <Link href={"/ship-charter?location=All"}>
                    <span>Yacht rental</span>
                </Link>
                {searchParams?.city && (
                    <Link href={`/ship-charter?location=${searchParams.city}`}>
                    <span>{searchParams.city}</span>
                    </Link>
                )}
                    {searchParams?.location && searchParams?.location !=="All" && (
                    <Link href={`/ship-charter?location=${searchParams.location}&city=${searchParams?.city}`}>
                    <span>{searchParams.location}</span>
                    </Link>
                )}
                </nav>
            </div>
            <div className="options">
                <div className="title">
                <h1>{searchParams.location} Boat and Y acht Charter</h1>
                <p>{data?.length} results found</p>
                </div> 
                <div className="arrangement">
                <button onClick={() => sortShips("price-low-to-high")}>
                    <span>Suggested order</span>
                    <MdKeyboardArrowDown size={25} />
                </button>
                <button>test</button>
                </div>
            </div>
        </div>
        <div className="ships">
            <div className="ships-wrapper">
                {sortedData?.map((item)=>(
                    <ShipCard data={item} key={item.id} />
                ))}
            </div>
        </div>
   </>
  )
}

export default ShipList