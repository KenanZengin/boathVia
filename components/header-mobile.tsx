
import Link from 'next/link'
import { Modal } from 'react-bootstrap';
import { useState } from 'react';

import { IoIosSearch, IoMdClose } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../public/img/basic/logo_2.png"
import Image from 'next/image';


const HeaderMobile = () => {

    const [show, setShow] = useState<boolean>(false);

    const handleShow  = () => setShow(() => true);

    const handleClose = () => setShow(() => false);

    const shareOnWhatsapp = () => { 
        
        const href = window.location.href;
        
        window.open("https://api.whatsapp.com/send/?phone=%2B905457794525&text=Hello%2C+I+would+like+to+get+information+about+Teknevia.&type=phone_number&app_absent=0");
    };
  return (
    <div className="header-mobile-wrapper">
        <nav className="mobile-items">
            <Link href={"/ship-charter?location=All"}>
                <IoIosSearch size={18} />
                <span>Discover</span>
            </Link>
            <Link href={"/auth/login"}>
                <AiOutlineUser size={18} />
                <span>Login</span>
            </Link>
            <p onClick={handleShow}>
                <FiPlus size={18} />
                <span>Other</span>
            </p>
            <p onClick={shareOnWhatsapp}>
                <FaWhatsapp size={18} />
                <span>Support</span>
            </p>
        </nav>
        <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        className="menu-modal"
        animation={true}
      >
            <div className="close-model">
                <button onClick={handleClose}>
                    <IoMdClose size={28} />
                </button>
            </div> 
            <div className="modal-wrapper">      
                <nav>
                    <span>
                        <Image src={logo} alt="logo" width={169} height={49} />
                    </span>
                </nav>
            </div>
       </Modal>
    </div>
  )
}

export default HeaderMobile