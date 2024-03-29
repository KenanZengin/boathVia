
import Link from "next/link"

import OrganizationCard from "@/components/cart/organization-card"
import {  OrganizationCartProps } from '@/types';



const getServices = async () => {
  const res = await fetch(`http://localhost:3000/api/ships/getServices?location=All`);
  const data = await res.json();

  return data
}

const Services = async () => {

  const data = await getServices();

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
              <div className="organization-cards">
                  <p className="services-title">
                    Popular Organizations
                  </p>
                  <div className="services-list">
                    {data?.map((data:OrganizationCartProps, i: number)=>(
                        i < 4 && <OrganizationCard data={data} key={data.id}/>
                    ))}
                  </div>
              </div>
              <div className="organization-cards">
                  <p className="services-title">
                  Corporate Organizations
                  </p>
                  <div className="services-list">
                    {data?.map((data:OrganizationCartProps, i: number)=>(
                      i >= 4 && i < 8 && <OrganizationCard data={data} key={data.id}/>
                    ))}   
                  </div>
              </div>
              <div className="organization-cards">
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