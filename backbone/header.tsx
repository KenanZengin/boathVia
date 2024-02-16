"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ChangeLang from '@/components/header/lang';
import UserSection from '@/components/header/user-section';

import logo from "../public/img/basic/logo.png"
import logo2 from "../public/img/basic/logo_2.png"
import SearchInput from '@/components/search-input';

const Header = () => {

  const pathname = usePathname();
  
  const [scrollY, setScrollY] = useState<number>(0);
  const [test,setTest] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
 

  return (
    <header className={`header ${pathname === "/"? scrollY > 482 ? "sticky_header" : "" : "sticky_header"}`}>
      <div className="header-web container_add">
        <div className="header-web-left">
          <div className="headlogo">
            <Link href={"/"}>
              <Image src=
                {
                  pathname === "/"  ? scrollY > 482 
                    ? logo2 : logo
                    : logo2
                } 
                alt="logo" 
              />
            </Link>
          </div>
        </div>
        {pathname === "/" ? scrollY > 482 
          ?   
            ( <div className="header-web-center">
                <SearchInput widthValue={23} />
              </div>
            ) : "" 
          : (
              <div className="header-web-center">
                <SearchInput widthValue={23} />
              </div>
            )
          }
        <div className="header-web-right">
          <div className="btnsarea">
            <div className="btnsarea-item">
              <Link href={"/"} >
                Rental Boats
              </Link>
            </div>
            <div className="btnsarea-item">
              {/*TODO: ADD LANGUAGE API  */}
              <ChangeLang  />
            </div>
            <div className="btnsarea-item user-section">
              {/*TODO: ADD USER API  */}
              <UserSection />
            </div>
          </div>
        </div>
        
      </div>
    </header>
  )
}

export default Header