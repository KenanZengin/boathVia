import Image from 'next/image'
import Link from 'next/link'
import { ReservationCartProps } from '@/types'
import moment from 'moment'

import { FaStar } from "react-icons/fa";

const ReservationCard = ({data}:{data:ReservationCartProps[]}) => {
   
    
    return (
    <div className='reservation-carts'>
        {data.map((item)=>{

            const date_1 = moment(item.record_date)
            const record = date_1.subtract(3,"hours");

            const date_2 = moment(item?.time[0]);
            const date_start = date_2.subtract(3,"hours");
          
            const date_3 = moment(item?.time[item.time.length - 1]);
            const date_end = date_3.subtract(3,"hours");

           

            return(
                <div className="reservation-cart" key={item.id}>
                    <label htmlFor={item.id?.toString()} className="cart-info">
                        <div className='offer_id'>
                            <p>Offer #{item.id?.slice(8,13)} </p> 
                            <span>{item.people} person</span>
                            {item.payment 
                                ? <span className='yes-payment'>prepayment made</span> 
                                : <span className='no-payment'>no advance payment</span>
                            }
                        </div>
                        <input 
                            type="checkbox" 
                            name={item.id?.toString()} 
                            id={item.id?.toString()}
                            defaultChecked
                        />
                        <div className="arrow"></div>
                    </label>
                    <div className="r-cart-content">
                        <div className="r-cart-head">
                            <div className="ship-info">
                                <p>
                                    <span>Custom made 23m Motor Yacht</span>
                                    <FaStar size={24} />
                                    <span>{item.star}</span> 
                                    <span>({item.comment})</span>
                                </p>
                            </div>
                            <div className="ship-record">
                            <p>Hourly Rental</p>
                            <span>Creation Date: {record.format('DD MMM YYYY ddd')} </span>
                            </div>
                        </div>
                    <div className="content-info">
                            <div className="ship-detail">
                                <div className="content-img">
                                    <Image src={item.img_path} alt="ship" fill={true}/>++
                                </div>
                                <div className="details">
                                    <div className="detail">
                                        <span>Sound system is available and you can use it</span>
                                        <span>Use of cabins is prohibited</span>
                                        <span>Extra cleaning fee may be charged for parties</span>
                                        <span>Pets can be brought</span>
                                        <span>Kitchen available</span>
                                        <span>Confetti is prohibited</span>
                                    </div>
                                    <div className="go-detail">
                                        <Link href={`/ship-detail/${item.shipId}`}>
                                            See boat details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="reservation-details">
                                <div className="detail">
                                    <p>
                                        <span>Departure Port</span>
                                        : Istanbul
                                    </p>
                                    <p>
                                        <span>Arrival Port</span>
                                        : {item.port}
                                    </p>
                                    <p>
                                        <span>Number of People</span>
                                        : {item.people}
                                    </p>
                                    <p>
                                        <span>Starting Date</span>
                                        : {date_start.format('DD MMM YYYY ddd HH:mm')}
                                    </p>
                                    <p>
                                        <span>End Date</span>
                                        : {date_end.format('DD MMM YYYY ddd HH:mm')}
                                    </p>
                                    <p>
                                        <span>Total Amount</span>
                                        : TRY {item?.hour_price && new Intl.NumberFormat("en-IN",{ minimumFractionDigits: 2 }).format(Number(item?.hour_price * item?.duration))}
                                    </p>

                                    <p>
                                        <span>Online Prepayment Amount</span>
                                        : TRY {item?.hour_price && new Intl.NumberFormat("en-IN",{ minimumFractionDigits: 2 }).format(Number((item?.hour_price * (0.4 * item.duration)).toFixed(2)))}
                                    </p>
                                    <p>
                                        <span>Amount To Be Paid on Board</span>
                                        : TRY {item?.hour_price && new Intl.NumberFormat("en-IN",{ minimumFractionDigits: 2 }).format(Number((item?.hour_price * (0.6 * item?.duration)).toFixed(2)))}
                                    </p>
                                    
                                </div>
                                <div className="reservation-change">
                                    <Link href={`/payment?id=${item.id}`}>
                                        Reserve!
                                    </Link>
                                    <button>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default ReservationCard