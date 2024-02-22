import Image from 'next/image';
import {  OrganizationCartProps } from '@/types';
import Link from 'next/link';


const OrganizationCard = ({data}:{data:OrganizationCartProps}) => {



  const { kind, info, img_path_2} = data;

  return (
    <div className="organization-card">
        <Link href={`http://localhost:3000/services/category?categoryname=${kind}`}>
            <div className="card-img">
                <Image src={img_path_2} alt="organization_img" width={288} height={445} />
            </div>
            <div className="card-content">
                <span className="kind">
                    {kind}
                </span>
                <p className="info">{info}</p>
            </div>
        </Link>
    </div>
  )
}

export default OrganizationCard