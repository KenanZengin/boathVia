"use client"

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { ShipsCartProps } from "@/types";
import * as z from "zod"
import { FaStar } from "react-icons/fa";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import MyDatePicker from "../date/date";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReservationSchema } from "@/schemas";
import { reservation } from "@/server/actions/reservation";
import { MdError } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";



const ReservationForm = ({ship}:{ship: ShipsCartProps | undefined}) => {

  const [isPending, startTransition] = useTransition();
  const [hour,setHour] = useState<number>(2);
  const [people,setPeople] = useState<number>(2);
  const [reservationError,setReservationError] = useState<string | undefined>();
  const router = useRouter();
  


  const handleHourIncrement =  () => {
    if(hour < 10){
        setHour(()=>hour + 1);
        setValue("duration",hour+1)
    }
  };

  const handleHourDecrement =  () => {
    if(hour > 2){

        setHour(hour - 1);
        setValue("duration",hour - 1)
    }
  };

  const handlePeopleIncrement =  () => {
    if(ship){
        if(people < ship.capacity){
            setPeople(people + 1);
            setValue("people",people +1)
        }
    }
  };

  const handlePeopleDecrement =  () => {
    if(people > 1){
        setPeople(people - 1);
        setValue("people",people-1);
    }
  };

  const defaultDate = new Date();
  defaultDate.setHours(0, 0, 0);  

  const {handleSubmit, register, formState: {errors},setValue} = useForm<z.infer<typeof ReservationSchema>>({
    resolver: zodResolver(ReservationSchema),
    defaultValues:{
        port: ship?.port[0],
        time: defaultDate,
        duration: hour,
        people: people,
        
    }
  });

  const onSubmit = (values: z.infer<typeof ReservationSchema>) => {

    setReservationError(undefined)
    startTransition(()=>{
        if(ship && ship.id && values){
            reservation(values,ship?.id.toString(),ship.hour_price).then((data)=>{console.log(data)
                    if(data.status === true){
                        router.push(
                            `/payment?id=${data.reservationId}`
                        );
                        router.refresh();
                    }
                    if(data.error){
                        setReservationError(data.error)
                    }
                }
            )
        }
    })
}


  return (
    <div className="price-card">
        <div className="head"> 
            <div className="price-v">
                <p>TRY {new Intl.NumberFormat("en-IN",{ minimumFractionDigits: 2 }).format(Number(ship?.hour_price))}</p>&nbsp;
                <span>/hour</span>
            </div>
            <div className="comment-info">
                <FaStar size={20} />
                <p>
                    {ship?.star}
                </p>
                <p>                                        
                    ({ship?.comment})
                </p>
            </div>
        </div>
        <div className="options">
           <form id="reset-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="port">
                    <span className="opt-inf">Port</span>
                    <div className="port-s">
                        <select id="port"  {...register("port")} >  
                            {ship?.port.map((item,i)=>(
                                <option value={item} key={i} >{item}</option>
                            ))}        
                        </select>
                    </div>
                </div>
                <div className="date">
                    <span className="opt-inf">Start Date</span>
                    <MyDatePicker  setValue={setValue} shipId={ship?.id}/>
                </div>
                <div className="duration">
                    <span className="opt-inf">Tour Duration</span>
                    <div className="opt-in">
                        <p onClick={handleHourDecrement}><FiMinusCircle size={25} /></p>

                        <div className="opt-in-v">
                            <input
                            id="duration"
                            type="number"   
                            inputMode="numeric"
                            readOnly
                            max={10}
                            min={2}
                            value={hour}
                            />
                            <span>hour</span>
                        </div>
                        <p onClick={handleHourIncrement}><FiPlusCircle size={25}/></p>
                </div>
                </div>
                <div className="people">
                    <span className="opt-inf">Number of People</span>
                    <div className="opt-in">
                            <p onClick={handlePeopleDecrement}><FiMinusCircle size={25}/></p>

                            <div className="opt-in-p">
                                    <input
                                        type="number"   
                                        inputMode="numeric"
                                        readOnly
                                        max={ship?.capacity}
                                        min={1}
                                        value={people}
                                    />
                            </div>
                            
                            <p onClick={handlePeopleIncrement}><FiPlusCircle size={25}/></p>
                    </div>
                </div>
           </form>
           {reservationError &&  <div className="form-message">
            <div className="form-message-content error">
                <p> <MdError size={24}/>{reservationError}</p>
            </div>
        </div>}
        </div>
        <div className="order">
            <button form="reset-form">
            {!isPending ? "Reserve" : <AiOutlineLoading3Quarters size={25} className='loading' />}

            </button>
            <span className="right">
                Since instant booking is active, you will be directed to the payment page.
            </span>
            <div className="price-calculate">
                <div className="calc">
                    <span>TRY {ship?.hour_price} x {hour} hours</span>
                    <span>TRY {ship?.hour_price && ship?.hour_price * hour}</span>
                </div>
                <div className="total">
                    <p>Total amount</p>
                    <p>TRY {ship?.hour_price && new Intl.NumberFormat("en-IN",{ minimumFractionDigits: 2 }).format(Number(ship?.hour_price * hour))}</p>
                </div>
                <div className="total">
                    <p>Online prepayment amount</p>
                    <p>TRY {ship?.hour_price && new Intl.NumberFormat("en-IN",{ minimumFractionDigits: 2 }).format(Number((ship?.hour_price * (0.4 * hour)).toFixed(2)))}</p>
                </div>
                <div className="total">
                    <p>Amount to be paid on board</p>
                    <p>TRY {ship?.hour_price && new Intl.NumberFormat("en-IN",{ minimumFractionDigits: 2 }).format(Number((ship?.hour_price * (0.6 * hour)).toFixed(2)))}</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ReservationForm


