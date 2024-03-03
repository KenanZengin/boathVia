"use client"
import Image from 'next/image';
import Card from 'react-bootstrap/Card';

import { GoStarFill } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { ShipsCartProps } from '@/types';
import Link from 'next/link';
import { addFav } from '@/server/actions/favships';


const ShipCard = ({data}:{data:ShipsCartProps}) => {

  const {id,city,district, star, comment, category, capacity, hour_price, img_path} =  data;

  const addFavorite = () => {
    if(id){
      addFav(id).then((data)=>console.log(data))
    }
  }
  
  return (
    <Card className='test'>
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
      <span role="button" className='addFav' onClick={addFavorite}>
        <IoMdHeartEmpty size={28} />
      </span>
    </Card>
  )
}

export default ShipCard