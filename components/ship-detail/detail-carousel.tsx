"use client"

import Image from 'next/image';
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { IoIosResize } from "react-icons/io";
import { IoMdClose } from 'react-icons/io';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const DetailCarousel = ({img_path}:{img_path:string | undefined}) => {

    const [show, setShow] = useState<boolean>(false);

    const handleShow  = () => setShow(() => true);

    const handleClose = () => setShow(() => false);

    return (
        <div className="detail-carousel">
            <p className='carousel-btn' onClick={handleShow}>
                <IoIosResize size={20} />See All Photos
            </p>
            <Modal
                show={show}
                backdrop="static"
                keyboard={false}
                className="carousel-modal"
            >
                <div className="close-model">
                    <button onClick={handleClose}>
                        <IoMdClose size={25} />
                    </button>
                </div> 
                <div className="modal-wrapper">      
                        <Swiper
                            pagination={true}
                            navigation={true}
                            modules={[Pagination,Navigation]}
                            cssMode
                        >
                            <SwiperSlide>
                                <Image src={img_path || ""} alt="ships"    fill={true}   />
                            </SwiperSlide> 
                            <SwiperSlide>
                                <Image src={"/img/ships/inside.png"} alt="ship-inside"  fill={true}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={"/img/ships/inside2.png"} alt="ship-inside"   fill={true}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={"/img/ships/inside3.png"} alt="ship-inside"  fill={true}/>
                            </SwiperSlide>
                            <SwiperSlide>
                            <Image src={"/img/ships/inside4.png"} alt="ship-inside"   fill={true}/>
                            </SwiperSlide>
                        </Swiper>
                </div>
            </Modal>
        </div>
    )
}

export default DetailCarousel