
import ShipCard from "@/components/cart/ship-card";

import Sort from "@/components/sort";
import BreadCrumb from "@/components/bread-crumb";
import { getUserfavShip } from "@/hooks/server/favships";
import { currentUserId } from "@/hooks/server/auth";
import { ShipsCartProps } from "@/types";
import { getShipsData, getUserFavShipsId } from "@/hooks/server/getShips";






const Ships = async ({searchParams}:{searchParams:{[key:string]: string}}) => {




  const [ships,favShipsId] = await Promise.all([getShipsData(searchParams.location,searchParams.sort),getUserFavShipsId()])
  

  
  return (
    <main className="shiplist">
      <div className="info">
        <BreadCrumb searchParams={searchParams} />
        <div className="options" tabIndex={10}>
          <div className="title">
            <h1>{searchParams.location ? searchParams.location : "All"} Boat and Yacht Charter</h1>ShortList
            <p>{ships?.length} results found</p>
          </div>
          <Sort searchParams={searchParams} />
        </div>
      </div>
      <div className="ships">
        <div className="ships-wrapper">
          {ships.length > 0  && ships?.map((item:ShipsCartProps)=>(
              <ShipCard data={item} key={item.id} userFavList={favShipsId.ships.ships} userId={favShipsId.userId} />
            )) 
          }
          </div>
      </div>
    </main>
  )
}

export default Ships