"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { ShipsCartProps } from '@/types';
import ShipCard from '../cart/ship-card';
import 'swiper/css';


const ShortList = ({data, maksLimit}: {data:Array<ShipsCartProps> | undefined, maksLimit:number} ) => {

  return (
   
    <Swiper
        slidesPerView={5}
        defaultValue={5}
        lazyPreloadPrevNext={5}
        loopAdditionalSlides={5}
      >
      {data?.map((data: ShipsCartProps, i: number)=>(
          i < maksLimit && <SwiperSlide key={i}>
          <ShipCard data={data}  /> 
        </SwiperSlide> 
        ))}
    </Swiper>
  )
}

export default ShortList