
import Link from "next/link"


const getShipsData = async (location :string="All", sort?: string) => {
const res = await fetch(`http://localhost:3000/api/ships/getShips?location=${location}&sort=${sort}`)
const data = await res.json();

return data
}
  



const Categories = async ({searchParams}:{searchParams:{[key:string]: string}}) => {

  const data = await getShipsData(searchParams.location,searchParams.sort);

  return (
   <main className="categories_ships">
        <section className="categories_ships_wrapper">   
            <div className="info">
                <div className="bread-crumb">
                    <nav>
                        <Link href={"/"}>
                            <span>teknevia.com</span>
                        </Link>
                        <Link href={"/ship-charter?location=All"}>
                            <span>Boat Organizations on Bosphorus</span>
                        </Link>
                        <Link href={"#"}>
                            <span>{searchParams.categoryname}</span>
                        </Link>
                    </nav>
                </div>
                
                <div className="title">
                    <h1>{searchParams.categoryname}</h1>
                </div>
                
            </div>
            <div className="steps">
                <p>
                    <span>1</span>
                    Determine the organization you will do with its contents
                </p>
                <p>
                    <span>2</span>
                    Get offers from our boat owners!</p>
                <p>
                    <span>3</span>
                    Accept the offer you like and make your payment!
                </p>
            </div>
        </section>
        <div className="ships">
            <div className="ships-wrapper">
            {/* {ships && ships.map((item)=>(
                <ShipCard data={item} key={item.id} />
                )) 
            } */}
            </div>
      </div>
   </main>
  )
}

export default Categories