import Image from "next/image";
import DetailCarousel from "./detail-carousel";


const ShipImages = ({img_path}:{img_path:string | undefined}) => {

    return (
    <div className="ship-imgs">
        <div>
            <span><Image src={img_path || ""} alt="ships" fill={true}   /></span>
        </div>
        <div>
            <span><Image src={"/img/ships/inside.png"} alt="ship-inside"  fill={true}/></span>
        </div>
        <div>
            <span><Image src={"/img/ships/inside2.png"} alt="ship-inside"   fill={true}/></span>
        </div>
        <div>
            <span><Image src={"/img/ships/inside3.png"} alt="ship-inside"   fill={true}/></span>
        </div>
        <div>
           <span><Image src={"/img/ships/inside4.png"} alt="ship-inside"   fill={true}/></span>
        </div>
        <DetailCarousel img_path={img_path} />
    </div>
  )
}

export default ShipImages


