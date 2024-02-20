import Link from 'next/link';
import OrganizationCard from "../cart/organization-card";
import {  OrganizationCartProps } from '@/types';

import { getServices } from '@/server/actions/ships-event';

const Section_4 = async () => {

  const { services, error } = await getServices();
  

    
  return (
    <section className='section_4' >
      <div className="head">
        <div className="title">
          <h3>What do you want to rent a boat for?</h3>
          <p>Organizations you can do by renting an hourly boat</p>
        </div>
        <Link href={"/services/allservices"}>
          See All &gt;
        </Link>
      </div>
      <div className="organization-cards">
        {services?.map((data:OrganizationCartProps, i:number)=>(
          i < 4 && <OrganizationCard data={data} key={data.id}/>
        ))}
      </div>
    </section>
  )
}

export default Section_4