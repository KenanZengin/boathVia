"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState} from 'react';
import { useSession } from 'next-auth/react';
import Card from 'react-bootstrap/Card';
import { addFav } from '@/server/actions/favships';
import { ShipsCartProps } from '@/types';
import FormError from '../form-error';
import FormSuccess from '../form-success';

import { GoStarFill } from "react-icons/go";
import { IoIosHeart, IoMdHeartEmpty } from 'react-icons/io';
import { PiHeartDuotone } from "react-icons/pi";
import { usePathname, useRouter } from 'next/navigation';
import { MdError } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';

const ShipCard = ({data,userFavList,userId,favorite}:{data:ShipsCartProps,userFavList?:string[] | undefined,userId?:string | undefined,favorite?:boolean}) => {
  
  const {id,city,district, star, comment, category, capacity, hour_price, img_path} =  data;
 
  const router = useRouter();
  const pathName = usePathname();
  const [favStatus, setFavStatus] = useState<boolean | undefined | string >(id && userId && userFavList?.includes(id))
  const [success,setSuccessMessage] = useState<string | undefined>()
  const [error,setErrorMessage] = useState<string | undefined>()


  
  

  const addFavorite = () => {

    setErrorMessage(undefined);
    setSuccessMessage(undefined)
    if(data && data.id && userId){
      setFavStatus(() => !favStatus);  
    }

    if(data && data.id){
      addFav(data.id,userId).then((data)=>{
        if(data.error){
          setErrorMessage(data.error)
        }
        if(data.success){
          setSuccessMessage(data.success)
          router.refresh();
        }
      });
    }

  }
 
  
  return (
    
    <>
      <Card className='card'>
        <Link href={`/ship-detail/${id}`} target="_blank">
          <Image src={img_path} alt='ship' width={300} height={240}  />
          <Card.Header>
            <p className="location">
              {`${city} ${district}`}
            </p>
            <span className="star">           
              <GoStarFill size={15} />
              {star > 0 ? star : ""}&nbsp;&nbsp;
              {comment > 0 ? `(${comment})` : "New"}
            </span>
          </Card.Header>
          <Card.Body>  
            <p className='category'>
              {category}
            </p>
            <p className="capacity">
              Capacity: {capacity} people
            </p>
          </Card.Body>
          <Card.Footer>
            <p className="price">TRY {hour_price}</p> <span className='time'>/hour</span>
          </Card.Footer>
          <div className="card-action">
            <p className="reservesion">
              ⚡️ Immediately Reservable 
            </p>
          
          </div>
        </Link>
        <span onClick={addFavorite} className={`addFav ${favStatus || favorite ? "added" : "noadded"}`}>
          <PiHeartDuotone className={`${favStatus || favorite ? "heart" : ""}`} size={28} />
        </span>
        {error ?  <div className="form-message">
            <div className="form-message-content error">
                <p> <MdError size={24}/>{error}</p>
            </div>
        </div> : ""}
        {success &&  <div className="form-message">
            <div className="form-message-content success">
                <p> <FaCheck size={24}/>{success}</p>
            </div>
        </div>}
      </Card>
      
    </>
  )
}

export default ShipCard