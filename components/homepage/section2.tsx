"use client"


import { Swiper, SwiperSlide } from 'swiper/react';


import { LuCalendarCheck } from "react-icons/lu";
import { LuWallet } from "react-icons/lu";
import { GoShieldLock } from "react-icons/go";

const Section_2 = () => {
  return (
    <section className='section_2'>
        <div className="carts">
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={0}
                pagination={{
                clickable: true,
                }}
                className="mySwiper"
            >
                <SwiperSlide >
                    <div className="cart_2">
                        <div className="cart_2_wrapper">
                            <div className="cart_imj">
                                <LuCalendarCheck size={55} />
                            </div>
                            <div className="cart-info">
                                <p>Instant Booking</p>
                                <span>You can instantly rent boats using the calender feature</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide> 
                <SwiperSlide>
                    <div className="cart_2">
                        <div className="cart_2_wrapper">
                            <div className="cart_imj">
                            <LuWallet size={55} />
                            </div>
                            <div className="cart-info">
                                <p>Best Price Guarantee</p>
                                <span>Boat owners directly determine the prices at Teknevia</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide> 
                <SwiperSlide>
                    <div className="cart_2">
                       <div className="cart_2_wrapper">
                        <div className="cart_imj">
                                <GoShieldLock size={55} />
                            </div>
                            <div className="cart-info">
                                <p>Secure Reservation</p>
                                <span>Your prepayment will be kept with us until your tour is completed.</span>
                            </div>
                       </div>
                    </div>
                </SwiperSlide> 
            </Swiper>
        </div>
    </section>
  )
}

export default Section_2