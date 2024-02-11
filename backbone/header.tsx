import Image from 'next/image';
import Link from 'next/link';

import logo from "../public/img/logo.png"
import ChangeLang from '@/components/header/lang';
import UserSection from '@/components/header/user-section';

const Header = () => {
  return (
    <header className='header'>
      <div className="header-web">
        <div className="header-web-left">
          <div className="headlogo">
            <Link href={"/"}>
              <Image src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="header-web-right">
          <div className="btnsarea">
            <div className="btnsarea-item">
              <Link href={"/"}>
                Rental Boats
              </Link>
            </div>
            <div className="btnsarea-item">
              {/*TODO: ADD LANGUAGE API  */}
              <ChangeLang />
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