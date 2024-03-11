
import { getShips } from "@/server/actions/ships"
import ShipCard from "@/components/cart/ship-card";

import Sort from "@/components/sort";
import BreadCrumb from "@/components/bread-crumb";
import { getUserfavShip } from "@/hooks/server/favships";
import { currentUserId } from "@/hooks/server/auth";



const Ships = async ({searchParams}:{searchParams:{[key:string]: string}}) => {

  const {ships, error} = await getShips(searchParams.location,searchParams.sort);
  const userFavList = await getUserfavShip()

  return (
    <main className="shiplist">
      <div className="info">
        <BreadCrumb searchParams={searchParams} />
        <div className="options" tabIndex={10}>
          <div className="title">
            <h1>{searchParams.location} Boat and Yacht Charter</h1>ShortList
            <p>{ships?.length} results found</p>
          </div>
          <Sort searchParams={searchParams} />
        </div>
      </div>
      <div className="ships">
        <div className="ships-wrapper">
          {ships  && ships.map((item)=>(
              <ShipCard data={item} key={item.id} userFavList={userFavList.ships?.ships} userId={userFavList.checkUser}  />
            )) 
          }
        </div>
      </div>
    </main>
  )
}

export default Ships