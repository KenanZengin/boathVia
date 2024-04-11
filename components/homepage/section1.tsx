import Image from 'next/image'
import SearchInput from '../search-input'
import Sea from "../../public/img/basic/homepage.jpg"


const Section_1 = () => {

    return (
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
            <SearchInput widthValue={23} />
            <p>
                Turkey&apos;s first boat rental platform where you can book instantly!
            </p>
        </div>
    </section>
  )
}

export default Section_1