import Image from 'next/image';
import {  OrganizationCartProps } from '@/types';


const OrganizationCard = ({data}:{data:OrganizationCartProps}) => {

  const {id, kind, info, img_path} = data;

  return (
    <div className="organization-card">
            <div className="card-img">
                <Image src={img_path} alt="organization_img" width={288} height={445} />
            </div>
            <div className="card-content">
                <span className="kind">
                    {kind}
                </span>
                <p className="info">{info}</p>
            </div>
        </div>
  )
}

export default OrganizationCard