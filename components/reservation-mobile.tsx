"use client"
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

import { IoMdClose } from "react-icons/io";



const ReservationMobile = ({children}:{children: React.ReactNode}) => {

    const [show, setShow] = useState<boolean>(false);

    const handleShow  = () => setShow(() => true);

    const handleClose = () => setShow(() => false);
    

  return (
    <>
        <button onClick={handleShow}>
            Check Prices
        </button>
        <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        className="reservation-modal"
        animation={true}
        >
            <div className="close-model">
                <button onClick={handleClose}>
                    <IoMdClose size={28} />
                </button>
            </div> 
            <div className="modal-wrapper">      
                {children}
            </div>
        </Modal>
    </>
  )
}

export default ReservationMobile