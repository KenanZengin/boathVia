import Image from "next/image";

import DetailCarousel from "./detail-carousel";
import inside_1 from "../../public/img/ships/inside.png"
import inside_2 from "../../public/img/ships/inside2.png"
import inside_3 from "../../public/img/ships/inside3.png"
import inside_4 from "../../public/img/ships/inside4.png"


const ShipImages = ({img_path}:{img_path:string | undefined}) => {

    return (
    <div className="ship-imgs">
        <div>
            <span><Image src={img_path || ""} alt="ships" priority fill={true} sizes="100w" /></span>
        </div>
        <div>
            <span><Image src={inside_1} alt="ship-inside" /></span>
        </div>
        <div>
            <span><Image src={inside_2} alt="ship-inside" /></span>
        </div>
        <div>
            <span><Image src={inside_3} alt="ship-inside" /></span>
        </div>
        <div>
           <span><Image src={inside_4} alt="ship-inside" /></span>
        </div>
        <DetailCarousel img_path={img_path} />
    </div>
  )
}

export default ShipImages


