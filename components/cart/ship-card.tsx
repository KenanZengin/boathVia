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

const ShipCard = ({data,userFavList,userId,favorite}:{data:ShipsCartProps,userFavList?:string[] | undefined,userId?:string | undefined,favorite?:boolean}) => {
  
  const {id,city,district, star, comment, category, capacity, hour_price, img_path} =  data;
 
  const router = useRouter();
  const pathName = usePathname();
  const [favStatus, setFavStatus] = useState<boolean | undefined | string >(id && userId && userFavList?.includes(id))
  const [noUser,setNoUser] = useState<string | undefined>()
  const [successfavMessage,setSuccessFavMessage] = useState<string | undefined>()
  const [deletefavMessage,setDeleteFavMessage] = useState<string | undefined>()


  
  

  const addFavorite = () => {


    if(data && data.id && userId){
      setFavStatus(() => !favStatus)  
      addFav(data.id,userId).then((data)=>{
        //setFavStatus(()=>data.add);
        console.log(data);
        
        if(data.add){
          setSuccessFavMessage("Added to your favorite list")
        }
        if(!data.add){
          setDeleteFavMessage("Deleted to your favorite list")
        }
        router.refresh()

      });
    }else{
      setNoUser("You must log in to add to your favorite list")
    }
  }
 
  
  return (
    
    <Card className='card'>
      <Link href={`/ship-detail/${id}`}>
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
    </Card>

  )
}

export default ShipCard