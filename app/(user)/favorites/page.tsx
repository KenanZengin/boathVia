import Image from 'next/image';
import ShipCard from '@/components/cart/ship-card';
import {  getUserFavShips } from '@/hooks/server/getShips';
import { ShipsCartProps } from '@/types';
import Link from 'next/link';

import noFound from "../../../public/img/basic/no-found.png"
import NoRecord from '@/components/no-record';





const FavoriteList = async () => {

  const favShip = await getUserFavShips();

  console.log(favShip);
  
  

  return (
   <div className="favorite-list">
      
      <div className="info">
        <div className="options">
          <div className="title">
            <h2>Favorites</h2>
          </div>
        </div>
      </div>
     <div className="ships">
        <div className="ships-wrapper">
          {favShip.ships.length > 0  
            ? favShip.ships.map((item:ShipsCartProps)=>(
              <ShipCard data={item} userId={favShip.userId} key={item.id} favorite={true} />
            )) 
            : <NoRecord message={"You haven't added any boat to your favorites yet"} pathMessage={"You can view the boats you like on this page by adding them to your favorites."} /> 
          }
        </div>
    </div>
   </div>
  )
}

export default FavoriteList