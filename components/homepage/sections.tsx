
import Section_1 from "./section1"
import Section_2 from "./section2"
import Section_3 from "./section3"
import Section_4 from "./section4";
import Section5 from "./section5";
import { getShips } from "@/server/actions/ships";


const Sections = async () => {

  const data = await getShips();
  
  return (
    <div className="sections">
        <Section_1 />
        <Section_2 />
        <Section_3 data={data.ships}/>
        <Section_4 />
        <Section5 />
    </div>
  )
}

export default Sections