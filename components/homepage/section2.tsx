"use client"


import { Swiper, SwiperSlide } from 'swiper/react';
import { ShipsCartProps } from '@/types';
import ShipCard from '../cart/ship-card';
import 'swiper/css';
import 'swiper/css/pagination';

import { LuCalendarCheck } from "react-icons/lu";
import { LuWallet } from "react-icons/lu";
import { GoShieldLock } from "react-icons/go";
import { Pagination } from 'swiper/modules';

const Section_2 = () => {
  return (
    <section className='section_2'>
        <div className="carts">
            {/* <div className="cart_2">
                <div className="cart_imj">
                    <LuCalendarCheck size={55} />
                </div>
                <div className="cart-info">
                    <p>Instant Booking</p>
                    <span>You can instantly rent boats using the calender feature</span>
                </div>
            </div>
            <div className="cart_2">
                <div className="cart_imj">
                    <LuWallet size={55} />
                </div>
                <div className="cart-info">
                    <p>Best Price Guarantee</p>
                    <span>Boat owners directly determine the prices at Teknevia</span>
                </div>
            </div>
            <div className="cart_2">
                <div className="cart_imj">
                    <GoShieldLock size={55} />
                </div>
                <div className="cart-info">
                    <p>Secure Reservation</p>
                    <span>The prepayment will not be credited to the boat owners account until your tour is complete</span>
                </div>
            </div> */}
            <Swiper
                 slidesPerView={1}
                 spaceBetween={0}
                 pagination={{
                   clickable: true,
                 }}
                 breakpoints={{
                //    640: {
                //      slidesPerView: 2,
                //      spaceBetween: 20,
                //    },
                   768: {
                     slidesPerView: 2,
                     spaceBetween: 40,
                   },
                   1024: {
                     slidesPerView: 3,
                     spaceBetween: 50,
                   },
                 }}
                 modules={[Pagination]}
                 className="mySwiper"
                
            >
                <SwiperSlide>
                    <div className="cart_2">
                    <div className="cart_imj">
                        <LuCalendarCheck size={55} />
                    </div>
                    <div className="cart-info">
                        <p>Instant Booking</p>
                        <span>You can instantly rent boats using the calender feature</span>
                    </div>
                    </div>
                </SwiperSlide> 
                <SwiperSlide>
                    <div className="cart_2">
                    <div className="cart_imj">
                        <LuCalendarCheck size={55} />
                    </div>
                    <div className="cart-info">
                        <p>Instant Booking</p>
                        <span>You can instantly rent boats using the calender feature</span>
                    </div>
                    </div>
                </SwiperSlide> 
                <SwiperSlide>
                    <div className="cart_2">
                    <div className="cart_imj">
                        <LuCalendarCheck size={55} />
                    </div>
                    <div className="cart-info">
                        <p>Instant Booking</p>
                        <span>You can instantly rent boats using the calender feature</span>
                    </div>
                    </div>
                </SwiperSlide> 
            </Swiper>
        </div>
    </section>
  )
}

export default Section_2