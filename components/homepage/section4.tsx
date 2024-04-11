import Link from 'next/link';
import { getAllServices } from '@/hooks/server/getShips';
import OrganizationList from '../organization-list';


const Section_4 = async () => {
  
  const data = await getAllServices();


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