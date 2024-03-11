import ShipCard from '@/components/cart/ship-card';
import { currentUserId } from '@/hooks/server/auth';
import { getUserfavShip } from '@/hooks/server/favships';
import { getfavlist } from '@/server/actions/getfavlist'

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
      {getFavShip.getFavShips && getFavShip.getFavShips.length > 0 
        ?  <div className="ships-wrapper">
              {getFavShip.getFavShips && getFavShip.getFavShips.map((item)=>(
                <ShipCard data={item} key={item.id}  userFavList={getFavShip.favShips.ships} userId={getFavShip.checkUser}/>
              ))}
          </div>
        : <p>There are no ships registered in your favorites list</p>}
    </div>
   </div>
  )
}

export default FavoriteList