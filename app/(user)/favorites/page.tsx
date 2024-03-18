import ShipCard from '@/components/cart/ship-card';
import { currentUser, currentUserId } from '@/hooks/server/auth';
import { getUserfavShip } from '@/hooks/server/favships';
import { getfavlist } from '@/server/actions/getfavlist'
import { ShipsCartProps } from '@/types';


const getUserFavShip = async (id:string | undefined) => {


  const res = await fetch(`http://localhost:3000/api/ships/userFavShips?userId=${id}`);
  const data = await res.json();

  
  return data

} 



const FavoriteList = async () => {

  const userId = await currentUserId()
  const favShip = await getUserFavShip(userId);

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
     {favShip  && favShip.ships.ships.map((item:ShipsCartProps)=>(
          <ShipCard data={item} key={item.id} />
        )) 
      }
    </div>
   </div>
  )
}

export default FavoriteList