import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Section5 = () => {
  return (
    <section className='section_5' >
        <div className="head">
            <div className="title">
                <h3>Boat Types</h3>
            </div>
            <Link href={"/ship-charter?location=All"}>
                See All &gt;
            </Link>
        </div>
        <div className="type-cards">
            <div className="type-card">
                <Image src={"/img/organization/rental-motoryatch.png"} alt='Motor yatch' width={384} height={317} />
                <p className='info'>Motor Yacht Charter</p>
            </div>
            <div className="type-card">
                <Image src={"/img/organization/rental-invitation-boat.png"} alt='Motor yatch' width={384} height={317} />
                <p className='info'>Party Boat Charter</p>
            </div>
        </div>
        <div className="captain">
            <div className="boat-text">
                <p>Are you a Boat Owner?</p>
                <span>Become a Teknevia partner for free and get the chance to get reservations 24/7.</span>
            </div>
            <div className="captain-img">
                <Image src={"/img/basic/captain.png"} alt='captain' fill={true}/>
            </div>
        </div>
  </section>
  )
}

export default Section5