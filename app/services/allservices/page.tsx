import Link from "next/link"

import OrganizationCard from "@/components/cart/organization-card"
import {  OrganizationCartProps } from '@/types';
import data from "../../../server/data/organization.json"


const Services = () => {
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
            <div className="title">
                <p>Popular Organizations</p>
            </div>
            <div className="organization-cards">
                {data.map((data:OrganizationCartProps)=>(
                    <OrganizationCard data={data} key={data.id}/>
                ))}
            </div>
      </div>
    </div>
   
  </main>
  )
}

export default Services