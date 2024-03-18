import { auth } from "@/auth";
import { currentUser } from "@/hooks/server/auth"
import { SessionContext, getSession, useSession } from "next-auth/react"




const FavoriteListt = async () => {


  //const favShip = await getUserFavShip();

  //console.log(favShip);
  
  const auths = await auth();
  console.log(auths);
  
  

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
      
        TEST
    </div>
   </div>
  )
}

export default FavoriteListt