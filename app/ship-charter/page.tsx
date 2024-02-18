"use server"

import { getShips } from "@/server/actions/ships"
import ShipCard from "@/components/cart/ship-card";
import Link from "next/link";

import { MdKeyboardArrowDown } from "react-icons/md";

const Ships = async ({searchParams}:{searchParams:{[key:string]: string}}) => {

  const {ships, error} = await getShips(searchParams.location);

    
  return (
    <main className="shiplist">
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
            <h1>{searchParams.location} Boat and Yacht Charter</h1>
            <p>{ships?.length} results found</p>
          </div>
          <div className="arrangement">
            <button>
              <span>Suggested order</span>
              <MdKeyboardArrowDown size={25} />
            </button>
          </div>
        </div>
      </div>
      <div className="ships">
        <div className="ships-wrapper">
          {ships && ships.map((item)=>(
                <ShipCard data={item} key={item.id} />
            )) 
          }
        </div>
      </div>
      {error && <div>{error}</div>}
    </main>
  )
}

export default Ships