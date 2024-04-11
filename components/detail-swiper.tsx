"use client"
import Image from "next/image";
import { Pagination } from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";


const DetailSwiper = ({img_path}:{img_path:string | undefined}) => {
  return (
    <div className="swiper-details">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={0}
        className="detail_swiper"
        pagination
        modules={[Pagination]}
      >   
        <SwiperSlide>
          <Image src={img_path || ""} alt="ships"    fill={true}   />
        </SwiperSlide>
        <SwiperSlide>
            <Image src={"/img/ships/inside.png"} alt="ship-inside"     fill={true}/>            
        </SwiperSlide>
        <SwiperSlide>
        <Image src={"/img/ships/inside2.png"} alt="ship-inside"     fill={true}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={"/img/ships/inside3.png"} alt="ship-inside"     fill={true}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={"/img/ships/inside4.png"} alt="ship-inside"     fill={true}/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default DetailSwiper