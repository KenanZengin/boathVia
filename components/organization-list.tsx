"use client"
import OrganizationCard from "./cart/organization-card";
import {  OrganizationCartProps } from '@/types';
import {Swiper, SwiperSlide} from 'swiper/react';

const OrganizationList = ({data,min_slider=0,max_slider,title}:{data:OrganizationCartProps[],max_slider:number,min_slider?:number,title?:string}) => {
  return (
    <div className="organization-cards">
      {title && <p className="services-title">{title}</p>}
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={0}
        pagination={{
        clickable: true,
        }}
        className="mySwiper"
      >
        {data?.map((data:OrganizationCartProps, i:number)=>(
          i > min_slider && i < max_slider && 
            <SwiperSlide key={i}>
              <OrganizationCard data={data} key={data.id}/>
            </SwiperSlide>
        ))}
        </Swiper>
      </div>
   )
}

export default OrganizationList