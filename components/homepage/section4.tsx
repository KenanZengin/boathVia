import Link from 'next/link';
import OrganizationCard from "../cart/organization-card";
import {  OrganizationCartProps } from '@/types';
import {Swiper, SwiperSlide} from 'swiper/react';
import OrganizationList from '../organization-list';


const getServices = async () => {
  const res = await fetch(`http://localhost:3000/api/ships/getServices`);
  const data = await res.json();

  return data
}


const Section_4 = async () => {

  
  const data = await getServices();


    
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
      <OrganizationList data={data} max_slider={5}/>
    </section>
  )
}

export default Section_4