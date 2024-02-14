"use client"

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ShipsCartProps } from '@/types';
import ShipCard from '../cart/ship-card';
import 'swiper/css';






const Section_3 = ({data}: {data:Array<ShipsCartProps>} ) => {
 
  return (
    <section className='section_3' >
      <div className="head">
        <div className="title">
          <h3>Boats You Can Book Instantly</h3>
          <p>Boats that you can book without waiting for the owner's approval</p>
        </div>
        <Link href={"/"}>
          See All &gt;
        </Link>
      </div>
      <Swiper
          slidesPerView={1}
          defaultValue={1}
          lazyPreloadPrevNext={1}
        >
        <SwiperSlide  >
          {data.map((data: ShipsCartProps)=>(
            data.id < 6 && <ShipCard data={data} key={data.id} /> 
          ))}
        </SwiperSlide>
        <SwiperSlide >
          {data.map((data: ShipsCartProps)=>(
            data.id >= 6  && data.id < 11 && <ShipCard data={data}  key={data.id} />
          ))}
        </SwiperSlide>
        <SwiperSlide >
          {data.map((data: ShipsCartProps)=>(
            data.id >= 11  && data.id < 13 && <ShipCard data={data} key={data.id} />
          ))}
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Section_3