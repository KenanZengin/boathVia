import { getfavlist } from '@/server/actions/getfavlist'
import React from 'react'

const FavoriteList = async () => {

  const getFavShip = await getfavlist();

  console.log(getFavShip);
  
  return (
    <div>
        {
            getFavShip.favShips?.map((item)=>(
                <h1 key={item.id}>
                    {item.img_path} 
                    <br />
                    {item.id    }
                </h1>
            ))
        }
    </div>
  )
}

export default FavoriteList