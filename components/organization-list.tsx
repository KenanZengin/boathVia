"use client"
import OrganizationCard from "./cart/organization-card";
import {  OrganizationCartProps } from '@/types';
import {Swiper, SwiperSlide} from 'swiper/react';

const OrganizationList = ({data}:{data:any}) => {
  return (
    <div className="organization-cards">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={0}
        pagination={{
        clickable: true,
        }}
        className="mySwiper"
      >
        {data?.map((data:OrganizationCartProps, i:number)=>(
          i < 4 && 
            <SwiperSlide key={i}>
              <OrganizationCard data={data} key={data.id}/>
            </SwiperSlide>
        ))}
        </Swiper>
      </div>
   )
}

export default OrganizationList