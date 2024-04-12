"use client"
import Image from "next/image";
import { Pagination } from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import inside_1 from "../public/img/ships/inside.png"
import inside_2 from "../public/img/ships/inside2.png"
import inside_3 from "../public/img/ships/inside3.png"
import inside_4 from "../public/img/ships/inside4.png"

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
          <Image src={img_path || ""} alt="ships" priority fill sizes="100"  />
        </SwiperSlide>
        <SwiperSlide>
            <Image src={inside_1} alt="ship-inside"/>            
        </SwiperSlide>
        <SwiperSlide>
        <Image src={inside_2} alt="ship-inside"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={inside_3} alt="ship-inside" />
        </SwiperSlide>
        <SwiperSlide>
            <Image src={inside_4} alt="ship-inside" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default DetailSwiper