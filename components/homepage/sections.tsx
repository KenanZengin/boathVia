import Image from 'next/image'

import Sea from "../../public/img/homepage.jpg"
import SearchInput from '../search-input'

const Sections = () => {
  return (
    <div className="sections">
        <section className='section_1'>
            <div className="abso-img">
                <span>
                    <Image src={Sea} alt="HomePage Image" />
                </span>
            </div>
            <div className="searching">
                <h1 className="title">
                    Rent a boat with one click!
                </h1>
                <SearchInput />
                <p>
                    Turkey's first boat rental platform where you can book instantly!
                </p>
            </div>
        </section>
    </div>
  )
}

export default Sections