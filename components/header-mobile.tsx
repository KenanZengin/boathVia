
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { logout } from '@/hooks/client/logout';

import { IoIosSearch, IoMdClose } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../public/img/basic/logo_2.png"
import Image from 'next/image';
import { SlHome } from "react-icons/sl";
import { LuPartyPopper } from "react-icons/lu";
import { FiLogIn } from "react-icons/fi";
import { BiHelpCircle } from "react-icons/bi";
import { Session } from 'next-auth';
import { LuShip } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";



const HeaderMobile = ({pathname,session}:{pathname:string,session:Session | null}) => {

    const [show, setShow] = useState<boolean>(false);
    const router = useRouter();

    const handleShow  = () => setShow(() => true);

    const handleClose = () => setShow(() => false);

    const shareOnWhatsapp = () => { 
        
        const href = window.location.href;
        
        window.open("https://api.whatsapp.com/send/?phone=%2B905457794525&text=Hello%2C+I+would+like+to+get+information+about+Teknevia.&type=phone_number&app_absent=0");
    };

    const routerPush = (url:string) => {
        setShow(() => false);
        router.push(url)
    }

    const logOut = () => {
        logout();
    }
  return (
    <div className="header-mobile-wrapper">
        <nav className="mobile-items">
            <p onClick={() => routerPush("/")} className={`${pathname === "/" ? "actived" : ""}`}>
                <SlHome size={18}/>
                Home Page
            </p>
            <p onClick={() => routerPush("/ship-charter?location=All")} className={`${pathname === "/ship-charter" ? "actived" : ""}`}>
                <IoIosSearch size={18} />
                <span>Discover</span>
            </p>
            {session 
                ?
                <>
                   <p onClick={() => routerPush("/reservation")} className={`${pathname === "/reservation" ? "actived" : ""}`}>
                        <LuShip size={18}/>
                        Reservations
                    </p> 
                    <p onClick={() => routerPush("/favorites")} className={`${pathname === "/favorites" ? "actived" : ""}`}>
                        <IoIosHeartEmpty size={18}/>
                        Favorites
                    </p> 
                </>
                :
                <Link href={"/auth/login"}>
                    <AiOutlineUser size={18} />
                    <span>Login</span>
                </Link>
            }
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
                        <Image src={logo} alt="logo" width={163} height={45} />
                    </span>
                    <span onClick={() => routerPush("/")}  className={`${pathname === "/" ? "actived" : ""}`}>
                        <SlHome size={25}/>
                        Home Page
                    </span>
                    <span onClick={() => routerPush("/services/allservices")} className={`${pathname === "/services/allservices" ? "actived" : ""}`}>
                        <LuPartyPopper size={25}/>
                        Organizations
                    </span>
                    {session 
                        ?
                        <>
                            <span onClick={() => routerPush("/reservation")} className={`${pathname === "/reservation" ? "actived" : ""}`}>
                                <LuShip size={25}/>
                                Reservations
                            </span>
                            <span onClick={() => routerPush("/favorites")} className={`${pathname === "/favorites" ? "actived" : ""}`}>
                                <IoIosHeartEmpty size={25}/>
                                Favorites
                            </span> 
                            <span onClick={() => routerPush("/profile")} className={`${pathname === "/profile" ? "actived" : ""}`}>
                                <FaRegUserCircle size={25}/>
                                Personal Information
                            </span>
                            <span onClick={logOut}>
                                <FiLogIn size={25}/>
                                Sign out
                            </span>
                        </>   
                        :  
                        <span onClick={() => routerPush("/auth/register")} className={`${pathname === "/auth/register" ? "actived" : ""}`}>
                            <FiLogIn size={25}/>
                            Register
                        </span>
                    }
                    <span onClick={() => routerPush("/helpcenter")} className={`${pathname === "/helpcenter" ? "actived" : ""}`}>
                        <BiHelpCircle size={25}/>
                        Help Center
                    </span>
                </nav>
            </div>
       </Modal>
    </div>
  )
}

export default HeaderMobile