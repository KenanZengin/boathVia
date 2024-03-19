
import Link from "next/link";
import Section_1 from "./section1"
import Section_2 from "./section2"
import Section_3 from "./section3"
import Section_4 from "./section4";
import Section5 from "./section5";


const Sections = async () => {


  return (
    <div className="sections">
      <Section_1 />
      <Section_2 />
      <Section_3 maks={12} title="Boats You Can Book Instantly" comment="Boats that you can book without waiting for the owner&apos;s approval" link={true}/>
      <Section_4 />
      <Section5 />
    </div>
  )
}

export default Sections