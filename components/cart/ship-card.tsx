"use client"
import Image from 'next/image';
import Card from 'react-bootstrap/Card';

import { GoStarFill } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { ShipsCartProps } from '@/types';


const ShipCard = ({data}:{data:ShipsCartProps}) => {

  const {location, star, comment, category, capacity, hour_price, img_path} =  data;
  
  return (
    <Card className='test'>
        <Image src={img_path} alt='ship' width={300} height={240}  />
        <Card.Header>
          <p className="location">
            {location}
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
          <span role="button">
            <IoMdHeartEmpty size={28} />
          </span>
        </div>
    </Card>
  )
}

export default ShipCard