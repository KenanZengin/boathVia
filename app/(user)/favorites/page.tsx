import ShipCard from '@/components/cart/ship-card';
import { currentUser, currentUserId } from '@/hooks/server/auth';
import { getUserfavShip } from '@/hooks/server/favships';
import {  getUserFavShips} from '@/hooks/server/getShips';
import { getfavlist } from '@/server/actions/getfavlist'
import { ShipsCartProps } from '@/types';




const FavoriteList = async () => {

  const favShip = await getUserFavShips();

  console.log(favShip);
  
  

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
        <div className="ships-wrapper">
          {favShip  && favShip.ships.map((item:ShipsCartProps)=>(
            <ShipCard data={item} userId={favShip.userId} key={item.id} favorite={true} />
          )) 
        }
        </div>
    </div>
   </div>
  )
}

export default FavoriteList