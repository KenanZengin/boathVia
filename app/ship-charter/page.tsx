
import { getShips } from "@/server/actions/ships"
import ShipCard from "@/components/cart/ship-card";


const Ships = async ({searchParams}:{searchParams:{[key:string]: string}}) => {

  const data = await getShips();

    
  return (
    <div className="shiplist">
      <div className="ships">
        {data?.ships && data.ships.map((item)=>(
              <ShipCard data={item} key={item.id} />
          )) 
        }
      </div>
    </div>
  )
}

export default Ships