"use client"

import Image from 'next/image';
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { IoIosResize } from "react-icons/io";
import { IoMdClose } from 'react-icons/io';
import inside_1 from "../../public/img/ships/inside.png"
import inside_2 from "../../public/img/ships/inside2.png"
import inside_3 from "../../public/img/ships/inside3.png"
import inside_4 from "../../public/img/ships/inside4.png"

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
                                <Image src={img_path || ""} alt="ships" priority   fill={true}  sizes='100vw' />
                            </SwiperSlide> 
                            <SwiperSlide>
                                <Image src={inside_1} alt="ship-inside"  fill={true} sizes='100vw'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={inside_2} alt="ship-inside"   fill={true} sizes='100vw'/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={inside_3} alt="ship-inside"  fill={true} sizes='100vw'/>
                            </SwiperSlide>
                            <SwiperSlide>
                            <Image src={inside_4} alt="ship-inside"   fill={true} sizes='100vw'/>
                            </SwiperSlide>
                        </Swiper>
                </div>
            </Modal>
        </div>
    )
}

export default DetailCarousel