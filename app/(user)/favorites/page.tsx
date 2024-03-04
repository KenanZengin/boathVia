import ShipCard from '@/components/cart/ship-card';
import { getfavlist } from '@/server/actions/getfavlist'
import React from 'react'

const FavoriteList = async () => {

  const getFavShip = await getfavlist();

  
  return (
   <div className="shiplist">
      <div className="info">
        <div className="options">
          <div className="title">
            <h2>Favorites</h2>
          </div>
        </div>
      </div>
     <div className="ships">
      {getFavShip.favShips && getFavShip.favShips.length > 0 
        ?  <div className="ships-wrapper">
              {getFavShip && getFavShip.favShips?.map((item)=>(
                <ShipCard data={item} key={item.id} />
              ))}
          </div>
        : <p>There are no ships registered in your favorites list</p>}
    </div>
   </div>
  )
}

export default FavoriteList