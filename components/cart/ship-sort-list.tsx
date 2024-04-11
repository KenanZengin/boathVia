"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { ShipsCartProps } from '@/types';
import ShipCard from '../cart/ship-card';


const ShortList = ({
  data,
  maksLimit, 
  userId, 
  userFavList
}:{
  userFavList:string[] | undefined,
  data:Array<ShipsCartProps> | undefined, 
  maksLimit:number, userId: string | undefined} 
) => {

  return (
    <Swiper
      pagination={true}
      autoplay={true}
      slidesPerView={"auto"}    
    > 
      {data?.map((data: ShipsCartProps, i: number)=>(
        ( i < maksLimit 
          && 
          <SwiperSlide key={i}>
            <ShipCard data={data} userId={userId} userFavList={userFavList}  /> 
          </SwiperSlide> 
        )
        ))}
    </Swiper>
  )
}

export default ShortList