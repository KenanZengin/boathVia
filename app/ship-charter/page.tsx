
import ShipCard from "@/components/cart/ship-card";

import Sort from "@/components/sort";
import BreadCrumb from "@/components/bread-crumb";
import { getUserfavShip } from "@/hooks/server/favships";
import { currentUserId } from "@/hooks/server/auth";
import { ShipsCartProps } from "@/types";


 const getShipsData = async (location :string="All", sort?: string) => {
  const res = await fetch(`http://localhost:3000/api/ships/getShips?location=${location}&sort=${sort}`)
  const data = await res.json();

  return data
}




const Ships = async ({searchParams}:{searchParams:{[key:string]: string}}) => {

  const data = await getShipsData(searchParams.location,searchParams.sort);
  

 
  return (
    <main className="shiplist">
      <div className="info">
        <BreadCrumb searchParams={searchParams} />
        <div className="options" tabIndex={10}>
          <div className="title">
            <h1>{searchParams.location ? searchParams.location : "All"} Boat and Yacht Charter</h1>ShortList
            <p>{data?.length} results found</p>
          </div>
          <Sort searchParams={searchParams} />
        </div>
      </div>
      <div className="ships">
        <div className="ships-wrapper">
          {data.length > 0  && data?.map((item:ShipsCartProps)=>(
              <ShipCard data={item} key={item.id} />
            )) 
          }
          </div>
      </div>
    </main>
  )
}

export default Ships