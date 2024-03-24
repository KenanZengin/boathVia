import Image from 'next/image'
import Link from 'next/link'
import { ReservationCartProps } from '@/types'
import moment from 'moment'

const ReservationCard = ({data}:{data:ReservationCartProps[]}) => {
 
    
    return (
    <div className='reservation-carts'>
        {data.map((item)=>{

            const date_1 = moment(item.record_date)
            const record = date_1.subtract(3,"hours");

            return(
                <div className="reservation-cart" key={item.id}>
                <label htmlFor={item.id?.toString()} className="cart-info">
                    <input 
                        type="checkbox" 
                        name={item.id?.toString()} 
                        id={item.id?.toString()}
                    />
                    <p>
                        Offer #{item.id?.slice(8,13)}  
                        <span>&nbsp;&nbsp;-&nbsp;&nbsp;{item.people}</span>
                        {record.toString()}
                    </p>
                    
                </label>
                <div className="r-cart-content">
                    <div className="r-cart-head">
                        <div className="ship-info">
                            <p>Custom made 23m Motor Yacht</p>
                            <span>{item.star} {item.comment}</span>
                        </div>
                        <div className="ship-record">
                            <span>
                            {date_1.format('DD MMM YYYY ddd HH:mm')}
                            
                            </span>
                        </div>
                    </div>
                   <div className="content-img">
                        <Image src={item.img_path} alt="ship" fill={true}/>
                   </div>
                </div>
                </div>
            )
        })}
    </div>
  )
}

export default ReservationCard