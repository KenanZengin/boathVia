"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Session } from 'next-auth';
import ChangeLang from '@/components/header/lang';
import UserSection from '@/components/header/user-section';
import SearchInput from '@/components/search-input';
import HeaderMobile from '@/components/header-mobile';
import mainLogo from "../public/img/basic/logo.png"
import mainLogo2 from "../public/img/basic/logo_2.png"


const Header = ({session}:{session:Session | null}) => {

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const location = searchParams.get("location");

  const [scrollY, setScrollY] = useState<number>(0);
  
  useEffect(() => {
    if(pathname === "/"){
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };       
    }
  }, [pathname]);
  

  return (
   <>
      <header className={`web-header header ${ !pathname.startsWith("/ship-detail/") ? pathname === "/" || pathname ==="/helpcenter" ? scrollY > 482 ? "sticky_header" : "" : "sticky_header": "other_page" }`}>
        <div className="header-web container_add">
          <div className={`header-web-left ${pathname === "/" && scrollY > 482 ? "scroll-img" : ""} ${pathname !=="/" ? "scroll-img" : ""}`}>
            <div className="headlogo">
              <Link href={"/"}>
                <Image src=
                  {
                    pathname === "/" || pathname ==="/helpcenter"  ? scrollY > 482 
                      ? mainLogo2 : mainLogo
                      : mainLogo2
                  } 
                  alt="logo" 
                />
              </Link>
            </div>
          </div>
          {pathname === "/" || pathname ==="/helpcenter" ? scrollY > 482 
            ?   
              ( <div className="header-web-center">
                  <SearchInput widthValue={23} location={location} />
                </div>
              ) : "" 
            : (
                <div className="header-web-center">
                  <SearchInput widthValue={23} location={location} pathname={pathname}/>
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
                <ChangeLang  />
              </div>
              <div className="btnsarea-item user-section">
                <UserSection session={session} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="header-mobile">
        <HeaderMobile pathname={pathname} session={session} />
      </div>
   </>
  )
}

export default Header