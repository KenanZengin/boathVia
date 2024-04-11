
import Link from "next/link"
import OrganizationCard from "@/components/cart/organization-card"
import OrganizationList from "@/components/organization-list";
import {  OrganizationCartProps } from '@/types';
import { getAllServices } from "@/hooks/server/getShips";


const Services = async () => {

  const data = await getAllServices();


  return (
    <main className="serviceslist">
      <div className="info">
        <div className="bread-crumb">
          <nav>
            <Link href={"/"}>
              <span>teknevia.com</span>
            </Link>
            <Link href={"/ship-charter?location=All"}>
              <span>Boat Organizations on Bosphorus</span>
            </Link>
          </nav>
        </div>
        <div className="options" tabIndex={10}>
          <div className="title">
            <h1>Boat Organizations on Bosphorus</h1>
          </div> 
        </div>
      </div>
      <div className="services">
        <div className="services-wrapper">
            <OrganizationList data={data} title="Popular Organizations" max_slider={5} />
            <OrganizationList data={data} title="Corporate Organizations" min_slider={5} max_slider={9} />
            <div className="other-organization-cards">
                <p className="services-title">
                  Other Organizations
                </p>
                <div className="services-list">
                  {data?.map((data:OrganizationCartProps, i: number)=>(
                      i >= 8 && <OrganizationCard data={data} key={data.id}/>
                  ))}
                </div>
            </div>
        </div>
      </div>
    </main>
  )
} 

export default Services