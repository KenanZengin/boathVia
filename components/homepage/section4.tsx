import Image from "next/image"
import Link from 'next/link';

import data from "../../data/organization.json"
import OrganizationCard from "../cart/organization-card";
import {  OrganizationCartProps } from '@/types';

const Section_4 = ( ) => {
    
  return (
    <section className='section_4' >
      <div className="head">
        <div className="title">
          <h3>What do you want to rent a boat for?</h3>
          <p>Organizations you can do by renting an hourly boat</p>
        </div>
        <Link href={"/"}>
          See All &gt;
        </Link>
      </div>
      <div className="organization-cards">
        {data.map((data:OrganizationCartProps)=>(
            <OrganizationCard data={data} key={data.id}/>
        ))}
      </div>
    </section>
  )
}

export default Section_4