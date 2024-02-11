import Image from 'next/image'

import Sea from "../../public/img/homepage.jpg"

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
                <h1>Rent a boat with one click!</h1>
            </div>
        </section>
    </div>
  )
}

export default Sections