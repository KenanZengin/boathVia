"use client"

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { deleteReservation } from "@/server/actions/delete-reservation";
import { ReservationCartProps } from "@/types"
import { FaCheck } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const CancelReservation = ({data}:{data:ReservationCartProps | undefined}) => {

  const [isPending, startTransition] = useTransition();
  const [cancelMessage,setCancelMessage] = useState<string | undefined>();
  const [errorMessage,setErrorMessage] = useState<string | undefined>();
  const router = useRouter();


  const delete_reservation = () => {
    setCancelMessage(undefined);
    setErrorMessage(undefined);

   startTransition(()=>{
        if(data && data.id){
            deleteReservation(data.id,data.time,data.shipId)
                .then((data)=>{
                    if(data.delete){
                        setCancelMessage(data.message);
                        router.refresh()
                    }
                    if(data.error){
                        setErrorMessage(data.error)
                    }
                });
        }
    });
  }


  return (
    <div className="cancel-btn">
        <button 
            type="button" 
            onClick={delete_reservation}
            disabled={isPending}
        >
            {!isPending ? "Cancel" : <AiOutlineLoading3Quarters size={25} className='loading' />}
        </button>   
        {cancelMessage &&  <div className="form-message">
            <div className="form-message-content success">
                <p> <FaCheck size={24}/>{cancelMessage}</p>
            </div>
        </div>}
        {errorMessage &&  <div className="form-message">
            <div className="form-message-content error">
                <p> <MdError size={24}/>{errorMessage}</p>
            </div>
        </div>}
    </div>
  )
}

export default CancelReservation