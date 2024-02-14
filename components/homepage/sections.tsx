
import Section_1 from "./section1"
import Section_2 from "./section2"
import Section_3 from "./section3"
import Section_4 from "./section4";
import Section5 from "./section5";


export async function getShipsData(){

  const res = await fetch("http://localhost:3000/api/getShips",{cache:"no-cache"});

  if(!res.ok){
    throw new Error("Api not response")
  }

  const data = await res.json()
  return data;
}


const Sections = async () => {

  const getData = await getShipsData();
  
  return (
    <div className="sections">
        <Section_1 />
        <Section_2 />
        <Section_3 data={getData.data}/>
        <Section_4 />
        <Section5 />
    </div>
  )
}

export default Sections