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
          <p>Boats that you can book without waiting for the owner&apos;s approval</p>
        </div>
        <Link href={"/ship-charter?location=All"}>
          See All &gt;
        </Link>
      </div>
      <Swiper
          slidesPerView={5}
          defaultValue={5}
          lazyPreloadPrevNext={5}
          loopAdditionalSlides={5}
        >
        {data.map((data: ShipsCartProps, i: number)=>(
            <SwiperSlide key={i}>
              <ShipCard data={data}  /> 
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  )
}

export default Section_3