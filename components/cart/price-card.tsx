"use client"

import { useState } from "react";
import { ShipsCartProps } from "@/types";

import { FaStar } from "react-icons/fa";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import MyDatePicker from "../date/date";



const PriceCard = ({ship}:{ship: ShipsCartProps | undefined}) => {

  const [hour,setHour] = useState<number>(2);
  const [people,setPeople] = useState<number>(0);


  const handleHourIncrement =  () => {
    if(hour < 10) setHour(hour + 1);
  };

  const handleHourDecrement =  () => {
    if(hour > 2) setHour(hour - 1);
  };

  const handlePeopleIncrement =  () => {
    if(people < 10) setPeople(people + 1);
  };

  const handlePeopleDecrement =  () => {
    if(people > 0) setPeople(people - 1);
  };



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
            <div className="port">
                <span className="opt-inf">Port</span>
                <div className="port-s">
                    <select name="port" id="port">
                        <option value="1">Kandilli</option>
                        <option value="2">Bebek</option>            
                    </select>
                </div>
            </div>
            <div className="date">
                <span className="opt-inf">Start Date</span>
                <MyDatePicker />
            </div>
            <div className="duration">
                <span className="opt-inf">Tour Duration</span>
                <div className="opt-in">
                    <button onClick={handleHourDecrement}><FiMinusCircle size={25} /></button>

                    <div className="opt-in-v">
                        <input
                        type="number"   
                        inputMode="numeric"
                        readOnly
                        max={10}
                        min={2}
                        value={hour}
                        />
                        <span>hour</span>
                    </div>
                    <button onClick={handleHourIncrement}><FiPlusCircle size={25}/></button>
            </div>
            </div>
            <div className="people">
                <span className="opt-inf">Tour Duration</span>
                <div className="opt-in">
                        <button onClick={handlePeopleDecrement}><FiMinusCircle size={25}/></button>

                           <div className="opt-in-p">
                                <input
                                    type="number"   
                                    inputMode="numeric"
                                    readOnly
                                    max={10}
                                    min={0}
                                    value={people}
                                />
                           </div>
                        
                        <button onClick={handlePeopleIncrement}><FiPlusCircle size={25}/></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PriceCard